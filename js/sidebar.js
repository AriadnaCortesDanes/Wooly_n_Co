document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar ul li a');
    const contentPatterns = document.querySelectorAll('.content-pattern');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');

            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            contentPatterns.forEach(pattern => {
                if (pattern.id === target) {
                    pattern.classList.add('active');
                } else {
                    pattern.classList.remove('active');
                }
            });
        });
    });
});
