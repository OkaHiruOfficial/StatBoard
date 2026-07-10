document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các mục kỹ năng
    const items = document.querySelectorAll('.progress-item');

    items.forEach(item => {
        const input = item.querySelector('.input-percent');
        const bar = item.querySelector('.progress');

        if (input && bar) {
            input.addEventListener('input', (e) => {
                let value = e.target.value;

                // Xử lý nếu để trống
                if (value === "") {
                    bar.style.width = '0%';
                    return;
                }

                value = parseInt(value);

                // Kiểm tra nếu không phải là số
                if (isNaN(value)) {
                    e.target.value = 0;
                    bar.style.width = '0%';
                    return;
                }

                // Giới hạn 0 - 100
                if (value > 100) {
                    value = 100;
                    e.target.value = 100;
                } else if (value < 0) {
                    value = 0;
                    e.target.value = 0;
                }

                // Cập nhật thanh trạng thái
                bar.style.width = value + '%';
            });
        }
    });
});
document.getElementById('btn-export').addEventListener('click', () => {
    // Chọn đúng cái bảng (container) để chụp
    const element = document.querySelector('.container');

    // Dùng html2canvas để vẽ cái bảng ra ảnh
    html2canvas(element, {
        backgroundColor: null, // Giữ nền trong suốt nếu muốn
        scale: 2 // Tăng chất lượng ảnh lên cho sắc nét
    }).then(canvas => {
        // Tạo một đường link để tự động tải ảnh về
        const link = document.createElement('a');
        link.download = 'Skill-Yumi.png'; // Tên file ảnh
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});