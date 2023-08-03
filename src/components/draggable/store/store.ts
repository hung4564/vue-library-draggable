import Vue from "vue";

if (!Vue.prototype.$_hungpv_drag) {
  Vue.prototype.$_hungpv_drag = {};
}

export function getStore(type: string) {
  if (type) {
    return Vue.prototype.$_hungpv_drag[type];
  }
  return Vue.prototype.$_hungpv_drag;
}

export function setStore(type: string, value: any) {
  if (type) {
    Vue.prototype.$_hungpv_drag[type] = value;
  }
}

export function initStore<T = any>(type: string, cb?: () => T) {
  if (type && !Vue.prototype.$_hungpv_drag[type]) {
    if (cb) Vue.prototype.$_hungpv_drag[type] = cb() as T;
    else Vue.prototype.$_hungpv_drag[type] = {};
  }
}
