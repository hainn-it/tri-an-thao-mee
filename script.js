// Hàm phát nhạc nền
function playBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');

    if (bgMusic) {
        bgMusic.volume = 0.6; // Âm lượng 60%
        bgMusic.play().catch(err => {
            console.log('Background music autoplay prevented:', err);
        });
    }
}

// Hàm dừng nhạc nền
function stopBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');

    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
}

// Hàm toggle nhạc nền
function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');

    if (bgMusic) {
        if (bgMusic.paused) {
            playBackgroundMusic();
        } else {
            stopBackgroundMusic();
        }
    }
}

// Hàm mở thư
function openLetter() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open');

    // Phát nhạc nền ngay khi user click mở thư
    playBackgroundMusic();

    setTimeout(() => {
        envelope.style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';

        setTimeout(() => {
            // Khởi tạo Swiper
            const swiper = new Swiper(".mySwiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    disabledClass: 'swiper-button-disabled',
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true,
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                effect: 'slide',
                speed: 800,
                loop: true,
                loopedSlides: 5,
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
                observer: true,
                observeParents: true,
            });

            console.log('Swiper initialized');
        }, 100);

        // Thêm event listener cho Spotify container
        setTimeout(() => {
            const spotifyContainer = document.querySelector('.spotify-container');
            if (spotifyContainer) {
                let hasClicked = false;

                spotifyContainer.addEventListener('click', () => {
                    if (!hasClicked) {
                        console.log('Spotify clicked - stopping background music');
                        stopBackgroundMusic();

                        // Show temporary notification
                        hasClicked = true;
                    }
                });

                // Also detect iframe interaction (more reliable)
                window.addEventListener('blur', () => {
                    if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
                        if (!hasClicked) {
                            stopBackgroundMusic();
                            hasClicked = true;
                        }
                    }
                });
            }
        }, 200);
    }, 1200);
}

// Touch feedback cho mobile
document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.98)';
        });
        envelope.addEventListener('touchend', function () {
            this.style.transform = 'scale(1)';
        });
    }
});
