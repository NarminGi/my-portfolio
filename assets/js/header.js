const searchInput = document.querySelector('.search-input');
function addPlaceholder(){
    searchInput.addEventListener('blur',()=>{
        searchInput.setAttribute('placeholder', 'Search here...')
    })

}
addPlaceholder();

function clearPlaceholder(){
    searchInput.addEventListener('click', () => {
        searchInput.setAttribute('placeholder', '');
        const searchWrapper = window.getComputedStyle(document.querySelector('.input-text-wrapper'), '::before');
        searchWrapper.style.setProperty('background-image', 'none');
    });
}
clearPlaceholder();


const logo = document.querySelector('.logo');
logo.addEventListener('click',()=>{
    window.location.href = 'index.html';
});

const aboutData = [
    {text: 'Biography', content: 
    `I, <i>Gurbanli Narmin</i>, was born into a
    family of educators in Baku on November 12,
    2001. After graduating from School No58, I
    achieved a score of 565 points in the SEC
    exam in 2018 and gained admission to the
    Computer Science program at BSU. In 2022, I
    secured acceptance into ASPU for a master's
    degree program. Currently, I am actively
    involved in front-end programming,
    continuously enhancing my skills.
    `},
    {text: 'Education', content: 
    `<b>2018-2022</b><br/>
    Baku State University<br/>
    - Computer Science, Bachelors<br/>
    <b>2022-2024</b><br/>
    Azerbaijan State Pedagogical University<br/>
    - Methods and methodology of teaching<br/>
    informatics, Masters<br/>
    <b>2024</b><br/>
    Texnoera Academy<br/>
    - Front End Programming<br/>
    `},
    {text: 'Experience', content: 
    `<b>2022</b><br/>
    Volunteering<br/>
    - Baku ASAN service center No 6<br/>
    <b>2023</b><br/>
    Editorship<br/>
    - Institute of Education of the 
    Republic of Azerbaijan<br/>
    <b>2024</b><br/>
    Programming<br/>
    - Individually<br/>
    `}
];
const contactData = [
    {class: 'fa-brands fa-github', url: 'https://github.com/NarminGi'},
    {class: 'fa-brands fa-telegram', url: 'https://telegram.org/'},
    {class: 'fa-brands fa-instagram', url: 'https://www.instagram.com/'},
    {class: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/'},
    {class: 'fa-brands fa-youtube', url: 'https://www.youtube.com/'},
    {class: 'fa-solid fa-envelope', url: 'https://mail.google.com/'}
];
function createDropDown(){
    const navAbout = document.querySelector('.nav-about-list');
    const navContacts = document.querySelector('.nav-contact-list');
    let heroParagraph = document.querySelector('.hero-paragraph');
    aboutData.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `${item.text}`;
        li.addEventListener('click', () => {
            heroParagraph.innerHTML = '';
            heroParagraph.innerHTML = item.content;
        });
        li.classList.add('about-list-links');
        navAbout.appendChild(li);
    });
    contactData.forEach(item => {
        let li =  document.createElement('li');
        li.innerHTML = `<i class='${item.class}'></i>`;
        li.addEventListener('click',()=> window.location.href = item.url);
        navContacts.appendChild(li);
    });
}
createDropDown();

/*
const themes = document.querySelectorAll('.theme-item');
const darkTheme = document.querySelector('.dark-theme');
themes.forEach(element => {
    element.addEventListener('click', () => {
        themes.forEach(item => {
            item.classList.remove('active-theme');
        });
        element.classList.add('active-theme');
    });
});

darkTheme.addEventListener('click',()=>{
    document.body.classList('dark-theme');
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = 'black';
})
*/

