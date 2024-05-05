//Slider customization
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
  });

const sliderData = [
    { imageUrl: './assets/images/project1.png', alternative: 'SpaceX project', directingUrl: '../SpaceX/index.html'},
    { imageUrl: './assets/images/project2.png', alternative: 'Bootstrap project', directingUrl: '../StartBootstrab/index.html'},
    { imageUrl: './assets/images/project3.png', alternative: 'My food project', directingUrl: '../My Food/responsive-flexbox.html'},
    { imageUrl: './assets/images/project4.png', alternative: 'Animation project', directingUrl:'../Forest/index.html'},
    { imageUrl: './assets/images/project5.png', alternative: 'Bexer project', directingUrl: '../Bexer/index.html'},
    { imageUrl: './assets/images/project6.png', alternative: 'Restaurant project', directingUrl: '../HTML & CSS Final Project/index.html'},
  ];

function createSlider(){
    const projectSlider = document.querySelector('.swiper-wrapper');
    sliderData.forEach(item =>{
        let div = document.createElement('div');
        div.classList.add("swiper-slide");
        let image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.alternative;
        div.appendChild(image);
        projectSlider.appendChild(div);
        image.addEventListener("click", () => {
            window.location.href = item.directingUrl;
        })
    }
    )
}

createSlider();
