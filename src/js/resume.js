document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger__icon");
    const hamburgerContent = document.querySelector(".hamburger__content");
  
    hamburgerIcon.addEventListener("click", function () {

      if (hamburgerContent.style.display === "flex") {
        hamburgerContent.style.display = "none";
      } else {
        hamburgerContent.style.display = "flex";
      }
    });
  });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});


const socialIcons = document.querySelectorAll('.profile__social-img');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.5)';
  });

  icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.animated').forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
  });


  window.addEventListener('scroll', handleScrollAnimations);
  handleScrollAnimations();

  function handleScrollAnimations() {
      const scrollTriggerElements = document.querySelectorAll('.scroll-trigger');

      scrollTriggerElements.forEach(element => {
          if (isElementInViewport(element)) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  }


  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.resume-item__education, .resume-item__experience');

  cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.classList.add('animate__animated', 'animate__pulse');
      });

      card.addEventListener('mouseleave', () => {
          card.classList.remove('animate__animated', 'animate__pulse');
      });

      card.addEventListener('touchstart', (event) => {
          card.classList.add('animate__animated', 'animate__rubberBand');
      });

      card.addEventListener('touchend', () => {
          card.classList.remove('animate__animated', 'animate__rubberBand');
      });
  });
});


  window.onload=function(){
    const swiper = new Swiper('.swiper', {
            loop: true,

            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },

            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
      
            effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
        });
    };