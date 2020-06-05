 //sign up
const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;
    
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
    });
});