import Vue from "vue";

export function initActionCache(container_id) {
  if (!Vue.prototype.$_drag_store_action) {
    Vue.prototype.$_drag_store_action = {};
  }
  Vue.prototype.$_drag_store_action[container_id] = {};
}
export function removeActionCache(container_id) {
  delete Vue.prototype.$_drag_store_action[container_id];
}
export function setFunctionActionCache(container_id, sub_id, action) {
  if (!Vue.prototype.$_drag_store_action[container_id]) {
    return;
  }
  Vue.prototype.$_drag_store_action[container_id][sub_id] = action;
}
export function removeFunctionActionCache(container_id, sub_id) {
  if (!Vue.prototype.$_drag_store_action[container_id]) {
    return;
  }
  Vue.prototype.$_drag_store_action[container_id][sub_id] = undefined;
}
export function getFunctionActionCache(container_id, sub_id) {
  if (!Vue.prototype.$_drag_store_action[container_id]) {
    return;
  }
  return Vue.prototype.$_drag_store_action[container_id][sub_id];
}
