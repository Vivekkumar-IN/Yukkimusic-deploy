document.querySelector('.deploy-btn').addEventListener('click', function() {
    const repoLink = document.querySelector('.repo-link-input').value;
    if (repoLink) {
        window.location.href = `https://heroku.com/deploy?template=${repoLink}`;
    } else {
        alert('Please input your forked repository link.');
    }
});
