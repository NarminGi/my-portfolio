const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.magnifier-icon');
function addPlaceholder(){
    searchInput.addEventListener('blur',()=>{
        searchInput.setAttribute('placeholder', 'Search here...');
        searchIcon.classList.remove('disappear');
    })

}
addPlaceholder();

function clearPlaceholder(){
    searchInput.addEventListener('click', () => {
        searchInput.setAttribute('placeholder', '');
        searchIcon.classList.add('disappear');
    });
}
clearPlaceholder();

function clickLogo(){
    const logo = document.querySelector('.logo');
    logo.addEventListener('click',()=>{
        window.location.href = 'index.html';
    });
}
clickLogo();

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
    {class: 'fa-brands fa-telegram', url: 'https://t.me/+XaPYRwl7NEQzZDJi'},
    {class: 'fa-brands fa-instagram', url: 'https://www.instagram.com/imitaten?igsh=YzljYTk1ODg3Zg=='},
    {class: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=100048196150017'},
    {class: 'fa-brands fa-twitter', url: 'https://twitter.com/alienaarea'},
    {class: 'fa-brands fa-youtube', url: 'https://www.youtube.com/channel/UCe5MGCuyrAd2Cg8mYmX3Z2Q'}
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
const themes = document.querySelectorAll('.theme-item');
function toggleThemes(){
    themes.forEach(element => {
        element.addEventListener('click', () => {
            themes.forEach(item => {
                item.classList.remove('active-theme');
            });
            element.classList.add('active-theme');
        });
    });
}
toggleThemes();

function changePageTheme(){
    const light = document.querySelector('.light-mode');
    const dark = document.querySelector('.dark-mode');
    const hero = document.querySelector('.hero-section');
    const footer = document.querySelector('.footer');
    const projects = document.querySelector('.projects-section');
    dark.addEventListener('click',()=>{
        hero.classList.add('hero-dark');
        projects.classList.add('projects-dark');
        footer.classList.add('footer-dark');
    });
    light.addEventListener('click',()=>{
        hero.classList.remove('hero-dark');
        projects.classList.remove('projects-dark');
        footer.classList.remove('footer-dark');
    });
}
changePageTheme();

function changeHeader(){
    window.addEventListener('scroll', function() {
        const headerTop = document.querySelector('.header-top');
        const headerBottom = document.querySelector('.header-bottom');
        const dropDown = document.querySelectorAll('.nav-list-item>ul');
        const headerTopHeight = headerTop.getBoundingClientRect().height;
        if (window.scrollY >= headerTopHeight) {
            headerBottom.style.position = 'fixed';
            headerBottom.style.top = '0';
            headerBottom.style.backgroundColor = 'var(--main-tone)';
            dropDown.forEach(item => {
                item.style.backgroundColor = 'var(--main-tone)';
            });
        } 
        else {
            headerBottom.style.position = 'relative';
            headerBottom.style.backgroundColor = 'transparent';
        }
    });
}
changeHeader();

function scrollToHero(){
    document.querySelectorAll('.nav-about-list>li').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.hero-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
scrollToHero();

