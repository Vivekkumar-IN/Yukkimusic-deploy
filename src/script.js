document.addEventListener("DOMContentLoaded", () => {
  const deployButton = document.getElementById('deploy-button');
  const repoLinkInput = document.getElementById('repo-link');
  const warningMessage = document.getElementById('warning-message');


  const hideWarningAfterDelay = () => {
    setTimeout(() => {
      warningMessage.classList.add('hidden'); 
      repoLinkInput.value = ""; 
    }, 2000);
  };

  
  
  deployButton.addEventListener('click', () => {
    const repoLink = repoLinkInput.value.trim();
    warningMessage.classList.add('hidden'); 
    warningMessage.style.marginTop = "0"; 

    if (repoLink === "") {
      warningMessage.textContent = "url wrong he .";
      warningMessage.classList.remove('hidden');
      warningMessage.style.marginTop = "15px"; 
      hideWarningAfterDelay(); 
      return;
    }

    const githubUrlPattern = /^https:\/\/github\.com\/.+\/.+$/;

    if (!githubUrlPattern.test(repoLink)) {
      warningMessage.textContent = "Plaes enter valid url .";
      warningMessage.classList.remove('hidden'); 
      warningMessage.style.marginTop = "15px";
      hideWarningAfterDelay(); 
      return;
    }

    
    const herokuUrl = `https://dashboard.heroku.com/new?template=${encodeURIComponent(repoLink)}`;
    window.open(herokuUrl, '_blank');
  });
});
