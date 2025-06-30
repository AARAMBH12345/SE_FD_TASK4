function showMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = `Thank you, ${name}! We’ll get back to you soon.`;
        this.reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
    }
});
