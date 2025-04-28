var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        "<email":"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"test",
        lastName:"test",
        "&email":"test@yahoo.com"
    },
    {
        userName:"test2",
        lastName:"test2",
        emai:"test2@yahoo.com"
    }
];

let allowedEmails = [];
//let notAllowedEmail = [];

arr.forEach(persons => {
  function checkEmailKey(key) {
    return key.includes("email");
  }

        let emailKey = Object.keys(persons).find(checkEmailKey)
  //console.log(Object.keys(persons))

                if (emailKey) {
                    let email = persons[emailKey].replace(/[<>!?%&+_]/gm, "").trim();

                    if (/^[a-zA-Z0-9.-_]+@(gmail\.com|yahoo\.com)$/.test(email)) {
                        allowedEmails.push(email);
                    }  /*else {
                        notAllowedEmail.push(email)
                    }*/
                } 
});

console.log("all allowed emails:", allowedEmails);
//console.log("all restricted emails:", notAllowedEmail);














// let test1 = "  <email";
// console.log(test1.replace(/[<>!?%&+_]/gm, ""));