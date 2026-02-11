const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");
const mainContent = document.getElementById("main-content");

/* Move focus when skip link is used */
document.querySelector(".skip-link").addEventListener("click", () => {
    mainContent.focus();
});

/* Accessible form validation */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value || !email.value || !message.value) {
        messageBox.textContent = "Please fill in all fields.";
        messageBox.style.color = "red";
        messageBox.focus();
        return;
    }

    messageBox.textContent = "Message sent successfully!";
    messageBox.style.color = "green";

    form.reset();
});
