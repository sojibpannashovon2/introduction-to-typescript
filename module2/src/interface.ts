{
  //? Interface, types vs interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  //? For typing Allyes

  type userWithRole1 = User1 & { role: string };

  const user1: userWithRole1 = {
    name: "Noman",
    age: 40,
    role: "Admin",
  };

  //? For interfacing object

  interface userWithRole2 extends User2 {
    role: string;
  }

  const user: userWithRole2 = {
    name: "Adnan",
    age: 20,
    role: "admin",
  };

  interface userWithRole3 extends User1 {
    contact: string;
  }

  //? For interfacing Array

  type Number1 = number[];

  const rollno1: Number1 = [4, 5, 6];
  console.log(rollno1);

  interface Number2 {
    [index: number]: number;
  }
  const rollno2: Number2 = [4, 5, 6];

  console.log(rollno2);

  //? For interfacing function

  type Add1 = (num1: number, num2: number) => number;

  const addition1: Add1 = (num1, num2) => num1 + num2;

  console.log(addition1(10, 20));

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const addition2: Add2 = (num1, num2) => num1 + num2;

  console.log(addition2(10, 80));
}
