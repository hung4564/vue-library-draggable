import {
  getFunctionActionCache,
  removeFunctionActionCache,
  setFunctionActionCache
} from "./cache";

import { getStoreDraggable } from "./container";

const register = (id, mobile_id, { setIndex }) => {
  if (!id || !mobile_id) return;
  let p_store = getStoreDraggable(id);
  if (!p_store.mobile_ids.includes(mobile_id)) {
    p_store.mobile_ids.push(mobile_id);
  }
  setFunctionActionCache(id, mobile_id, { setIndex });
};
const unRegister = (id, mobile_id) => {
  if (!id || !mobile_id) return;
  removeFunctionActionCache(id, mobile_id);
  let p_store = getStoreDraggable(id);
  if (!p_store || !p_store.mobile_ids) return;
  p_store.mobile_ids = p_store.mobile_ids.filter((x) => x != id);
  p_store.mobile_ids_show = p_store.mobile_ids_show.filter((x) => x != id);
};
const registerShow = (id, mobile_id, show) => {
  if (!id || !mobile_id) return;
  setShowId(id, mobile_id, show);
  updateAllIndex(id);
};
const setShowId = (id, mobile_id, show) => {
  if (!id || !mobile_id) return;
  let p_store = getStoreDraggable(id);
  let mobile_ids_show = p_store.mobile_ids_show;
  if (show && !mobile_ids_show.includes(mobile_id)) {
    mobile_ids_show.push(mobile_id);
  } else if (!show) {
    var index = mobile_ids_show.indexOf(mobile_id);
    if (index !== -1) {
      mobile_ids_show.splice(index, 1);
    }
  }
  p_store.mobile_ids_show = mobile_ids_show;
};
const updateAllIndex = (id) => {
  if (!id) return;
  let p_store = getStoreDraggable(id);
  p_store.mobile_ids_show.forEach((mobile_id, index) => {
    let action = getFunctionActionCache(id, mobile_id);
    if (action) action.setIndex(index < 0 ? 1 : index + 2);
  });
};

const setToBack = (id, mobile_id) => {
  if (!id || !mobile_id) return;
  let p_store = getStoreDraggable(id);
  let index = p_store.mobile_ids_show.findIndex((x) => x == mobile_id);
  if (index > 0) {
    p_store.mobile_ids_show.splice(index, 1);
    p_store.mobile_ids_show.unshift(mobile_id);
    updateAllIndex(id);
  }
};
const setToFront = (id, mobile_id) => {
  if (!id || !mobile_id) return;
  let p_store = getStoreDraggable(id);
  let index = p_store.mobile_ids_show.findIndex((x) => x == mobile_id);
  if (index < p_store.mobile_ids_show.length - 1) {
    p_store.mobile_ids_show.splice(index, 1);
    p_store.mobile_ids_show.push(mobile_id);
    updateAllIndex(id);
  }
};

export { register, unRegister, registerShow, setToFront, setToBack };
