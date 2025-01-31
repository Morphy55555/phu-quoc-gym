document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const menuButton = document.querySelector('.navbar-toggler');
    const navbarContent = document.querySelector('.navbar-collapse');
    
    // Ensure elements exist
    if (!menuButton || !navbarContent) {
        console.error('Required navigation elements not found');
        return;
    }

    // Toggle menu function
    const toggleMenu = () => {
        // Toggle the menu visibility
        if (navbarContent.style.display === 'block') {
            navbarContent.style.display = 'none';
        } else {
            navbarContent.style.display = 'block';
        }
        
        // Update ARIA attributes for accessibility
        const isExpanded = navbarContent.style.display === 'block';
        menuButton.setAttribute('aria-expanded', isExpanded.toString());
    };

    // Add click event listener to menu button
    menuButton.addEventListener('click', (event) => {
        event.preventDefault();
        toggleMenu();
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuButton.classList.remove('active');
            navbarContent.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbarContent.contains(e.target) && !menuButton.contains(e.target) && navbarContent.classList.contains('show')) {
            menuButton.classList.remove('active');
            navbarContent.classList.remove('show');
            document.body.classList.remove('no-scroll');
        }
    });

    // Add smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 