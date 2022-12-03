import { ACTION_CACHE } from "./cache";
import Vue from "vue";

const store = new Vue.observable({});

export const setDraggableContainer = (id) => {
  ACTION_CACHE[id] = {};
  Vue.set(store, id, {
    popup_ids: [],
    popup_ids_show: [],
    sidebar_ids: [],
    sidebar_ids_show: [],
    mobile_ids: [],
    mobile_ids_show: [],
    parent: { width: 0, height: 0 },
    isMobile: false
  });
};
export const removeDraggableContainer = (id) => {
  delete ACTION_CACHE[id];
  Vue.delete(store, id);
};
export const getStoreDraggable = (id) => store[id] || {};

export const getParentProps = (id) => getStoreDraggable(id).parent;
export const getParentWidth = (id) => getStoreDraggable(id).parent.width;
export const getParentHeight = (id) => getStoreDraggable(id).parent.height;

export const setParentProps = (id, { width, height }) => {
  if (!id) return;
  getStoreDraggable(id).parent.width = width;
  getStoreDraggable(id).parent.height = height;
  setIsMobile(id, width && width <= 600);
};

export const isMobile = (id) => getStoreDraggable(id).isMobile;
export const setIsMobile = (id, value) => {
  getStoreDraggable(id).isMobile = value;
};
