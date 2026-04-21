document.getElementById("nikaContactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Page reload hone se rokega

    const form = event.target;
    const data = new FormData(form);
    const statusMessage = document.getElementById("statusMessage");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            statusMessage.innerText = "We will contact with you soon";
            statusMessage.className = "success-text";
            form.reset(); // Form clear karega
        } else {
            statusMessage.innerText = "Oops! There was a problem submitting your form";
            statusMessage.className = "error-text";
        }
    }).catch(error => {
        statusMessage.innerText = "Oops! There was a problem submitting your form";
        statusMessage.className = "error-text";
    }).finally(() => {
        statusMessage.classList.remove("hidden");
        submitBtn.innerText = "Submit";
        submitBtn.disabled = false;
    });
});