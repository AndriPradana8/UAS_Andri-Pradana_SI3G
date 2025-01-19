function navigateSlide(event) {
    event.preventDefault(); // supaya halaman tidak refresh
    const target = event.target;

    document.querySelectorAll('.btn-link').forEach(link => link.classList.remove('active'));

    target.classList.add('active');

    const carousel = document.querySelector(target.getAttribute('data-bs-target'));
    const slideTo = target.getAttribute('data-bs-slide-to');

    const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
    carouselInstance.to(parseInt(slideTo));
}

function openLogin(event) {
    event.preventDefault(); 
    document.getElementById('loginCard').classList.remove('d-none');
    document.getElementById('overlay').classList.remove('d-none'); //
}

function closeLogin() {
    document.getElementById('loginCard').classList.add('d-none');
    document.getElementById('overlay').classList.add('d-none');
}