{
  //! Generic Interface

  interface Supplier<T, M = null> {
    name: string;
    mobile: {
      brand: string;
      model: string;
      relaseDate: number;
    };
    smartWatch: T;

    bike?: M;
  }

  interface SmartWatch {
    brand: string;
    model: string;
  }

  const smallStore: Supplier<SmartWatch> = {
    name: "Sojib Store",

    mobile: {
      brand: "apple",
      model: "iphone 14 pro max",
      relaseDate: 2023,
    },
    smartWatch: {
      brand: "apple",
      model: "Generation 5",
    },
  };

  interface SmartWatch {
    brand: string;
    model: string;
  }

  interface Bike {
    brand: string;
    model: string;
    price: number;
    availabilty: boolean;
  }

  const largeStore: Supplier<SmartWatch, Bike> = {
    name: "Sojib Store",

    mobile: {
      brand: "apple",
      model: "iphone 14 pro max",
      relaseDate: 2023,
    },
    smartWatch: {
      brand: "AmazFit",
      model: "Generation 2",
    },
    bike: {
      brand: "Yamaha",
      model: "Version Four",
      price: 400000,
      availabilty: true,
    },
  };
}
