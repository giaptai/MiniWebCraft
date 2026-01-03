window.onload = () => {
    let time = Date.now();
    document.getElementById("order-id").value = time;
}

document.querySelectorAll('.type').forEach((p) => {
    p.addEventListener("click", () => {
        document.querySelectorAll('.type').forEach((el) => {
            el.classList.remove('active');
        })
        p.classList.add('active');
        document.getElementById("payment-method").value = p.textContent.trim();
    })
})