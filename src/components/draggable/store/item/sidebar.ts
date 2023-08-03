import {
  ActionOption,
  getFunctionActionCache,
  removeFunctionActionCache,
  setFunctionActionCache
} from "../action";

import { get as getStoreContainer } from "../container";

type SideBarOptionAction = ActionOption & {
  position: "right" | "left";
  show?: boolean;
};

export function register(
  container_id: string,
  sidebar_id: string,
  { setIndex, position, show }: SideBarOptionAction
) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  if (!p_store.sidebar.items.includes(sidebar_id)) {
    p_store.sidebar.items.push(sidebar_id);
  }
  setFunctionActionCache<SideBarOptionAction>(container_id, sidebar_id, {
    setIndex,
    position
  });
  registerShow(container_id, sidebar_id, !!show);
}
export function unRegister(container_id: string, sidebar_id: string) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  if (!p_store) return;
  const items = p_store.sidebar.items;
  const index = items.indexOf(sidebar_id);
  if (index !== -1) {
    items.splice(index, 1);
  }
  p_store.sidebar.items = items;
  registerShow(container_id, sidebar_id, false);
  removeFunctionActionCache(container_id, sidebar_id);
}
export function registerShow(
  container_id: string,
  sidebar_id: string,
  show: boolean
) {
  if (!container_id || !sidebar_id) return;
  setShowId(container_id, sidebar_id, show);
  updateAllIndex(container_id, sidebar_id);
}
function setShowId(container_id: string, sidebar_id: string, show: boolean) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  const position = getPosition(container_id, sidebar_id);
  const sidebar_ids_show = p_store.sidebar.show[position];
  if (show && !sidebar_ids_show.includes(sidebar_id)) {
    sidebar_ids_show.push(sidebar_id);
  } else if (!show) {
    const index = sidebar_ids_show.indexOf(sidebar_id);
    if (index !== -1) {
      sidebar_ids_show.splice(index, 1);
    }
  }
  p_store.sidebar.show[position] = sidebar_ids_show;
}
function updateAllIndex(container_id: string, sidebar_id: string) {
  const p_store = getStoreContainer(container_id);
  const position = getPosition(container_id, sidebar_id);
  p_store.sidebar.show[position].forEach(
    (sidebar_id: string, index: number) => {
      const action = getFunctionActionCache<SideBarOptionAction>(
        container_id,
        sidebar_id
      );
      if (action) action.setIndex(index < 0 ? 1 : index + 2);
    }
  );
}
export function setToBack(container_id: string, sidebar_id: string) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  const position = getPosition(container_id, sidebar_id);
  const index = p_store.sidebar.show[position].findIndex(
    (x) => x == sidebar_id
  );
  if (index > 0) {
    p_store.sidebar.show[position].splice(index, 1);
    p_store.sidebar.show[position].unshift(sidebar_id);
    updateAllIndex(container_id, sidebar_id);
  }
}
export function setToFront(container_id: string, sidebar_id: string) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  const position = getPosition(container_id, sidebar_id);
  const index = p_store.sidebar.show[position].findIndex(
    (x) => x == sidebar_id
  );
  if (index < p_store.sidebar.show[position].length - 1) {
    p_store.sidebar.show[position].splice(index, 1);
    p_store.sidebar.show[position].push(sidebar_id);
    updateAllIndex(container_id, sidebar_id);
  }
}

export function getIdsShow(container_id: string, sidebar_id: string) {
  const p_store = getStoreContainer(container_id);
  const position = getPosition(container_id, sidebar_id);
  return p_store.sidebar.show[position];
}

export function getPosition(container_id: string, sidebar_id: string) {
  const action = getFunctionActionCache<SideBarOptionAction>(
    container_id,
    sidebar_id
  );
  return (action && action.position) || "left";
}
