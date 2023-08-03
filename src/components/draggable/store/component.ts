import { getStore, initStore } from "./store";
const KEY = "component";
initStore(KEY);
export function init(id: string) {
  getStore(KEY)[id] = {
    cardComponent: "map-card",
    cardPopupComponent: "map-card",
    cardSidebarComponent: "map-card",
    cardBottomComponent: "map-card"
  };
}
export function remove(id: string) {
  delete getStore(KEY)[id];
}
export const setCardComponent = (
  id: string,
  {
    cardComponent,
    cardPopupComponent,
    cardSidebarComponent,
    cardBottomComponent
  }: {
    cardComponent: string;
    cardPopupComponent: string;
    cardSidebarComponent: string;
    cardBottomComponent: string;
  }
) => {
  const store = getStore(KEY)[id];
  store.cardComponent = cardComponent;
  store.cardPopupComponent = cardPopupComponent;
  store.cardSidebarComponent = cardSidebarComponent;
  store.cardBottomComponent = cardBottomComponent;
};
export const getCardPopupComponent = (id: string) => {
  const store = getStore(KEY)[id];
  return store.cardPopupComponent || store.cardComponent;
};

export const getCardSidebarComponent = (id: string) => {
  const store = getStore(KEY)[id];
  return store.cardSidebarComponent || store.cardComponent;
};

export const getCardBottomComponent = (id: string) => {
  const store = getStore(KEY)[id];
  return store.cardBottomComponent || store.cardComponent;
};
