
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    console.log(navbar);

    // Add or remove the "sticky" class based on the scroll position
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

