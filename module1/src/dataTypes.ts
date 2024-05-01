// Basic Data Types

//! Primitive Data Types
//String

let firstname: string = "Noman Ahmed";

//Number

let roll: number = 123456;

//Boolean

let isAdmin: boolean = true;

//undefined

let x: undefined = undefined;

//null

let y: null = null;

//! Non-Primitive Data

//array

let friends: string[] = ["Noman", "Tabassum"];

let eligableRollList: number[] = [101, 102, 103];

//Tuple -- Array -- Order -- Type of Values

let cordinates: [number, number] = [103, 104];

let ageName: [number, string, boolean] = [45, "Rahim", true];

// Reference type object

const user: {
  readonly contact: string;
  company: "Programming Hero";
  name: string;
  lastName?: string; //Optional type
  isMarried: boolean;
} = {
  contact: "Thakurgoan",
  company: "Programming Hero",
  name: "Md Arifur Rahman",
  isMarried: false,
};
