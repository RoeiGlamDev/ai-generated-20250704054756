// Add event listener to window load
window.addEventListener('load', function() {
    // Fade in hero section
    const heroSection = document.querySelector('.hero');
    heroSection.classList.add('fade-in');

    // Fade in featured videos section
    const featuredVideosSection = document.querySelector('.featured-videos');
    featuredVideosSection.classList.add('fade-in');

    // Add event listener to video cards
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(function(videoCard) {
        videoCard.addEventListener('mouseover', function() {
            videoCard.style.transform = 'scale(1.1)';
        });
        videoCard.addEventListener('mouseout', function() {
            videoCard.style.transform = 'scale(1)';
        });
    });
});