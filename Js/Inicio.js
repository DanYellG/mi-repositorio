document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is running!");

    const backToTopButton = document.getElementById("back-to-top");

    if (backToTopButton) {  // Check if the button exists
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {  // Use window.scrollY
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});