import { getStore, initStore } from "./store";

const KEY = "config";
initStore(KEY);
export function init(id: string) {
  getStore(KEY)[id] = {
    parent: { width: 0, height: 0 },
    isMobile: false
  };
}
export function remove(id: string) {
  delete getStore(KEY)[id];
}

export const getParentProps = (id: string) => getStore(KEY)[id].parent;
export const getParentWidth = (id: string) => getStore(KEY)[id].parent.width;
export const getParentHeight = (id: string) => getStore(KEY)[id].parent.height;

export const isMobile = (id: string) => getStore(KEY)[id].isMobile;
export const setIsMobile = (id: string, value: boolean) => {
  getStore(KEY)[id].isMobile = value;
};

export function setParentProps(
  id: string,
  { width, height }: { width: number; height: number }
) {
  if (!id) return;
  getStore(KEY)[id].parent.width = width;
  getStore(KEY)[id].parent.height = height;
  setIsMobile(id, !!width && width <= 600);
}
