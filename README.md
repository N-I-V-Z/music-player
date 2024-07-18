# Hướng dẫn sử dụng Music Player App

Đây là ứng dụng Music Player cho phép bạn nghe nhạc và quản lý các bài hát của mình.

## Cài đặt và Chạy ứng dụng

1. **Clone repository từ GitHub**

```bash
    git clone https://github.com/N-I-V-Z/music-player.git
    cd music-player
```

2. **Cài đặt dependencies**

```bash
    npm install
```

3. **Cấu hình API Endpoint**

- Mở file `src/component/config/config.js`
- Thiết lập `API` endpoint cho ứng dụng của bạn.

4. **Khởi động ứng dụng**
- **Server**: 
```bash
    npm run be
```
- **Client**:
```bash
    npm start
```

5. **Truy cập ứng dụng**

- Mở trình duyệt và truy cập vào địa chỉ `http://localhost:3000` (hoặc địa chỉ khác nếu đã được cấu hình).

## Chức năng của ứng dụng

- **Nghe nhạc**: Click vào một bài hát trong danh sách để nghe.
- **Tải lên bài hát mới**: Click vào nút "Upload" để tải lên bài hát mới.
- **Xóa bài hát**: Click vào nút "X" trên mỗi bài hát để xóa khỏi danh sách.

## Hướng dẫn thêm bài hát

1. Click vào nút "Upload".
2. Chọn file âm thanh từ máy tính của bạn và bấm "Upload".
3. Bài hát mới sẽ được thêm vào danh sách và bạn có thể nghe bằng cách click vào tên của nó.

## Xóa bài hát

1. Click vào nút "X" trên bài hát bạn muốn xóa.
2. Xác nhận hộp thoại xóa để hoàn tất thao tác.

##### &#169; 2024.N-I-V-Z
