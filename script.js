document.getElementById('injectBtn').addEventListener('click', function() {
    document.getElementById('beep').play();
    setTimeout(() => {
        document.getElementById('injecting').play();
    }, 300);
    setTimeout(() => {
        document.getElementById('success').play();
        alert('Inject Success!');
    }, 1800);
});

document.getElementById('fov').addEventListener('input', function() {
    document.getElementById('fovVal').textContent = this.value;
});
document.getElementById('speed').addEventListener('input', function() {
    document.getElementById('speedVal').textContent = this.value;
});
