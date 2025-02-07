// working.js

// ฟังก์ชันสำหรับรับข้อมูลจากฟอร์ม
document.getElementById('workingForm').addEventListener('submit', function(event) {
    event.preventDefault();  // ป้องกันการโหลดหน้าใหม่

    const eggType = document.getElementById('eggType').value;
    const temperature = document.getElementById('temperature').value;
    const humidity = document.getElementById('humidity').value;
    const turningTime = document.getElementById('turningTime').value;
    const startDate = document.getElementById('startDate').value;
    const eggCount = document.getElementById('eggCount').value;

    // แสดงข้อมูลที่ผู้ใช้กรอก
    alert(`ประเภทไข่: ${eggType}\nอุณหภูมิ: ${temperature}°C\nความชื้น: ${humidity}%\nเวลาในการกลับไข่: ${turningTime} นาที\n วันที่เริ่มฟัก: ${startDate}\nจำนวนไข่: ${eggCount}`);
});
