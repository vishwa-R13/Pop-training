var a =10.123456
let b = "abc"
const c = true
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));
a = "abc"
b = 21.21
console.log(a,b,c);
console.log(typeof(a),typeof(b),typeof(c));

// Secondary DataTypes

// Array
array = [1, [6, 93.34], "str", true]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array)
console.log(typeof(array))

//Objects
Object1 = { 
    "firstName" : "Lankesh",
    "lastName" : "Meganathan", 
    "training" : "MERN Stack",
    "companyName" : "RAMPeX"
}
console.log(Object1);

object2= {}
object2["firstname"] = "Hello"
object2["lastname"] = "Universe"
console.log(object2);
object3= new Object()
console.log(object3)
object3.training = "MERN"
object3.Depts = ["CSE","IT","AD","ECE"]
console.log(object3["Depts"][2]);

set = new Set("hello")
console.log(set);
set.add("Hello")
console.log(set);
console.log(typeof(set));
