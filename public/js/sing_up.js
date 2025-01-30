document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // ป้องกันการรีโหลดหน้า

    // แจ้งเตือน Sign Up สำเร็จ
    alert('Sign Up Successful!');

    // เปลี่ยนเส้นทางไปยังหน้า login.html
    window.location.href = './html/login.html'; // เปลี่ยนเส้นทางให้ถูกต้อง
});
