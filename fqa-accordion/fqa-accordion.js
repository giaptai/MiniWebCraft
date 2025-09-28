document.querySelectorAll("#fqa .accordion.head button").forEach((btn) => {
    btn.addEventListener("click", () => {
        const p = btn.closest(".accordion").parentElement.querySelector("p");
        if (!p) {
            return;
        }
        const isOpen = p.classList.toggle('open');
          if (isOpen) {
            p.style.maxHeight = p.scrollHeight + "px";
            btn.textContent = "-";
        } else {
            p.style.maxHeight = "0";
            btn.textContent = "+";
        }
    });
});
