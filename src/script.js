document.addEventListener("DOMContentLoaded", () => {
  const deployButton = document.getElementById('deploy-button');
  const repoLinkInput = document.getElementById('repo-link');
  const warningMessage = document.getElementById('warning-message');

  // Add functionality for the deploy button
  deployButton.addEventListener('click', () => {
    const repoLink = repoLinkInput.value.trim();
    warningMessage.classList.add('hidden'); // Hide the warning message initially
    warningMessage.style.marginTop = "0"; // Reset margin when hidden

    // Clear the input field if there's an issue
    const clearInput = () => {
      repoLinkInput.value = ""; // Clear the input field
    };

    if (repoLink === "") {
      warningMessage.textContent = "ᴘʟᴇᴀsᴇ ᴇɴᴛᴇʀ ʏᴏᴜʀ ғᴏʀᴋᴇᴅ ʀᴇᴘᴏ ʟɪɴᴋ.";
      warningMessage.classList.remove('hidden'); // Show the warning message
      warningMessage.style.marginTop = "15px"; // Add margin when visible
      clearInput(); // Clear the input field
      return;
    }

    const githubUrlPattern = /^https:\/\/github\.com\/.+\/.+$/;

    if (!githubUrlPattern.test(repoLink)) {
      warningMessage.textContent = "Pʟᴇᴀsᴇ ᴇɴᴛᴇʀ ᴀ ᴠᴀʟɪᴅ GɪᴛHᴜʙ ʀᴇᴘᴏsɪᴛᴏʀʏ URL.";
      warningMessage.classList.remove('hidden'); // Show the warning message
      warningMessage.style.marginTop = "15px"; // Add margin when visible
      clearInput(); // Clear the input field
      return; // Exit the function here
    }

    // Redirect to Heroku deployment page with the GitHub repo URL
    const herokuUrl = `https://dashboard.heroku.com/new?template=${encodeURIComponent(repoLink)}`;
    window.open(herokuUrl, '_blank');
  });
});
