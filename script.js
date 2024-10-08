document.addEventListener("DOMContentLoaded", () => {
  const forkCountElement = document.getElementById("fork-count");
  const deployButton = document.getElementById('deploy-button');
  const repoLinkInput = document.getElementById('repo-link');
  const warningMessage = document.getElementById('warning-message');

  // Fetch fork count from GitHub API
  fetch('https://api.github.com/repos/TheTeamVivek/YukkiMusic')
    .then(response => response.json())
    .then(data => {
      forkCountElement.textContent = data.forks_count;
    })
    .catch(error => {
      console.error('Error fetching fork count:', error);
    });

  // Add functionality for the deploy button
  deployButton.addEventListener('click', () => {
    const repoLink = repoLinkInput.value.trim();
    warningMessage.classList.add('hidden'); // Hide the warning message initially

    if (repoLink === "") {
      warningMessage.textContent = "Please input Your forked repo link.";
      warningMessage.classList.remove('hidden'); // Show the warning message
      return;
    }

    const githubUrlPattern = /^https:\/\/github\.com\/.+\/.+$/;

    if (!githubUrlPattern.test(repoLink)) {
      warningMessage.textContent = "Please input a valid GitHub repository URL.";
      warningMessage.classList.remove('hidden'); // Show the warning message
    } else {
      // Redirect to Heroku deployment page with the GitHub repo URL
      const herokuUrl = `https://dashboard.heroku.com/new?template=${encodeURIComponent(repoLink)}`;
      window.open(herokuUrl, '_blank');
    }
  });
});
