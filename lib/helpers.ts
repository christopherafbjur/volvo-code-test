export function toUppercase(text: string) {
  return text.toUpperCase();
}


export function getMinimumItemArray(inputItems: any, minimumAmount: number) {
  //Utility function which helps resolve looping/layout issues with KeenSlider generating an array of inputItems with a minimum length
  var items = [...inputItems];

  if (inputItems >= minimumAmount) return inputItems;
  if (!inputItems.length) return inputItems;

  while (items.length < minimumAmount) {
    items = [...items, ...inputItems];
  }

  return items;
}
