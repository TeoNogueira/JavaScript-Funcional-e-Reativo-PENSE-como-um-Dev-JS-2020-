


class Student {
constructor(name, email) 

{
    this.name = name
    this.email = email

    // setTimeout(() => {
    //     console.log(this)
    //     }, 1000); // arrow function referencia o escopo léxico
}

}


// console.log(typeof Student) << function but function constructor

const nameStudentAndEmail = new Student('Teófilo', 'teo40@gmail.com');


const nameStudentAndEmail2 = new Student('Fernando', 'fe11@gmail.com')



console.log(nameStudentAndEmail)
console.log(nameStudentAndEmail2)



//funcional
// function nameEmail(a, b) {


//     return`\n${a}\n` + b;

// };


// const receivedData = nameEmail(' Teófilo', 'teo55@gmail.com');
// const receivedData2 = nameEmail('Fernando', 'fer55@gmail.com');

// console.log(`${receivedData}\n`, `${receivedData2}\n`);
