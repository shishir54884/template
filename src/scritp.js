  function rotateNavIcons() {
    document.querySelectorAll('.nav-links ul li').forEach(li => {
      const svg = li.querySelector('svg');
      if (!svg) return;

      li.addEventListener('mouseenter', () => {
        svg.style.transition = 'transform 0.3s ease-in-out';
        svg.style.transform = 'rotate(180deg)';
        body.style.background = 'black'

      });

      li.addEventListener('mouseleave', () => {
        svg.style.transform = 'rotate(0deg)';
      });
    });
  }

  rotateNavIcons();
 
  function mouseMoveEffectsRightContent() {
    const rightContent = document.getElementById('right-content');
    const imageContainer = rightContent.querySelector('.image-container');
    const scootersImage = imageContainer.querySelector('img[src="/assets/scooters.png"]');
    const phoneImage = imageContainer.querySelector('img[src="/assets/phone.png"]');

    scootersImage.style.transition = 'transform 0.3s ease-in-out';
    phoneImage.style.transition = 'transform 0.3s ease-in-out';

    rightContent.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e;
      const { clientWidth, clientHeight } = rightContent;

      const moveX = (offsetY / clientWidth) * 30 - 15;
      const moveY = (offsetX / clientHeight) * 30 - 15;

      scootersImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
      phoneImage.style.transform = `translate(${moveX * 2}px, ${moveY * 2}px)`;
    });

    rightContent.addEventListener('mouseleave', () => {
      scootersImage.style.transform = 'translate(0, 0)';
      phoneImage.style.transform = 'translate(0, 0)';
    });
  }

  mouseMoveEffectsRightContent();

    function setupDarkModeToggle() {
        const loginBtn = document.querySelector('.login-btn');

        function updateLoginBtn() {
            if (isDarkMode) {
                loginBtn.style.transition = 'background-color 0.5s, color 0.5s';
                loginBtn.style.backgroundColor = '#ffffff';
                loginBtn.style.color = '#000000';
            } else {
                loginBtn.style.transition = 'background-color 0.5s, color 0.5s';
                loginBtn.style.backgroundColor = '#000000';
                loginBtn.style.color = '#ffffff';
            }
        }

        // Add updateLoginBtn to the existing updateMode function
        const originalUpdateMode = updateMode;
        updateMode = function() {
            originalUpdateMode();
            updateLoginBtn();
        };
        const toggle = document.getElementById('autoModeToggle');
        const modeText = document.getElementById('modeText');
        const iconContainer = document.getElementById('iconContainer');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');
        const body = document.body;
        const navLinks = document.querySelectorAll('.nav-links a');
        const items = document.querySelectorAll('.gsap-item h2, .gsap-item p');
        const detailsSection = document.querySelector('.details-section');

        let isDarkMode = false;

        toggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            updateMode();
        });

        function updateMode() {
            if (isDarkMode) {
                const easyWaySection = document.querySelector('.Easy-way-to-find-e-scooters');
                easyWaySection.style.transition = 'background-color 0.5s, color 0.5s';
                if (isDarkMode) {
                    easyWaySection.style.backgroundColor = '#2d3748';
                    easyWaySection.style.color = '#ffffff';
                } else {
                    easyWaySection.style.backgroundColor = '#f5f5f5';
                    easyWaySection.style.color = '#000000';
                }
                body.style.transition = 'background-color 0.5s, color 0.5s';
                body.style.backgroundColor = '#1a202c';
                body.style.color = '#ffffff';
                modeText.textContent = 'Dark';
                toggle.classList.remove('bg-gray-200', 'text-gray-800');
                toggle.classList.add('bg-gray-700', 'text-white');
                iconContainer.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    sunIcon.classList.add('hidden');
                    moonIcon.classList.remove('hidden');
                }, 150);
                navLinks.forEach(link => {
                    link.style.transition = 'color 0.5s';
                    link.style.color = '#ffffff';
                });
                items.forEach(item => {
                    item.style.transition = 'color 0.5s';
                    item.style.color = '#ffffff';
                });
                detailsSection.style.transition = 'background-color 0.5s, color 0.5s';
                detailsSection.style.backgroundColor = '#2d3748';
                detailsSection.style.color = '#ffffff';
            } else {
                body.style.transition = 'background-color 0.5s, color 0.5s';
                body.style.backgroundColor = '#ffffff';
                body.style.color = '#000000';
                modeText.textContent = 'Light';
                toggle.classList.remove('bg-gray-700', 'text-white');
                toggle.classList.add('bg-gray-200', 'text-gray-800');
                iconContainer.style.transform = 'translateX(0)';
                setTimeout(() => {
                    moonIcon.classList.add('hidden');
                    sunIcon.classList.remove('hidden');
                }, 150);
                navLinks.forEach(link => {
                    link.style.transition = 'color 0.5s';
                    link.style.color = '#000';
                });
                items.forEach(item => {
                    item.style.transition = 'color 0.5s';
                    item.style.color = '#000';
                });
                detailsSection.style.transition = 'background-color 0.5s, color 0.5s';
                detailsSection.style.backgroundColor = '#f7fafc';
                detailsSection.style.color = '#000000';
            }
        }

        // Manage hover effect for nav links
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transition = 'color 0.3s';
                link.style.color = '#3b82f6'; // blue-500
            });
            link.addEventListener('mouseleave', () => {
                link.style.transition = 'color 0.3s';
                link.style.color = isDarkMode ? '#ffffff' : '#000000';
            });
        });
    }

    setupDarkModeToggle();

    // Mouse move effects for Easy-way-to-find-e-scooters images
    function setupMouseMoveEffects() {
        const container = document.querySelector('.Easy-way-to-find-e-scooters');
        const imageContainer = container.querySelector('.esay-image-con');
        const images = imageContainer.querySelectorAll('img');

        container.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const mouseX = (e.clientX - left) / width;
            const mouseY = (e.clientY - top) / height;

            images.forEach((img, index) => {
                const depth = index + 1;
                const moveX = (mouseX - 0.5) * depth * 20;
                const moveY = (mouseY - 0.5) * depth * 20;

                gsap.to(img, {
                    x: moveX,
                    y: moveY,
                    duration: 1.3,
                    ease: 'power2.out'
                });
            });
        });

        container.addEventListener('mouseleave', () => {
            images.forEach((img) => {
                gsap.to(img, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Call the function to set up the mouse move effects
    setupMouseMoveEffects();

