document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    // ไม่ต้องตรวจสอบข้อมูล
    window.location.href = '/'; // เด้งกลับไปที่หน้า home
});