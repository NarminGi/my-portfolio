const slidersData = [
    { imageUrl: './assets/images/project1.png', alternative: 'SpaceX project', directingUrl: '../SpaceX/index.html', tag: 'spacex'},
    { imageUrl: './assets/images/project2.png', alternative: 'Bootstrap project', directingUrl: '../StartBootstrab/index.html', tag: 'bootstrap'},
    { imageUrl: './assets/images/project3.png', alternative: 'My food project', directingUrl: '../My Food/responsive-flexbox.html', tag: 'my food'},
    { imageUrl: './assets/images/project4.png', alternative: 'Animation project', directingUrl:'../Forest/index.html', tag: 'animation'},
    { imageUrl: './assets/images/project5.png', alternative: 'Bexer project', directingUrl: '../Bexer/index.html', tag: 'bexer'},
    { imageUrl: './assets/images/project6.png', alternative: 'Restaurant project', directingUrl: '../HTML & CSS Final Project/index.html', tag: 'restaurant'},
];

const heroSection = document.querySelector('.hero-section');
const projectsSection = document.querySelector('.projects-section');
const resultSection = document.querySelector('.search-results-section');

function searchAndDisplay() {
    const result = document.querySelector('.result');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const matchingItem = slidersData.find(item => item.tag.toLowerCase().includes(searchTerm));
    if (matchingItem) {
        result.innerHTML = `<a href="${matchingItem.directingUrl}" target="_blank"><img src="${matchingItem.imageUrl}" alt="${matchingItem.alternative}"></a>`;
    }
    else {
        result.innerHTML = "<p>This item doesn't exist.</p>";
    }
}

function showSearchResult(){
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            heroSection.classList.add('disappear');
            projectsSection.classList.add('disappear');
            canvas.classList.add('disappear');
            resultSection.classList.remove('disappear');
            searchAndDisplay();
        }
    });
}
showSearchResult();

function showHeroPage(){
    document.querySelectorAll('.nav-about-list>li').forEach(item => {
        item.addEventListener('click', () => {
            heroSection.classList.remove('disappear');
            projectsSection.classList.remove('disappear');
            canvas.classList.remove('disappear');
            resultSection.classList.add('disappear');
        });
    });
    document.querySelectorAll('.hamburger-about>li').forEach(item => {
        item.addEventListener('click', () => {
            heroSection.classList.remove('disappear');
            projectsSection.classList.remove('disappear');
            resultSection.classList.add('disappear');
        });
    });
    
}
showHeroPage();
