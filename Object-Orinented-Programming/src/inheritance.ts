{
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOTime: number) {
      console.log(`${this.name} will sleep ${numberOTime} at night`);
    }
  }
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Pavel", 20, "Kaunsil");
  student1.getSleep(8);
  console.log(student1);

  //! Second child

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOffClass: string) {
      console.log(`${this.name} will take ${numberOffClass} at everyday`);
    }
  }

  const teacher1 = new Teacher("Pavel", 20, "Kaunsil", "Professor");
  teacher1.getSleep(9);
  teacher1.takeClass("3");
}
