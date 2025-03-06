const AncientIndian = {
    origin: "Indian Subcontinent",
    hasCulture: true,
    hasDiversity: true
};

// Indo-Aryan inherits from AncientIndian
const IndoAryan = Object.create(AncientIndian);
IndoAryan.languageFamily = "Indo-Aryan";

const person1 = Object.create(IndoAryan); // Creates an empty object but with IndoAryan as prototype
person1.name = "Rahul Sharma";
person1.region = "Uttar Pradesh";

console.log(person1.origin); // "Indian Subcontinent" (Inherited)
console.log(person1); // "Indo-Aryan" (Inherited)
