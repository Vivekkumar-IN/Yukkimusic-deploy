document.addEventListener("DOMContentLoaded", () => {
  const forkCountElement = document.getElementById("fork-count");

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
  const deployButton = document.getElementById('deploy-button');
  const repoLinkInput = document.getElementById('repo-link');

  deployButton.addEventListener('click', () => {
    const repoLink = repoLinkInput.value.trim();

    if (repoLink === "") {
      alert("Please input a forked repo link.");
      return;
    }

    const githubUrlPattern = /^https:\/\/github\.com\/.+\/.+$/;

    if (!githubUrlPattern.test(repoLink)) {
      alert("Please input a valid GitHub repository URL.");
    } else {
      // Redirect to Heroku deployment page with the GitHub repo URL
      const herokuUrl = `https://dashboard.heroku.com/new?template=${encodeURIComponent(repoLink)}`;
      window.open(herokuUrl, '_blank');
    }
  });
});
