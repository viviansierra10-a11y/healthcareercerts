document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn, .tab-item');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length === 0) return;

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            if (tabContents.length > 0 && tabContents[index]) {
                tabContents.forEach(content => content.style.display = 'none');
                tabContents[index].style.display = 'grid';
            }
        });

        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    tabButtons.forEach(btn => {
        btn.setAttribute('role', 'tab');
        btn.setAttribute('tabindex', '0');
    });
});