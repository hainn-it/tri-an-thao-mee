# 💝 Tri Ân Đồng Nghiệp

Một trang web đẹp để gửi lời tri ân và chúc mừng đồng nghiệp với thiết kế mobile-first hiện đại.

## ✨ Tính năng

- 📱 **Mobile-First Design**: Tối ưu hoàn hảo cho điện thoại di động
- 🎨 **Giao diện đẹp mắt**: Gradient màu, animations mượt mà, shadows tinh tế
- 📸 **Slider ảnh**: Tự động chuyển ảnh với hiệu ứng đẹp mắt
- 🎵 **Nhạc nền tự động**: Chạy nhạc khi mở thư (nếu có file nhạc)
- 💌 **Hiệu ứng mở thư**: Animation mượt mà và ấn tượng
- 🎯 **Responsive**: Hiển thị đẹp trên mọi thiết bị

## 🎵 Cách thêm nhạc nền tự động chạy

1. Tạo thư mục `music` trong project:
   ```bash
   mkdir music
   ```

2. Thêm file nhạc vào thư mục `music` với tên `background.mp3`
   - Bạn có thể tải nhạc từ YouTube (chuyển sang MP3) hoặc sử dụng file MP3 có sẵn
   - Đặt tên file là `background.mp3`

3. Nhạc sẽ tự động chạy khi người dùng click mở thư!

**Lưu ý**: 
- Trình duyệt hiện đại thường chặn autoplay nhạc. Nhạc sẽ chỉ chạy sau khi user có tương tác (click vào thư)
- Spotify embed cũng có thể tự động chạy nếu người dùng đã đăng nhập Spotify

## 🚀 Cách sử dụng

1. Mở file `index.html` bằng trình duyệt
2. Click vào phong bì để mở thư
3. Xem ảnh, đọc lời nhắn và thưởng thức nhạc!

## 📁 Cấu trúc thư mục

```
mysoi-history/
├── index.html          # File HTML chính
├── style.css           # CSS đã được tối ưu mobile-first
├── script.js           # JavaScript xử lý animations và music
├── images/             # Thư mục chứa ảnh
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   ├── 4.jpg
│   └── 5.jpg
└── music/              # Thư mục chứa nhạc (cần tạo)
    └── background.mp3  # File nhạc nền (cần thêm)
```

## 🎨 Tùy chỉnh

### Thay đổi màu sắc
Mở `style.css` và chỉnh sửa các biến CSS trong `:root`:

```css
:root {
    --primary-color: #f06292;      /* Màu chính */
    --secondary-color: #ec407a;    /* Màu phụ */
    --accent-color: #ff80ab;       /* Màu nhấn */
}
```

### Thay đổi lời nhắn
Mở `index.html` và tìm đoạn:

```html
<div class="message-box">
    <p>Hành trình vừa qua thật tuyệt vời...</p>
</div>
```

### Thay đổi tên người nhận
Tìm dòng:

```html
<p>To ThaoMee,</p>
```

## 🌟 Các cải tiến đã thực hiện

✅ Mobile-first responsive design  
✅ Gradient backgrounds đẹp mắt  
✅ Smooth animations và transitions  
✅ Optimized images với lazy loading  
✅ Touch feedback cho mobile  
✅ Enhanced swiper với loop và autoplay  
✅ Music autoplay functionality  
✅ Improved typography và spacing  
✅ Modern shadow effects  
✅ Hover effects cho desktop  

---

💖 Made with love
