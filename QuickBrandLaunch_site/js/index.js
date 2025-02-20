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


 