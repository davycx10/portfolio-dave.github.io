// Toujours appliquer le thème dès le chargement de la page
(function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
})();

function initDarkMode() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  // Mettre l’icône correcte selon le thème actuel
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark"); // sauvegarde
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light"); // sauvegarde
    }
  });
}

function loadHTML(url, targetId, callback) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Erreur 404 : ${url} introuvable`);
      return res.text();
    })
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
      if (callback) callback(); // on exécute le callback après injection
    })
    .catch(err => {
      document.getElementById(targetId).innerHTML = `<p>${err.message}</p>`;
    });
}

// Exemple d’utilisation
loadHTML("View/commun/header.html", "header", initDarkMode);
loadHTML("View/commun/footer.html", "footer");
