window.onload = () => {
    let time = Date.now();
    document.getElementById("order-id").value = time;

    const total = document.getElementById("total");
    total.value = new Intl.NumberFormat('vi-VN').format(total.value);
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

function toggleTheme(target) {
    if (target.classList.contains('active')) {
        target.classList.remove('active');
        document.body.classList.remove('light');
    }
    else {
        target.classList.add('active');
        document.body.classList.toggle('light');
    }
}

const toggle = document.getElementsByClassName('toggle')[0];
toggle.addEventListener("click", () => toggleTheme(toggle));