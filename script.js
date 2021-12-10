window.onscroll= () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    loginForm.classList.remove('active');
}

const loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = ()=>{
    loginForm.classList.toggle('active');
}
