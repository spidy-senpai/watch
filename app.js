document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Handle scroll effect on navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navigation (Hamburger)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Search Modal
    const searchIcon = document.getElementById('search-icon');
    const searchModal = document.getElementById('search-modal');
    const closeSearch = document.getElementById('close-search');

    if (searchIcon && searchModal && closeSearch) {
        searchIcon.addEventListener('click', () => {
            searchModal.classList.add('active');
            searchModal.querySelector('input').focus();
        });

        closeSearch.addEventListener('click', () => {
            searchModal.classList.remove('active');
        });

        // Close when clicking outside content
        window.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
            }
        });
    }

    // Newsletter demo logic - Backend can remove this
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            // Uncomment to prevent default and test JS logic
            // e.preventDefault();
            console.log('Newsletter submitted');
        });
    }
});
