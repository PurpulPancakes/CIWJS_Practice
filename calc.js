let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('a?', 0);
    }
};

calculator.read(); //prompts for 2 values and saves them as objects
alert(calculator.sum()); //returns the sum of 2 values
alert(calculator.mul()); //returns the product of 2 values