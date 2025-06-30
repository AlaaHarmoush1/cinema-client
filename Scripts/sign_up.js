document.getElementById("Signup").addEventListener('click', async (event)=> {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email_phone = document.getElementById('email-phone').value;
    const password = document.getElementById('password').value;

    let phone = null;
    let email = null;

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_phone)){
        email = email_phone;
        phone = null;
    }else if(/^\d+$/.test(email_phone) && email_phone.length == 8){
        phone = email_phone;
        email = null;
    }else{
        alert('Invalid Email or Phone Number')
    }

    try {
        const response = await axios.post('http://localhost/Backend/cinema-server/controllers/auth_controller.php', {
            name: name,
            email: email,
            password: password,
            phone_number: phone
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (response.status == 200){
            window.location.href = "../index.html"
        }
    }catch(error){
        alert("Error Accured " + error)
    }
})

