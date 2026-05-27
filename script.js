// Đổi lời chào theo giờ
const updateGreeting = () => {
    const hours = new Date().getHours();
    const greetingMsg = document.getElementById('greeting');
    
    if (hours < 12) greetingMsg.innerText = "Chào buổi sáng! ☀️";
    else if (hours < 18) greetingMsg.innerText = "Chào buổi chiều! ☁️";
    else greetingMsg.innerText = "Chào buổi tối! 🌙";
};

updateGreeting();

// Hiệu ứng di chuyển mượt mà các khối màu theo chuột
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 30;
    const y = (e.clientY / window.innerHeight) * 30;

    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.5;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
