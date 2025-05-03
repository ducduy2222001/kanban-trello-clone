export const mapOrder = (
  originalArray: any[],
  orderArray: any[],
  key: string
) => {
  if (!originalArray || !orderArray || !key) return [];

  return originalArray.sort((a: any, b: any) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
  });
};
