document.addEventListener('DOMContentLoaded', () => {
    // --- Modal Logic ---
    const clickableItems = document.querySelectorAll('.card, .demo-btn');
    const modal = document.getElementById('portfolio-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('modal-close-btn');

    const openModal = (element) => {
        const title = element.dataset.title;
        const details = element.dataset.details;
        const link = element.dataset.link;

        modalTitle.textContent = title;
        let bodyContent = `<div>${details}</div>`;
        
        if (link) {
            bodyContent += `<a href="${link}" target="_blank" class="modal-link">View on GitHub</a>`;
        }
        
        modalBody.innerHTML = bodyContent;
        modal.classList.add('active');
    };

    const closeModal = () => {
        modal.classList.remove('active');
    };

    clickableItems.forEach(item => {
        item.addEventListener('click', () => openModal(item));
    });

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- Theme Toggler Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Save the new theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
