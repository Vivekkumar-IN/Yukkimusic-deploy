document.addEventListener("DOMContentLoaded", () => {
  const deployButton = document.getElementById('deploy-button');
  const repoLinkInput = document.getElementById('repo-link');
  const warningMessage = document.getElementById('warning-message');

  // Fetch fork count from GitHub API
  fetch('https://api.github.com/repos/TheTeamVivek/YukkiMusic')
    .then(response => response.json())
    .then(data => {
      const forkCountElement = document.createElement('div');
      forkCountElement.id = "fork-count";
      forkCountElement.textContent = data.forks_count;
      document.querySelector('.fork-counter').appendChild(forkCountElement);
    })
    .catch(error => {
      console.error('Error fetching fork count:', error);
    });

  // Add functionality for the deploy button
  deployButton.addEventListener('click', () => {
    const repoLink = repoLinkInput.value.trim();
    warningMessage.classList.add('hidden'); // Hide the warning message initially

    // Clear the input field if there's an issue
    const clearInput = () => {
      repoLinkInput.value = ""; // Clear the input field
    };

    if (repoLink === "") {
      warningMessage.textContent = "Please enter your forked repo link.";
      warningMessage.classList.remove('hidden'); // Show the warning message
      clearInput(); // Clear the input field
      return;
    }

    const githubUrlPattern = /^https:\/\/github\.com\/.+\/.+$/;

    if (!githubUrlPattern.test(repoLink)) {
      warningMessage.textContent = "Please enter a valid GitHub repository URL.";
      warningMessage.classList.remove('hidden'); // Show the warning message
      clearInput(); // Clear the input field
      return; // Exit the function here
    }

    // Redirect to Heroku deployment page with the GitHub repo URL
    const herokuUrl = `https://dashboard.heroku.com/new?template=${encodeURIComponent(repoLink)}`;
    window.open(herokuUrl, '_blank');
  });
});
