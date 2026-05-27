// Thay đổi lời chào theo thời gian thực
const updateGreeting = () => {
    const hours = new Date().getHours();
    const greetingMsg = document.getElementById('greeting');
    
    if (hours < 12) greetingMsg.innerText = "Chào buổi sáng! 👋";
    else if (hours < 18) greetingMsg.innerText = "Chào buổi chiều! 👋";
    else greetingMsg.innerText = "Chào buổi tối! 👋";
};

updateGreeting();

// Hiệu ứng di chuyển nhẹ nhàng khi rê chuột
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach(blob => {
        blob.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    });
});
