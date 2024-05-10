let hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click',function(){
    let topBread = document.querySelector('.top-bread');
    let meat = document.querySelector('.meat');
    let bottomBread = document.querySelector('.bottom-bread');
    topBread.classList.toggle('rotateRight');
    meat.classList.toggle('disappear');
    bottomBread.classList.toggle('rotateLeft');
    let menu = document.querySelector('.hamburger-menu-list-page');
    menu.classList.toggle('hamburger-clicked');
});

const aboutDatas = [
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
    `},
];
const contactDatas = [
    {class: 'fa-brands fa-github', url: 'https://github.com/NarminGi'},
    {class: 'fa-brands fa-telegram', url: 'https://t.me/+XaPYRwl7NEQzZDJi'},
    {class: 'fa-brands fa-instagram', url: 'https://www.instagram.com/imitaten?igsh=YzljYTk1ODg3Zg=='},
    {class: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=100048196150017'},
    {class: 'fa-brands fa-twitter', url: 'https://twitter.com/alienaarea'},
    {class: 'fa-brands fa-youtube', url: 'https://www.youtube.com/channel/UCe5MGCuyrAd2Cg8mYmX3Z2Q'}
];

function createMobileMenu(){
    const navAbout = document.querySelector('.hamburger-about');
    const navContacts = document.querySelector('.hamburger-contacts');
    let heroParagraph = document.querySelector('.hero-paragraph');
    aboutData.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `${item.text}`;
        li.addEventListener('click', () => {
            heroParagraph.innerHTML = '';
            heroParagraph.innerHTML = item.content;
            closeMobileMenu();
        });
        li.classList.add('about-list-links');
        navAbout.appendChild(li);
    });
    contactDatas.forEach(item => {
        let li =  document.createElement('li');
        li.innerHTML = `<i class='${item.class}'></i>`;
        li.addEventListener('click',()=> window.location.href = item.url);
        navContacts.appendChild(li);
    });
}
createMobileMenu();

function closeMobileMenu() {
    let menu = document.querySelector('.hamburger-menu-list-page');
    menu.classList.remove('hamburger-clicked');
}
