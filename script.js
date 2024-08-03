const textbox = document.getElementById("textbox");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
    const password = textbox.value;

    if (password == "NAME MORE LIKE FLAME LOL") {
        fetch('https://discord.com/api/webhooks/1269099363624554518/DDrfP3s9Uxc00X9YLVE8KHPWddiPFsRe6UxA1zXYV4KX4wOvx3vMlkti6bt9cO74ULHV', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: '@everyone someone entered the password correctly',
            }),
        })
        .then(response => {
            if (response.ok) {
                location.href = './index1.html';
            }
        });
    } else {
        textbox.style.backgroundColor = "red";
        setTimeout(() => {
            textbox.style.backgroundColor = "black";
        }, 250);
    }
});
