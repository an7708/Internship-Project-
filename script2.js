
        // const toggleBtn = document.getElementById("theme-toggle");

        // toggleBtn.addEventListener("click", () => {
        //     document.body.classList.toggle("dark");

        //     toggleBtn.textContent =
        //     document.body.classList.contains("dark") ? "☀️" : "🌙";
        // });




    const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
        icon.src = "icons/sun.png";
        icon.alt = "Light mode";
        } else {
        icon.src = "icons/moon.png";
        icon.alt = "Dark mode";
        }
    });