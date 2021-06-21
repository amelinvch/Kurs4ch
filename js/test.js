'use strict';

class Summ {
    static count = 0;

    static add(a, b) {
        Summ.count++;
        return a + b;
    }
}

const factoty = () => {
    return new Summ();
};

Summ.add(1, 2);
Summ.add(2, 3);
Summ.add(4, 5);
console.log(Summ);