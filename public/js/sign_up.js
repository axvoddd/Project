document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    // ไม่ต้องตรวจสอบข้อมูล
    window.location.href = '/login'; // เด้งกลับไปที่หน้า login
});