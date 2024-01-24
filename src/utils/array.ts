export const calAvg = (array: any[]) => {
  return array.reduce((acc, cur) => acc + cur) / array.length
}

//TODO refactor any param type to accept right array type
export const getColumnItemsFromObject = (arr: any, index: number) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array of objects");
  }
  const columnItems: any = [];
  arr.forEach((item: any) => {
    columnItems.push(item.data[index]);
  });
  return calAvg([...columnItems]);
}
