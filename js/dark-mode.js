function initDarkMode() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      showNotification("Mode sombre activé 🌙");
    } else {
      toggleBtn.textContent = "🌙";
      showNotification("Mode clair activé ☀️");
    }
  });
}

function showNotification(message) {
  const notif = document.createElement("div");
  notif.textContent = message;
  notif.className = "theme-notification";
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2000);
}

// ⚡ On attend que le header soit chargé
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

// Exemple d’utilisation dans ton index.js
loadHTML("View/commun/header.html", "header", initDarkMode);
loadHTML("View/commun/footer.html", "footer");
