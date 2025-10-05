document.addEventListener('DOMContentLoaded', () => {
    const keyboard = document.getElementById("keyboard");
    if (!keyboard) return;

    document.addEventListener('keydown', (e) => {
        // Ngăn chặn hành vi mặc định của trình duyệt cho một số phím
        // để tránh cuộn trang hoặc các phím tắt không mong muốn.
        if (e.code === 'Tab' || e.code === 'Backspace' || e.code === 'Enter' || e.code === 'Space') {
            e.preventDefault();
        }
        // Lấy event.code của phím được nhấn và chuyển sang chữ thường
        const targetCode = e.code.toLowerCase();
        // Tìm tất cả các nút trên bàn phím ảo có data-key tương ứng
        const btnToPress = keyboard.querySelectorAll(`button[data-key="${targetCode}"]`);

        btnToPress.forEach(btn => {
            if (!btn.classList.contains("pressed")) {
                btn.classList.add('pressed')
            }
        });
    });

    document.addEventListener('keyup', (e) => {
        const targetCode = e.code.toLowerCase();
        const btnToRelease = keyboard.querySelectorAll(`button[data-key="${targetCode}"]`);

        btnToRelease.forEach(btn => {
            if (btn.classList.contains('pressed')) {
                btn.classList.remove('pressed');
            }
        });
    });
});
