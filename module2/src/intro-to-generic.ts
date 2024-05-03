{
  //! Generic array type

  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [4, 5, 6, 8];

  //?   const rollNumber: Array<number> = [4, 5, 6, 8];

  const rollNumber: GenericArray<number> = [4, 5, 6, 8];

  //  const members: string[] = ["Rahim", "Karim", "Jobbar"];

  //?   const members: Array<string> = ["Rahim", "Karim", "Jobbar"];

  const members: GenericArray<string> = ["Rahim", "Karim", "Jobbar"];

  //  const isAdmin: boolean[] = [true, false, false, true];

  //?   const isAdmin: boolean[] = [true, false, false, true];

  const isAdmin: GenericArray<boolean> = [true, false, false, true];

  //! Generic Object type

  /* const user: GenericArray<object> =[

    {
        name:"Noman Ahmed",
        age:40,
    },
    {
        profession:"instructor",
        position:"CEO"
    }
 ] */

  type User = {
    name: string;
    age: number;
  };
  const user: GenericArray<User> = [
    {
      name: "Noman Ahmed",
      age: 40,
    },

    {
      name: "instructor",
      age: 200,
    },
  ];

  //! Generic Tuple type

  type GenericTuple<X, Y> = [X, Y];

  const identiy: GenericTuple<string, string> = [
    "Md Arifur Rahman",
    "a@gmail.com",
  ];

  console.log(identiy);

  //?   const userId : [id:number, name:string, email:string]=[ 1234, "Md Arifur Rahman", "arifur@gmail.com"]

  const userId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Md Arifur Rahman", email: "arifur@gmail.com" },
  ];

  console.log(userId);
}
