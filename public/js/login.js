document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // หลังจากตรวจสอบการล็อคอินสำเร็จ
    window.location.href = './html/index.html'; // ไปยังหน้าแรก
});
