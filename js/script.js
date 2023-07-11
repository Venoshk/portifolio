const btn_icon_header = document.querySelector('.btn_icon_header');
const mensagem = document.getElementById('message');
const user = document.getElementById('usuario')
const email = document.getElementById('email')
const testEmail = document.getElementById('textemail')
const testUser = document.getElementById('textusuario')
const btn = document.getElementById('btn')
const form = document.getElementById('form')

btn_icon_header.addEventListener('click', () =>{
    alert('precisar ser arrumador!')
})

form.addEventListener('submit', (e) => {
    if(Validemail(email.value) == '' || user.value == '' || mensagem == ''){
        btn.innerHTML = 'Campos invalidos, preenchar todos'
    }
    else{
        btn.innerHTML = ''
    }
    e.preventDefault()
});

email.addEventListener('keyup', () =>{
    if(Validemail(email.value) != true){
        testEmail.innerHTML = 'exp: abc@123'
    }
    else{
        testEmail.innerHTML = ''
    }
})


user.addEventListener('keyup', () =>{
    if(user.value == ''){
        testUser.innerHTML = 'Usuario invalido'
    }
    else{
        testUser.innerHTML = ''
    }
})

//Validações de inputs

const Validemail = (email) => {
    const patterEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return patterEmail.test(String(email).toLowerCase());
}
