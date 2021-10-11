export function toUppercase(text: string) {
  return text.toUpperCase();
}


export function getMinimumItemArray(inputItems: any[] = [], minimumAmount: number = 4) {
  //Utility function which helps resolve looping/layout issues with KeenSlider generating an array of inputItems with a minimum length
  let items = [...inputItems];

  if (!items.length) return items;

  while (items.length < minimumAmount) {
    items = [...items, ...items];
  }

  return items;
}
