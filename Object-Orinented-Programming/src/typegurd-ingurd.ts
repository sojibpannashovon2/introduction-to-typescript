{
  //?TypeGurd

  type Alphaneumetric = string | number;

  const addition = (
    param1: Alphaneumetric,
    param2: Alphaneumetric
  ): Alphaneumetric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = addition("4", 5);
  console.log(result1);

  //? Ingurd Concept

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user?.name} and My  role is ${user?.role}`);
    } else {
      console.log(`My name is ${user?.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Md Arifur Rahman",
  };
  const adminUser: AdminUser = {
    name: "Md Arifur Rahman",
    role: "admin",
  };

  const result = getUser(normalUser);
  const result3 = getUser(adminUser);
}
