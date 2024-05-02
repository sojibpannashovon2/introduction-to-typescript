{
  //Nullish coalesing operator
  //? Null undefine .........  decission making

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Not a host or guest";
  console.log(result1);

  type User = {
    name: string;
    adress: {
      city: string;
      road: string;
      presenAddress: string;
      presenAddress2?: string;
    };
    age: number;
  };

  const user: User = {
    name: "Noman",
    adress: {
      city: "Chadpur",
      road: "bbt",
      presenAddress: "lokkhipur",
    },
    age: 67,
  };

  const presenAddress = user?.adress?.presenAddress2 ?? " No permanent address";
  console.log({ presenAddress });
}
