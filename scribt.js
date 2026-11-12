/* =========================
   TELCOM.NETWORK - Main Script
========================= */

document.addEventListener("DOMContentLoaded", () => {

    // مراقبة ظهور الأقسام
    const elements = document.querySelectorAll(
        ".about, .jobs, .support-section"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });

    // التنقل السلس بين أقسام الموقع
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});