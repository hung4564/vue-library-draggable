import {
  getFunctionActionCache,
  removeFunctionActionCache,
  setFunctionActionCache
} from "./cache";

import { getStoreDraggable } from "./container";

const register = (id, popup_id, { setIndex }) => {
  if (!id || !popup_id) return;
  let p_store = getStoreDraggable(id);
  if (!p_store.popup_ids.includes(popup_id)) {
    p_store.popup_ids.push(popup_id);
  }
  setFunctionActionCache(id, popup_id, { setIndex });
};
const unRegister = (id, popup_id) => {
  if (!id || !popup_id) return;
  removeFunctionActionCache(id, popup_id);
  let p_store = getStoreDraggable(id);
  if (!p_store || !p_store.popup_ids) return;
  p_store.popup_ids = p_store.popup_ids.filter((x) => x != id);
  p_store.popup_ids_show = p_store.popup_ids_show.filter((x) => x != id);
};
const registerShow = (id, popup_id, show) => {
  if (!id || !popup_id) return;
  setShowId(id, popup_id, show);
  updateAllIndex(id);
};
const setShowId = (id, popup_id, show) => {
  if (!id || !popup_id) return;
  let p_store = getStoreDraggable(id);
  let popup_ids_show = p_store.popup_ids_show;
  if (show && !popup_ids_show.includes(popup_id)) {
    popup_ids_show.push(popup_id);
  } else if (!show) {
    var index = popup_ids_show.indexOf(popup_id);
    if (index !== -1) {
      popup_ids_show.splice(index, 1);
    }
  }
  p_store.popup_ids_show = popup_ids_show;
};
const updateAllIndex = (id) => {
  if (!id) return;
  let p_store = getStoreDraggable(id);
  p_store.popup_ids_show.forEach((popup_id, index) => {
    let action = getFunctionActionCache(id, popup_id);
    if (action)
      action.setIndex(
        (index < 0 ? 1 : index) + p_store.sidebar_ids_show.length + 10
      );
  });
};

const setToBack = (id, popup_id) => {
  if (!id || !popup_id) return;
  let p_store = getStoreDraggable(id);
  let index = p_store.popup_ids_show.findIndex((x) => x == popup_id);
  if (index > 0) {
    var b = p_store.popup_ids_show[index];
    p_store.popup_ids_show[index] = p_store.popup_ids_show[index - 1];
    p_store.popup_ids_show[index - 1] = b;
    updateAllIndex(id);
  }
};
const setToFront = (id, popup_id) => {
  if (!id || !popup_id) return;
  let p_store = getStoreDraggable(id);
  let index = p_store.popup_ids_show.findIndex((x) => x == popup_id);
  if (index < p_store.popup_ids_show.length - 1) {
    var b = p_store.popup_ids_show[index];
    p_store.popup_ids_show[index] = p_store.popup_ids_show[index + 1];
    p_store.popup_ids_show[index + 1] = b;
    updateAllIndex(id);
  }
};

export { register, unRegister, registerShow, setToFront, setToBack };
