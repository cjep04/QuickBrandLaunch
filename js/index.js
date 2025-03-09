//Menu appear on scroll
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY; // Store the last scroll position
    const menu = document.querySelector(".menu_base"); // Select the menu
  
    window.addEventListener("scroll", function () {
      if (window.scrollY < lastScrollY) {
        // User is scrolling UP
        menu.style.bottom = "0"; // Show menu
      } else {
        // User is scrolling DOWN
        menu.style.bottom = "-100px"; // Hide menu (move it off-screen)
      }
  
      lastScrollY = window.scrollY; // Update the last scroll position
    });
  });

// Cycle Text
  const textOptions = ["Companies", "Startups", "Brands"];
  let index = 0;
  let charIndex = 0;
  const textElement = document.getElementById("cycling-text");
  
  function typeText() {
      if (charIndex < textOptions[index].length) {
          textElement.textContent += textOptions[index][charIndex];
          charIndex++;
          setTimeout(typeText, 125); // Adjust speed of typing effect
      } else {
          setTimeout(eraseText, 1200); // Wait before erasing
      }
  }
  
  function eraseText() {
      if (charIndex > 0) {
          textElement.textContent = textOptions[index].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseText, 50); // Adjust speed of erasing effect
      } else {
          index = (index + 1) % textOptions.length; // Move to next word
          setTimeout(typeText, 500); // Small delay before typing next word
      }
  }
  
  // Start the effect
  typeText();

  // 'B' hotkey linking
  document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "b") {
        window.open("https://padel-central.co.uk/", "_blank");
    }
});


 // Create stars on page load
 document.addEventListener('DOMContentLoaded', createStars);

 function createStars() {
   const container = document.querySelector('.stars-container');
   const starCount = 300;
   for (let i = 0; i < starCount; i++) {
     const star = document.createElement('div');
     star.className = 'star';
     
     // Random positioning across the viewport
     star.style.left = `${Math.random() * 100}%`;
     star.style.top = `${Math.random() * 100}%`;
     
     // Random size between 1px and 3px
     const size = 1 + Math.random() * 2;
     star.style.width = `${size}px`;
     star.style.height = `${size}px`;
     
     container.appendChild(star);
   }
 }

 // Update spotlight gradient position on mousemove so that the "light" follows your cursor
 const spotlight = document.querySelector('.spotlight_overlay');
 spotlight.addEventListener('mousemove', (e) => {
   const rect = spotlight.getBoundingClientRect();
   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;
   const xPercent = (x / rect.width) * 100;
   const yPercent = (y / rect.height) * 100;
   spotlight.style.setProperty('--mouse-x', `${xPercent}%`);
   spotlight.style.setProperty('--mouse-y', `${yPercent}%`);
 });


 // JavaScript to highlight the active section in the menu on scroll
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu_section li a");

  window.addEventListener("scroll", () => {
      let currentSection = "";

      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute("id");
          }
      });

      // Remove active class from all links
      menuLinks.forEach((link) => {
          link.classList.remove("active");
      });

      // Add active class to the current menu item
      document.querySelector(`a[href="#${currentSection}"]`).classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      question.addEventListener("click", () => {
          const isOpen = item.classList.contains("active");

          // Close all other items smoothly
          faqItems.forEach((otherItem) => {
              if (otherItem !== item) {
                  otherItem.classList.remove("active");
                  otherItem.querySelector(".faq-answer").style.maxHeight = null;
              }
          });

          // Toggle the clicked item
          if (!isOpen) {
              item.classList.add("active");
              answer.style.maxHeight = answer.scrollHeight + "px"; // Smooth open
          } else {
              item.classList.remove("active");
              answer.style.maxHeight = null; // Smooth close
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const pricingMenu = document.querySelector(".pricing_menu");
  const pricingMenuItems = pricingMenu.querySelectorAll(".pricing_menu_li");
  const standardCard = document.querySelector(".offer-container1");
  const customCard = document.querySelector(".offer-container2");

  // Hide custom plan by default
  customCard.style.display = "none";

  pricingMenuItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.textContent.includes("Standard")) {
        standardCard.style.display = "flex";
        customCard.style.display = "none";
      } else if (item.textContent.includes("Custom")) {
        customCard.style.display = "flex";
        standardCard.style.display = "none";
      }
    });
  });
});



