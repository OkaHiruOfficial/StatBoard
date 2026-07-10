# Bảng Thống Kê Biểu Quyết

Đây là dự án cá nhân của **Phạm Bảo An (Yumi)**. Trang web giúp quản lý các kỹ năng cá nhân với giao diện trực quan và tính năng xuất ảnh kết quả.

## 📋 Mô tả dự án
- **Tên dự án:** Bảng Thống Kê Biểu Quyết
- **Tác giả:** Yumi (Phạm Bảo An)
- **Công nghệ:** HTML5, CSS3, JavaScript
- **Thư viện phụ trợ:** [html2canvas](https://html2canvas.hertzen.com/) (để xuất ảnh)

## ✨ Các đặc điểm nổi bật
- **Giao diện hiện đại:** Sử dụng tông màu cam vàng chủ đạo với hiệu ứng đổ bóng tạo chiều sâu 3D.
- **Tương tác linh hoạt:** Cập nhật thanh trạng thái theo thời gian thực khi thay đổi chỉ số.
- **Chặn lỗi logic:** Hệ thống tự động kiểm soát giá trị nhập từ 0% đến 100%.
- **Xuất ảnh thông minh:** Nút "Xuất thành ảnh" chỉ chụp đúng phần bảng dữ liệu, loại bỏ các thành phần thừa.

## 🛠 Hướng dẫn sử dụng
1. **Chỉnh sửa:** Nhấp vào tên kỹ năng hoặc ô phần trăm để thay đổi giá trị.
2. **Theo dõi:** Thanh trạng thái bên dưới sẽ tự động thay đổi độ dài tương ứng.
3. **Lưu kết quả:** Nhấn nút **"XUẤT THÀNH ẢNH"** để tải file `.png` về thiết bị.

## 🚀 Cấu trúc file
- `index.html`: Chứa cấu trúc chính và liên kết thư viện.
- `style.css`: Định dạng giao diện, hiệu ứng nổi bóng và màu sắc.
- `script.js`: Xử lý logic tính toán và lệnh xuất ảnh từ html2canvas.

---
*Ghi chú: Đảm bảo thiết bị của bạn có kết nối Internet để thư viện xuất ảnh hoạt động.*
