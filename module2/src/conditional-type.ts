{
  //? Different types condition

  type E1 = number;
  type E2 = undefined;

  type x = E1 extends null ? true : false;

  type y = E1 extends null ? true : E2 extends undefined ? undefined : any;

  type sheikh = {
    car: string;
    bike: string;
    ship: string;
  };

  type checkVachals<T> = T extends "car" | "bike" | "ship" ? true : false;
  type checkVachals1<T> = T extends keyof sheikh ? true : false;
}
