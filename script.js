
const socket = new WebSocket('ws://127.0.0.1:8080');

socket.onopen = () => console.log('تم الاتصال!');
socket.onmessage = (event) => console.log('رسالة:', event.data);
