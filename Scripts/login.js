document.getElementById('Login').addEventListener('click', async(event) => {
    event.preventDefault();


    const email_phone = document.getElementById('email-phone').value;
    const password = document.getElementById('password').value;

    let phone = null;
    let email = null;

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_phone)){
        email = email_phone;
        phone = null;
        localStorage.setItem('email', email)
    }else if(/^\d+$/.test(email_phone) && email_phone.length == 8){
        phone = email_phone;
        email = null;
        localStorage.setItem('phone', phone)
    }else{
        alert('Invalid Email or Phone Number')
    }

    try{
        const response = await axios.post(`${BASE_URL}/Login`,{
        email: email,
        password: password,
        phone_number: phone
    },
    {
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.status === 200){

        console.log(response.data)

        localStorage.setItem('user_id', response.data.payload.user_data.id)
        localStorage.setItem('name', response.data.payload.user_data.name)
        localStorage.setItem('isLoggedIn', true)
        window.location.href = "http://127.0.0.1:5501/Pages/Profile.html"
        console.log(response)
    }else{
        alert('Invalid Email or Password')
    }

    }catch(error){
        alert("Error Accured " + error)
    }

})

const isLoggedIn = localStorage.getItem('isLoggedIn')

window.addEventListener('DOMContentLoaded', () => {
    if(isLoggedIn == 'true'){
    window.location.href = "http://127.0.0.1:5501/Pages/Home.html"
}
})