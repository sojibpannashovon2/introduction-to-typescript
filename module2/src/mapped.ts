{
  const arrayOfNumber: number[] = [4, 5, 6, 7, 8];

  const result1 = arrayOfNumber.map((number) => number.toString());

  console.log(result1);

  //? type conversion by looping variable

  type AreaNumber = {
    height: string;
    width: string;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };
}
