"use strict";
{
    //General function
    function add(num1, num2) {
        return num1 + num2;
    }
    //Arrow function
    const addMe = (num1, num2) => num1 + num2;
    //? Object ------ function ----- Method
    const defaultUser = {
        name: "Sojib",
        balance: 0,
        addBalance(balance) {
            return `My new balance is now ${this.balance + balance}`;
        },
    };
    //? Map function
    const array = [4, 5, 6];
    const newarray = array.map((item) => item * item);
}
