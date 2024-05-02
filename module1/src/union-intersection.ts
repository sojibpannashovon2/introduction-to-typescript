{
  //! union

  type FrontendDeveloper = "juniorDevelpoer" | "seniorDeveloper";
  type FullStackDeceloper = "juniorDeveloper" | "expertDeveloper";

  type Developer2 = FrontendDeveloper | FullStackDeceloper;

  const newDeveloper: FrontendDeveloper = "juniorDevelpoer";

  type User = {
    name: string;
    age: number;
    gender: "Male" | "Female";
    blood: "A+" | "B+" | "C+" | "O+";
  };

  const user1: User = {
    name: "Rahim",
    age: 70,
    gender: "Male",
    blood: "C+",
  };

  //!Intersaction
  type JuniorDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type Developer = JuniorDeveloper & BackendDeveloper;

  const developer: Developer = {
    skills: ["html", "css", "javascript"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer", // Remove this line
  };

  console.log(developer);
}
