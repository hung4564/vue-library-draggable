export function checkIsLast(id: string, popup_id: string, items: string[]) {
  if (!id || !popup_id) return;
  if (items.length < 1) return false;
  return items[items.length - 1] == popup_id;
}
export function checkIsFirst(id: string, popup_id: string, items: string[]) {
  if (!id || !popup_id) return;
  if (items.length < 1) return false;
  return items[0] == popup_id;
}
