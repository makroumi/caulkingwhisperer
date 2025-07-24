document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenuButton.innerHTML = isOpen ? '<i class="fas fa-times text-2xl"></i>' : '<i class="fas fa-bars text-2xl"></i>';
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            });
        });
    }

    // Handle media errors for gallery images and videos
    window.showMediaError = function (element, type) {
        const container = element.parentNode;
        container.querySelector('.loading-overlay').style.display = 'none';
        container.innerHTML = `<div class="media-error">Failed to load ${type}. Please try again later.</div>`;
    };

    // Video play button functionality
    const videoPlayButtons = document.querySelectorAll('.video-play-button');
    videoPlayButtons.forEach(button => {
        const video = button.previousElementSibling; // Video is the previous sibling
        if (video && video.tagName === 'VIDEO') {
            // Show play button initially
            button.style.display = 'flex';

            // Play video on button click
            button.addEventListener('click', function () {
                video.play();
                button.style.display = 'none'; // Hide play button
            });

            // Show play button when video ends
            video.addEventListener('ended', function () {
                video.currentTime = 0; // Reset to start
                button.style.display = 'flex'; // Show play button
            });

            // Show play button if video is paused at start
            video.addEventListener('pause', function () {
                if (video.currentTime === 0 || video.ended) {
                    button.style.display = 'flex';
                }
            });
        }
    });
});