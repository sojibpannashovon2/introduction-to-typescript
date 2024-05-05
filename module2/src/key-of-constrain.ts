{
  type Constrain = {
    name: string;
    age: number;
    dept: string;
  };

  type owner = "bike" | "car" | "Watch";

  type owner2 = keyof Constrain;

  const result1: owner2 = "dept";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Rahim",
    age: 41,
    profession: "student",
  };

  const result = getPropertyValue(user, "name");
}
