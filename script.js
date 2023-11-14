const email = document.querySelector('#email')
const name1 = document.querySelector('#name1')
const name2 = document.querySelector('#name2')
const user = document.querySelector('#user')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const form = document.querySelector("#form")


form.addEventListener('submit',()=>{
    if((email.value==='')||(name1.value==='')||(name2.value==='')||(user.value==='')||(password.value==='')){
        alert('Какое-то поле пустое')
    } else if(password.value!==password2.value){
        alert('Пароли должны совпадать!')
    }else if(email.value.length<=3||name1.value.length<=3||name2.value.length<=3||user.value.length<=3){
        alert('Введите минимум 3 символа')
    }else if(password.value.length>=8&&password2.value.length>=8){
        alert('Пароль должен быть короче 8 букв-цифр')
    }

    const res={
        email:email.value,
        LastName: name1.value,
        FirstName:name2.value,
        Login:user.value,
        Password:password.value
    }
    alert(`${JSON.stringify(res,null,2)}`)
})