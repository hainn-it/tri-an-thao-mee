// Hàm phát nhạc nền
function playBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    
    if (bgMusic) {
        bgMusic.volume = 0.6; // Âm lượng 60%
        bgMusic.play().catch(err => {
            console.log('Background music autoplay prevented:', err);
        });
        
        // Update button state
        if (musicToggle) {
            musicToggle.classList.add('playing');
            musicToggle.classList.remove('paused');
            musicToggle.textContent = '🎵';
        }
    }
}

// Hàm dừng nhạc nền
function stopBackgroundMusic() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        
        // Update button state
        if (musicToggle) {
            musicToggle.classList.remove('playing');
            musicToggle.classList.add('paused');
            musicToggle.textContent = '🔇';
        }
    }
}

// Hàm toggle nhạc nền
function toggleMusic() {
    const bgMusic = document.getElementById('bgMusic');
    
    if (bgMusic) {
        if (bgMusic.paused) {
            playBackgroundMusic();
            showNotification('Nhạc nền đã bật 🎵');
        } else {
            stopBackgroundMusic();
            showNotification('Nhạc nền đã tắt 🔇');
        }
    }
}

// Hàm hiển thị thông báo tạm thời
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.music-notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'music-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide and remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
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
                        showNotification('Nhạc nền đã tắt. Dùng nút 🎵 ở góc để bật lại.');
                        hasClicked = true;
                    }
                });
                
                // Also detect iframe interaction (more reliable)
                window.addEventListener('blur', () => {
                    if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
                        if (!hasClicked) {
                            stopBackgroundMusic();
                            showNotification('Nhạc nền đã tắt. Dùng nút 🎵 ở góc để bật lại.');
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
        envelope.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        envelope.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    }
});
