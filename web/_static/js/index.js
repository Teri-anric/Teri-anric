document.addEventListener("DOMContentLoaded", () => {
    const billingModal = document.getElementById("billingModal");
    const billingButton = document.getElementById("billing-button");
    const closeBtn = billingModal.querySelector(".close");

    billingButton.addEventListener("click", () => {
        billingModal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        billingModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === billingModal) {
            billingModal.style.display = "none";
        }
    });

    document.querySelectorAll('.copyable').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            const textToCopy = this.textContent.replace(/\s+/g, '');
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show tooltip
                const tooltip = document.createElement('span');
                tooltip.textContent = 'Copied!';
                tooltip.classList.add('copy-tooltip');
                tooltip.style.top = `${e.clientY + window.scrollY}px`;
                tooltip.style.left = `${e.clientX + window.scrollX}px`;
                document.body.appendChild(tooltip);
                setTimeout(() => tooltip.remove(), 1500);
            });
        });
    });

    if (window.location.hash === '#payment') {
        billingModal.style.display = 'block';
    }
});