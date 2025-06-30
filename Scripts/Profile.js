const User_Name = localStorage.getItem('name');
const User_email = localStorage.getItem('email')
const User_phone = localStorage.getItem('phone')
const User_id = localStorage.getItem('id')


document.getElementById("greetings").innerHTML = `Hello ${User_Name}`

window.addEventListener('DOMContentLoaded', async ()=> {
    document.getElementById("name").placeholder = User_Name;
    document.getElementById("email").placeholder = User_email || "enter your email"
    document.getElementById("Phone_Number").placeholder = User_phone || "Enter your Phone Number"
})

document.getElementById("enable-update").addEventListener('click', () => {
    document.getElementById("enable-update").style.display = "none"
    document.getElementById("update").style.display = "block"
    document.getElementById("name").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("Phone_Number").disabled = false;
    document.getElementById("Genres").disabled = false;
    document.getElementById("PCF").disabled = false;

})

document.getElementById("update").addEventListener('click', async()=>{
    try {
        const response = await axios.post('http://localhost/Cinema-server/controllers/update_user.php',{
        id: User_id,
        data : {
            name : document.getElementById("name").value || document.getElementById("name").placeholder,
            email : document.getElementById("email").value || document.getElementById("email").placeholder,
            phone : document.getElementById("Phone_Number").value || document.getElementById("Phone_Number").placeholder,

        }
    },
    {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    }catch(error){
        console.log(error)
    }
})

