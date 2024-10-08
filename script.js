// Fetch GitHub fork count using GitHub API
async function fetchForkCount() {
    const url = 'https://api.github.com/repos/TheTeamVivek/YukkiMusic';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const forks = data.forks_count || '0';
        document.getElementById('forks').innerText = forks;
    } catch (error) {
        console.error('Error fetching fork count:', error);
        document.getElementById('forks').innerText = 'N/A';
    }
}

// Validate the repo URL
document.getElementById('deploy-btn').addEventListener('click', () => {
    const repoURL = document.getElementById('repo-url').value;
    const warningMessage = document.getElementById('warning');
    const githubRepoRegex = /^https:\/\/github\.com\/[\w-]+\/[\w-]+$/;

    if (!githubRepoRegex.test(repoURL)) {
        // Show warning if not a valid GitHub repo URL
        warningMessage.style.display = 'block';
    } else {
        // Hide warning if valid
        warningMessage.style.display = 'none';
        alert('Deploying repository: ' + repoURL);
        // You can add your deployment logic here
    }
});

// Fetch fork count on page load
window.onload = fetchForkCount;
