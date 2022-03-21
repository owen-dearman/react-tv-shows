export function twoDigitConverter(num: number): string {
  const numString = num.toString();
  let updatedNumString;
  numString.length === 1
    ? (updatedNumString = "0" + numString)
    : (updatedNumString = numString);
  return updatedNumString;
}
