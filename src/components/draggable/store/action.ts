import { getStore, initStore } from "./store";
const KEY = "action";

initStore(KEY);
export type ActionOption = {
  setIndex: Function;
};
type ActionStore = {
  [key: string]: ActionOption;
};
export function init(id: string) {
  getStore(KEY)[id] = {};
}
export function remove(id: string) {
  delete getStore(KEY)[id];
}

export function get(id: string): ActionStore {
  return getStore(KEY)[id];
}

export function setFunctionActionCache<T extends ActionOption = any>(
  container_id: string,
  sub_id: string,
  action: T
) {
  const p_store = get(container_id);
  p_store[sub_id] = action;
}
export function removeFunctionActionCache(
  container_id: string,
  sub_id: string
) {
  const p_store = get(container_id);
  if (p_store) delete p_store[sub_id];
}
export function getFunctionActionCache<T extends ActionOption = any>(
  container_id: string,
  sub_id: string
): T {
  const p_store = get(container_id);
  return p_store[sub_id] as T;
}
