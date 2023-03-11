if (!window.$_drag_store_action) {
  window.$_drag_store_action = {};
}
export function initActionCache(container_id) {
  window.$_drag_store_action[container_id] = {};
}
export function removeActionCache(container_id) {
  delete window.$_drag_store_action[container_id];
}
export function setFunctionActionCache(container_id, sub_id, action) {
  if (!window.$_drag_store_action[container_id]) {
    window.$_drag_store_action[container_id] = {};
  }
  window.$_drag_store_action[container_id][sub_id] = action;
}
export function removeFunctionActionCache(container_id, sub_id) {
  if (!window.$_drag_store_action[container_id]) {
    return;
  }
  window.$_drag_store_action[container_id][sub_id] = undefined;
}
export function getFunctionActionCache(container_id, sub_id) {
  if (!window.$_drag_store_action[container_id]) {
    return;
  }
  return window.$_drag_store_action[container_id][sub_id];
}
