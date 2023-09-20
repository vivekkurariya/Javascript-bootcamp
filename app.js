let fruits = [];
fruits.push("apple", "banana", "orange")
fruits.splice(0, 1)
fruits.push('grape')
fruits[1] = "pear"

console.log (fruits)


let person = {};
person.name = 'John',
person.age = 34,
person.city = 'New York',
delete person.age
person.job = 'Engineer'
person.city = 'San Francisco'


console.log(person)


let cars = [];
cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
}   
)
cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
}   
)


cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
}   
) 

cars.splice(0,1)
cars.push({
    make: "Honda",
    model: "Civic",
    year: 2022

}
)
cars[1].model = "Accord"


console.log(cars)






