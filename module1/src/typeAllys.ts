{
  //Types allyus of object

  type student = {
    name: string;
    gender: string;
    age: number;
    contact?: string;
    address: string;
  };

  const student1: student = {
    name: "Md Arifur Rahman",
    gender: "Male",
    age: 28,
    contact: "01538866223",
    address: "Dhaka",
  };
  const student2: student = {
    name: "Md Sujon Rahman",
    gender: "Male",
    age: 29,
    contact: "01538866225",
    address: "Tha",
  };
  const student3: student = {
    name: "Md Karim Rahman",
    gender: "Male",
    age: 24,
    contact: "01538867223",
    address: "Cha",
  };

  //Genarel type allys

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Rahim";
  const isAdmin: IsAdmin = true;

  //function type allys

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
