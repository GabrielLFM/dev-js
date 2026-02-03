// let fullName = "Cleo de Jesus Albuquerque"
// console.log(fullName.split(" "))

// let arrayString = fullName.split(" ")
// console.table(arrayString)

// let arrayCount = arrayString.length
// console.log(arrayCount);

// let firstName = arrayString[0]
// let lastName = arrayString[arrayCount - 1]

// function Welcome() {
//     console.log("Hello World! dentro da função");
// }
// Welcome()

// function WelcomeComParams(name) {
//     console.log(`Olá, ${name}`);   
// }
// WelcomeComParams("Rebeka")

function WelcomeName(fullName){
    let arrayString = fullName.split(" ")
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.length - 1]

    console.log(`Olá ${firstName} ${lastName}`);
}
WelcomeName("Anne Rebeka Lopes Silva Melo")