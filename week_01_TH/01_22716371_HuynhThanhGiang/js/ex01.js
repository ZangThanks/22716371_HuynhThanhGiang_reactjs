const markData1 = {
    mass: 78, 
    height: 1.69 
};

const johnData1 = {
    mass: 92, 
    height: 1.95 
};

const markData2 = {
    mass: 95, 
    height: 1.88
};

const johnData2 = {
    mass: 85,
    height: 1.76
};

function calcullateBMI(height, mass) {
    return mass / height * height;
}

function compareAndNotice(markBMI, johnBMI) {
    if(markBMI > johnBMI) {
        console.log("Mark's BMI is higher than John's!")
    } else if(markBMI < johnBMI) {
        console.log("John's BMI is higher than Mark's!")
    } else console.log("Both BMI is equality!")
}

let markBMI1 = calcullateBMI(markData1.height, markData1.mass)
let johnBMI1 = calcullateBMI(johnData1.height, johnData1.mass)
let markBMI2 = calcullateBMI(markData2.height, markData2.mass)
let johnBMI2 = calcullateBMI(johnData2.height, johnData2.mass)



console.log("Data 1:")
console.log("Marks: ", markBMI1)
console.log("Jonh: ", johnBMI1)

console.log("Data 2:")
console.log("Marks: ", markBMI2)
console.log("Jonh: ", johnBMI2)

compareAndNotice(markBMI1, johnBMI1)
compareAndNotice(markBMI2, johnBMI2)
