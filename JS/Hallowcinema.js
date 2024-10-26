function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'Noi_della_montagna' && password === '31/10/24') {
        document.body.innerHTML = `
            <div class="container">
                <h1 class="success-message">Login success</h1>
            </div>
        `;
        setTimeout(() => {
            window.location.href = 'Homepage.html';
        }, 3000);
        return false;
    } else {
        errorMessage.textContent = 'Username e password errati, riprovare';
        return false;
    }
}
