{
  //? Class with method

  class cultivationOnLand2 {
    public paddy: string;
    public wheat: string;
    public jute: string;

    constructor(paddy: string, wheat: string, jute: string) {
      this.paddy = paddy;
      this.wheat = wheat;
      this.jute = jute;
    }

    cultivationIntheRainySeason() {
      console.log(
        `First we cultivate ${this.paddy} into our land in the Rainy Season`
      );
    }
  }

  const paddy2 = new cultivationOnLand2(
    "Sumon Sorna Paddy",
    "China Wheat",
    "Desi Jute"
  );

  console.log(paddy2);

  //! Class with method and public keyword

  class cultivationOnLand1 {
    constructor(
      public paddy: string,
      public wheat: string,
      public jute: string
    ) {}

    cultivationIntheRainySeason() {
      console.log(
        `First we cultivate ${this.paddy} into our land in the Rainy Season`
      );
    }
  }

  const paddy = new cultivationOnLand1(
    "Sumon Sorna Paddy",
    "China Wheat",
    "Desi Jute"
  );
  paddy.cultivationIntheRainySeason();
  console.log(paddy);
}
