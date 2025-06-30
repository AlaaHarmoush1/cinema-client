/**
 * local storage items
 */
const user_id = localStorage.getItem('user_id')
const name = localStorage.getItem('name')
const email = localStorage.getItem('email')
const phone = localStorage.getItem('phone')
const gender = localStorage.getItem('gender')

/**
 * componenst
 */
const Greetings = document.getElementById("greetings")
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passInput = document.getElementById('password');
const favGenInput = document.getElementById('genre');
const PCMInput = document.getElementById('email');
const emailM = document.getElementById('emailM');
const PhoneM = document.getElementById('PhoneM');
const Male = document.getElementById('Male');
const Female = document.getElementById('Female');
const Avatar = document.getElementById('avatar')

const enablebutton = document.getElementById('Enable')
const updateButton = document.getElementById('update')


Greetings.innerHTML = `Welcome Back, ${name}`;


window.addEventListener('DOMContentLoaded', () => { 
    nameInput.value = name;
    emailInput.value = email || "";
    phoneInput.value = phone || "";

    if (gender == 'M' || gender =='') {
        Avatar.src = '../assets/images/Avatar-man.jpeg';
        Male.checked = true;
    } else if (gender == 'F') {
        Avatar.src = '../assets/images/Avatar-Women.jpeg';
        Female.checked = true;
    }
})




enablebutton.addEventListener('click', () => {
    enablebutton.style.display = "none";
    updateButton.style.display = "block"
    nameInput.disabled = false
    emailInput.disabled = false
    phoneInput.disabled = false
    passInput.disabled = false
    favGenInput.disabled = false
    PCMInput.disabled = false
    emailM.disabled = false
    PhoneM.disabled = false
    Male.disabled = false
    Female.disabled = false
})

updateButton.addEventListener('click', async () => {
    const filtered_User_data = {};

    if (nameInput.value !== '') filtered_User_data.name = nameInput.value;
    if (emailInput.value !== '') filtered_User_data.email = emailInput.value;
    if (phoneInput.value !== '') filtered_User_data.phone_number = phoneInput.value;
    if (passInput.value !== '') filtered_User_data.password = passInput.value;

    if (Male.checked) {
        localStorage.setItem('gender', "M");
    } else if (Female.checked) {
        localStorage.setItem('gender', "F");
    }

    try {
        const user_id = localStorage.getItem('user_id');

        const response = await axios.post('http://localhost/Backend/cinema-server/controllers/update_user.php', {
            id: user_id,
            data: filtered_User_data
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200) {
            window.location.href = "http://127.0.0.1:5500/Fontend/cinema-client/index.html";
        }
    } catch (error) {
        alert("Error: " + error);
    }
});



// function changeIcon() {
//     if(gender)
// }