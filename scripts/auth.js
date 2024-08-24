const signUpForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form');
const logout = document.querySelector('.logout');
const matricNo = document.querySelector('.matric-no');

const newMatric = matricNo[0] + matricNo[1] + matricNo[2] + matricNo[3] + matricNo[4] + matricNo[5];
const pattern = '230551';

//create new user 
signUpForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = signUpForm.email.value.trim();
    const password = signUpForm.password.value.trim();

    if(newMatric === pattern){
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => signUpForm.reset())
            .catch(err => console.log(err))
    } else {
        alert('You are not in mathematics department.');
    }
});

//logout user
logout.addEventListener('click', () => auth.signOut());

//login user
loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    auth.signInWithEmailAndPassword(email, password)
        .then(() => loginForm.reset())
        .catch(err => console.log(err))
})