class Animal {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const animal1 = new Animal('개', 2);
console.log(animal1);
console.log(animal1.name);

