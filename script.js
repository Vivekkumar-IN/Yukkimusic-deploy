document.querySelector('.deploy-btn').addEventListener('click', function() {
    const repoLink = document.querySelector('.repo-link-input').value;
    
    // Check if the input is a valid GitHub link
    if (!repoLink.startsWith("https://github.com/")) {
        alert('Please input a valid GitHub repository URL.');
        return;
    }
    
    // Redirect to Heroku deployment if valid
    if (repoLink) {
        window.location.href = `https://heroku.com/deploy?template=${repoLink}`;
    } else {
        alert('Please input your forked repository link.');
    }
});
