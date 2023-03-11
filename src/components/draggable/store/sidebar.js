import {
  getFunctionActionCache,
  removeFunctionActionCache,
  setFunctionActionCache
} from "./cache";

import { getStoreDraggable } from "./container";

const register = (id, sidebar_id, { setIndex, position }) => {
  if (!id || !sidebar_id) return;
  let p_store = getStoreDraggable(id);
  if (!p_store.sidebar_ids.includes(sidebar_id)) {
    p_store.sidebar_ids.push(sidebar_id);
  }
  setFunctionActionCache(id, sidebar_id, { setIndex, position });
};
const unRegister = (id, sidebar_id) => {
  if (!id || !sidebar_id) return;
  removeFunctionActionCache(id, sidebar_id);
  let p_store = getStoreDraggable(id);
  if (!p_store || !p_store.sidebar_ids) return;
  p_store.sidebar_ids = p_store.sidebar_ids.filter((x) => x != id);
  p_store.sidebar_ids_show = p_store.sidebar_ids_show.filter((x) => x != id);
};
const registerShow = (id, sidebar_id, show) => {
  if (!id || !sidebar_id) return;
  setShowId(id, sidebar_id, show);
  updateAllIndex(id);
};
const setShowId = (id, sidebar_id, show) => {
  if (!id || !sidebar_id) return;
  let p_store = getStoreDraggable(id);
  let sidebar_ids_show = p_store.sidebar_ids_show;
  if (show && !sidebar_ids_show.includes(sidebar_id)) {
    sidebar_ids_show.push(sidebar_id);
  } else if (!show) {
    var index = sidebar_ids_show.indexOf(sidebar_id);
    if (index !== -1) {
      sidebar_ids_show.splice(index, 1);
    }
  }
  p_store.sidebar_ids_show = sidebar_ids_show;
};
const updateAllIndex = (id) => {
  if (!id) return;
  let p_store = getStoreDraggable(id);
  p_store.sidebar_ids_show.forEach((sidebar_id, index) => {
    let action = getFunctionActionCache(id, sidebar_id);
    if (action) action.setIndex(index < 0 ? 1 : index + 2);
  });
};
const setToBack = (id, sidebar_id) => {
  if (!id || !sidebar_id) return;
  let p_store = getStoreDraggable(id);
  let index = p_store.sidebar_ids_show.findIndex((x) => x == sidebar_id);
  if (index > 0) {
    p_store.sidebar_ids_show.splice(index, 1);
    p_store.sidebar_ids_show.unshift(sidebar_id);
    updateAllIndex(id);
  }
};
const setToFront = (id, sidebar_id) => {
  if (!id || !sidebar_id) return;
  let p_store = getStoreDraggable(id);
  let index = p_store.sidebar_ids_show.findIndex((x) => x == sidebar_id);
  if (index < p_store.sidebar_ids_show.length - 1) {
    p_store.sidebar_ids_show.splice(index, 1);
    p_store.sidebar_ids_show.push(sidebar_id);
    updateAllIndex(id);
  }
};
export { register, unRegister, registerShow, setToBack, setToFront };
