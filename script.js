    // Wait for the typewriter effect to finish
    setTimeout(() => {
        const typewriterContainer = document.querySelector('.typewriter-container');
        const indexPage = document.querySelector('.index-page');
  
        // Fade out the typewriter container
        typewriterContainer.style.opacity = '0';
        
        setTimeout(() => {
          // After fade-out is complete, hide the typewriter and show the index page
          typewriterContainer.style.display = 'none'; // Completely hide typewriter
          indexPage.classList.add('active'); // Fade in the index page
        }, 1000); // Wait for the fade-out animation to complete
      }, 4000); // Wait for the typewriter animation duration (4 seconds)
      var typed = new Typed('#iuu', {
        strings: ['Web Developer', 'Programmer', 'Designer 3D', 'Freelancer','UX/UI Designer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      });
      const aboutBtn = document.getElementById('aboutBtn');
    const skillsBtn = document.getElementById('skillsBtn');
    const aboutSection = document.getElementById('aboutSection');
    const skillsSection = document.getElementById('skillsSection');

    // Function to toggle content
    const toggleContent = (button, section) => {
      // Remove active classes
      document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));

      // Add active classes to the clicked button and its corresponding section
      button.classList.add('active');
      section.classList.add('active');
    };

    // Event listeners for buttons
    aboutBtn.addEventListener('click', () => toggleContent(aboutBtn, aboutSection));
    skillsBtn.addEventListener('click', () => toggleContent(skillsBtn, skillsSection));
    const textToType = "I am a passionate and dedicated individual with expertise in frontend development, data structures and algorithms, Java, Python, and 3D animation. My interests lie at the intersection of technology and creativity, allowing me to build intuitive and visually engaging web applications while solving complex problems with efficient coding solutions. With hands-on experience in both technical and creative domains, I enjoy exploring new challenges and continuously learning to expand my skill set. Whether it's developing dynamic user interfaces, designing innovative 3D animations, or writing optimized algorithms, I bring a blend of technical proficiency and creative flair to every project.";
    let index = 0;

    function typeEffect() {
        if (index < textToType.length) {
            document.getElementById('typed-text').innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust speed with the timeout (100ms is fast, increase for slower effect)
        }
    }

    window.onload = typeEffect; // Call the typing effect once the page loads
    document.getElementById('typed-text').addEventListener('animationend', typeEffect);