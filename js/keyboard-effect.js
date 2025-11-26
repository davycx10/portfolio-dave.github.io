function initTypingEffectIntro() {
    const introElement = document.getElementById("intro-text");
    if (!introElement) return;

    // Sauvegarde du HTML complet
    const htmlContent = introElement.innerHTML;
    introElement.innerHTML = ""; // Vide le contenu pour l'effet

    let index = 0;
    const speed = 35; // vitesse de frappe

    const typeText = () => {
        if (index < htmlContent.length) {
            introElement.innerHTML += htmlContent.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    };

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && index === 0) {
                    introElement.style.opacity = 1;
                    typeText();
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(introElement);
}
