{
  //? Function with generic

  const generalArrayfunction = (params: string): string[] => {
    return [params];
  };

  const arrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };

  const result1 = arrayWithGeneric<string>("Rahim");

  type User = {
    name: string;
    age: number;
  };

  const result2 = arrayWithGeneric<User>({ name: "Md Arifur Rahman", age: 30 });

  const arrayWithGenericTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };

  const result10 = arrayWithGenericTuple<string, number>("Rahim", 1000);

  type User2 = {
    name: string;
    age: number;
  };

  interface User3 {
    address: string;
    contact: number;
  }

  const result20 = arrayWithGenericTuple<User2, User3>(
    {
      name: "Md Arifur Rahman",
      age: 30,
    },
    { address: "Thakurgoan", contact: 45662458 }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level web development";

    return {
      ...student,
      course,
    };
  };

  const output = addCourseToStudent({ name: "barek", age: 40 });
  const output2 = addCourseToStudent({
    name: "barek",
    age: 40,
    phone: "iphone",
  });

  const output3 = addCourseToStudent([
    { name: "barek", age: 40 },
    {
      name: "barek",
      age: 40,
      phone: "iphone",
    },
  ]);
}
