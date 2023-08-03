import {
  ActionOption,
  getFunctionActionCache,
  removeFunctionActionCache,
  setFunctionActionCache
} from "../action";

import { get as getStoreContainer } from "../container";

type PopupActionOption = ActionOption & {
  show?: boolean;
};

export function register(
  container_id: string,
  sidebar_id: string,
  { setIndex, show }: PopupActionOption
) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  if (!p_store.popup.items.includes(sidebar_id)) {
    p_store.popup.items.push(sidebar_id);
  }
  setFunctionActionCache<PopupActionOption>(container_id, sidebar_id, {
    setIndex
  });
  registerShow(container_id, sidebar_id, !!show);
}
export function unRegister(container_id: string, sidebar_id: string) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  if (!p_store) return;
  const items = p_store.popup.items;
  const index = items.indexOf(sidebar_id);
  if (index !== -1) {
    items.splice(index, 1);
  }
  p_store.popup.items = items;
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
  const sidebar_ids_show = p_store.popup.show;
  if (show && !sidebar_ids_show.includes(sidebar_id)) {
    sidebar_ids_show.push(sidebar_id);
  } else if (!show) {
    const index = sidebar_ids_show.indexOf(sidebar_id);
    if (index !== -1) {
      sidebar_ids_show.splice(index, 1);
    }
  }
  p_store.popup.show = sidebar_ids_show;
}
function updateAllIndex(container_id: string, sidebar_id: string) {
  const p_store = getStoreContainer(container_id);
  p_store.popup.show.forEach((sidebar_id: string, index: number) => {
    const action = getFunctionActionCache<PopupActionOption>(
      container_id,
      sidebar_id
    );
    if (action) action.setIndex(index < 0 ? 1 : index + 2);
  });
}
export function setToBack(container_id: string, sidebar_id: string) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  const index = p_store.popup.show.findIndex((x) => x == sidebar_id);
  if (index > 0) {
    p_store.popup.show.splice(index, 1);
    p_store.popup.show.unshift(sidebar_id);
    updateAllIndex(container_id, sidebar_id);
  }
}
export function setToFront(container_id: string, sidebar_id: string) {
  if (!container_id || !sidebar_id) return;
  const p_store = getStoreContainer(container_id);
  const index = p_store.popup.show.findIndex((x) => x == sidebar_id);
  if (index < p_store.popup.show.length - 1) {
    p_store.popup.show.splice(index, 1);
    p_store.popup.show.push(sidebar_id);
    updateAllIndex(container_id, sidebar_id);
  }
}

export function getIdsShow(container_id: string, sidebar_id: string) {
  const p_store = getStoreContainer(container_id);
  return p_store.popup.show;
}
