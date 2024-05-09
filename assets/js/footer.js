const skillsData = [
    {text: 'Html'},
    {text: 'Css'},
    {text: 'Bootstrap'},
    {text: 'Javascript'},
    {text: 'React'}
];

// import {contactsData} from './main';
// console.log(contactsData);

const contactsData = [
    {class: 'fa-brands fa-github', url: 'https://github.com/NarminGi'},
    {class: 'fa-brands fa-telegram', url: 'https://telegram.org/'},
    {class: 'fa-brands fa-instagram', url: 'https://www.instagram.com/'},
    {class: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/'},
    {class: 'fa-brands fa-youtube', url: 'https://www.youtube.com/'},
    {class: 'fa-solid fa-envelope', url: 'https://mail.google.com/'}
];

function createLists(){
    const skillsList = document.querySelector('.skills-list');
    skillsData.forEach(item => {
        let li =  document.createElement('li');
        li.innerHTML = `<i class="fa-regular fa-star"></i> ${item.text}`;
        skillsList.appendChild(li);
    });
    const contactsList = document.querySelector('.footer-contact-list');
    contactsData.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `<i class='${item.class}'></i>`;
        li.addEventListener('click',()=> window.location.href = item.url);
        contactsList.appendChild(li);
    });
}
createLists();

let userEmails = JSON.parse(localStorage.getItem('userEmails')) || [];
function takeUserData(){
    button = document.querySelector('.subscribe-button');
    button.addEventListener('click',(event) => {
        event.preventDefault();
        let emailInput = document.querySelector('.email-input');
        let email = document.querySelector('.email-input').value;
        let isSubscribed = userEmails.some(item => item.email===email);
            if(isSubscribed){
                alert("You have already subscribed!");
            }
            else{
                let obj={
                    email,
                };
                userEmails.push(obj);
                localStorage.setItem('userEmails', JSON.stringify(userEmails));
            }
        console.log(userEmails);
        emailInput.value = '';
    });
}
takeUserData();

const emailInput = document.querySelector('.email-input');
function addPlaceholder(){
    emailInput.addEventListener('blur',()=>{
        emailInput.setAttribute('placeholder', 'Enter your email adress...')
    })
}
addPlaceholder();

function clearPlaceholder(){
    emailInput.addEventListener('click', () => {
        emailInput.setAttribute('placeholder', '');
    });
}
clearPlaceholder();
