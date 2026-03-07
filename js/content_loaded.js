(function () {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(function(btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function(b) {
          b.classList.remove('btn-primary', 'active');
          b.classList.add('btn-outline-primary');
        });
        this.classList.remove('btn-outline-primary');
        this.classList.add('btn-primary', 'active');
        const filter = this.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(function(card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  })();
