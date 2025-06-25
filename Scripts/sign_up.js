document.getElementById("Signup").addEventListener('click', async (event)=> {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email_phone = document.getElementById('email-phone').value;
    let password = document.getElementById('password').value;

    console.log(name)
    console.log(email_phone)
    console.log(password)

    let phone = null;
    let email = null;

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_phone)){
        email = email_phone;
        phone = null;

        console.log(`Email is ${email}  && your mobile is ${phone}`)
    }else if(/^\d+$/.test(email_phone) && email_phone.length == 8){
        phone = email_phone;
        email = null;
        console.log(`Email is ${email}  && your mobile is ${phone}`)
    }else{
        alert('Invalid Email or Phone Number')
    }

    try {
        let response = await axios.post('http://localhost/Cinema-server/controllers/auth_controller.php', {
            name: name,
            email: email,
            password: password,
            phone_number: phone   
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    }catch(error){
        alert("The error is " + error)
    }


})

