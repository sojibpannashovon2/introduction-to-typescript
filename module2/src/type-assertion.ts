{
  //Type assertion

  let anything: any;

  anything = "it can be anything";
  anything = 56;

  anything as string;

  const kgToGm = (value: any): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;

      return `The converted value is: ${convertedValue}`;
    } else if (typeof value === "number") {
      const convertedValue = value * 1000;

      return `The converted value is: ${convertedValue}`;
    }
  };

  const result1 = kgToGm(10) as number;
  const result2 = kgToGm("10") as string;
}
