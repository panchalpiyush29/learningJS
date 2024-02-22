let object = {
    name: "Piyush",
    age: 40,
    gender: "male",
};

let renameObjectKey = (object) => {
    object.FirstName = object.name;
    object.myAge = object.age;
    delete object.name;
    delete object.age;
};

renameObjectKey(object);
console.log(object);