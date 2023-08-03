import { getStore, initStore } from "./store";

const KEY = "container";

initStore(KEY);
type ContainerStore = {
  sidebar: {
    items: string[];
    show: {
      left: string[];
      right: string[];
    };
  };
  mobile: {
    items: string[];
    show: string[];
  };
  popup: {
    items: string[];
    show: string[];
  };
};
export function init(id: string) {
  const store: ContainerStore = {
    sidebar: {
      items: [],
      show: {
        left: [],
        right: []
      }
    },
    mobile: {
      items: [],
      show: []
    },
    popup: {
      items: [],
      show: []
    }
  };
  getStore(KEY)[id] = store;
}
export function remove(id: string) {
  delete getStore(KEY)[id];
}

export function get(id: string): ContainerStore {
  return getStore(KEY)[id];
}
