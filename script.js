// Hàm chơi nhạc nền (file mp3 cục bộ)
function playBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        bgMusic.play().catch(err => console.log('BG Music blocked:', err));
    }
}

// TRICK: Hàm kích hoạt Spotify
function activateSpotify() {
    const iframe = document.querySelector('iframe[data-testid="embed-iframe"]');
    if (iframe) {
        // Thay link gốc của bạn vào đây và nhớ thêm ?autoplay=1
        const spotifyUrl = "https://open.spotify.com/embed/playlist/3EoFLPyP9SDBjXn2nxoffR?utm_source=generator&theme=0";
        iframe.src = spotifyUrl;
    }
}

function openLetter() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open');

    // 1. Kích hoạt nhạc nền ngay lập tức
    playBackgroundMusic();

    // 2. TRICK: Kích hoạt Spotify ngay khi user click (trước khi animation xong)
    activateSpotify();

    setTimeout(() => {
        envelope.style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';

        setTimeout(() => {
            // Khởi tạo Swiper (giữ nguyên code cũ của bạn)
            const swiper = new Swiper(".mySwiper", {
                navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                pagination: { el: ".swiper-pagination", clickable: true },
                autoplay: { delay: 4000 },
                loop: true,
                observer: true,
                observeParents: true,
            });
        }, 100);
    }, 1200);
}

// Giữ nguyên phần touch feedback cho mobile
document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    envelope.addEventListener('touchstart', () => envelope.style.transform = 'scale(0.98)');
    envelope.addEventListener('touchend', () => envelope.style.transform = 'scale(1)');
});