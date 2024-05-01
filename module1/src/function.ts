{
  //General function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //Arrow function

  const addMe = (num1: number, num2: number): number => num1 + num2;

  //? Object ------ function ----- Method

  const defaultUser = {
    name: "Sojib",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is now ${this.balance + balance}`;
    },
  };

  //? Map function

  const array: number[] = [4, 5, 6];

  const newarray: number[] = array.map((item: number): number => item * item);
}
