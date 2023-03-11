import { getStoreDraggable, isMobile } from "./container";

import { getFunctionActionCache } from "./cache";

export * from "./container";

export const checkIsLast = (id, popup_id, items) => {
  if (!id || !popup_id) return;
  if (items.length < 1) return false;
  return items[items.length - 1] == popup_id;
};
export const checkIsFirst = (id, popup_id, items) => {
  if (!id || !popup_id) return;
  if (items.length < 1) return false;
  return items[0] == popup_id;
};

export const getPopupIdsShow = (id) => {
  let p_store = getStoreDraggable(id);
  if (isMobile(id)) {
    return p_store.mobie_ids;
  }
  return p_store.popup_ids_show;
};

export const getSidebarIdsShow = (id, position) => {
  let p_store = getStoreDraggable(id);
  if (isMobile(id)) {
    return p_store.mobie_ids;
  }
  return p_store.sidebar_ids_show.filter((sidebar_id) => {
    let action = getFunctionActionCache(id, sidebar_id);
    action && action && action["position"] == position;
  });
};

export const getMobileIdsShow = (id) => {
  let p_store = getStoreDraggable(id);
  return p_store.mobile_ids_show;
};
