import '../css/members.css';

document.addEventListener('DOMContentLoaded', () => {
    const memberCards = document.querySelectorAll('.member-card');
    
    // Fallback image handling
    const memberImages = document.querySelectorAll('.member-image');
    memberImages.forEach(img => {
        const backgroundImage = window.getComputedStyle(img).backgroundImage;
        if (backgroundImage === 'none' || backgroundImage.includes('error')) {
            img.style.backgroundImage = 'url("/members/default-avatar.webp")';
        }
    });
    
    // Hover effects
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.15)';
        });
    });
});