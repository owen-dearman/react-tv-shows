import { twoDigitConverter } from "./twoDigitConverter";

test("single digit should be returned as two digits", () => {
  expect(twoDigitConverter(7)).toEqual("07");
  expect(twoDigitConverter(1)).toEqual("01");
  expect(twoDigitConverter(5)).toEqual("05");
  expect(twoDigitConverter(9)).toEqual("09");
});
