class Testing {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}


const testing = new Testing(1, 2);
console.log(testing.a, testing.b);




class Inherited extends Testing {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
}

const inherited = new Inherited(1, 2, 3);
console.log(inherited.a, inherited.b, inherited.c)
