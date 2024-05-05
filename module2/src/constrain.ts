{
  //? Function with generic and add constrain

  const arrayWithGeneric = <T extends { id: number; email: string }>(
    params: T
  ): T[] => {
    return [params];
  };

  const result1 = arrayWithGeneric<{ id: number; email: string }>({
    id: 4555,
    email: "arif@gmail.com",
  });

  type User = {
    id: number;
    email: string;
    name: string;
    age: number;
  };

  const result2 = arrayWithGeneric<User>({
    id: 23234,
    email: "arif@gmail.com",
    name: "Md Arifur Rahman",
    age: 30,
  });

  const arrayWithGenericTuple = <T, Q extends { id: number }>(
    params1: T,
    params2: Q
  ): [T, Q] => {
    return [params1, params2];
  };

  const result10 = arrayWithGenericTuple<string, { id: number }>("Rahim", {
    id: 4545,
  });

  type User2 = {
    name: string;
    age: number;
  };

  interface User3 {
    id: number;
    address: string;
    contact: number;
  }

  const result20 = arrayWithGenericTuple<User2, User3>(
    {
      name: "Md Arifur Rahman",
      age: 30,
    },
    { id: 45454, address: "Thakurgoan", contact: 45662458 }
  );

  const addCourseToStudent = <T extends { id: number; email: string }>(
    student: T
  ) => {
    const course = "Next Level web development";

    return {
      ...student,
      course,
    };
  };

  const output = addCourseToStudent({
    id: 45787,
    email: "sojib@gmail.com",
    name: "barek",
    age: 40,
  });
  const output2 = addCourseToStudent({
    id: 45787,
    email: "sojib@gmail.com",
    name: "barek",
    age: 40,
    phone: "iphone",
  });

  const output3 = addCourseToStudent({
    id: 45787,
    email: "sojib@gmail.com",
    name: "barek",
    age: 40,
    phone: "iphone",
  });
}
