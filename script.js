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
    const repoLink = repoLinkInput.value;
    if (repoLink) {
      // Redirect to deploy page with the forked repo link
      window.open(repoLink, '_blank');
    } else {
      alert("Please input a forked repo link.");
    }
  });
});
