const btn = document.getElementById('colorBtn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = "ưhite";
    } else {
        btn.textContent = "black";
    }
});