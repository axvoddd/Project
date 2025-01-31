document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    // แสดงการส่งข้อความ
    alert("ข้อความของคุณถูกส่งแล้ว!");
    // ในกรณีจริง สามารถเพิ่มฟังก์ชันสำหรับส่งข้อความไปยัง server ได้
});
