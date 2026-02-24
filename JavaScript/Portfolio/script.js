
  // Mouse glow blob
  const blob = document.getElementById('glowBlob');
  document.addEventListener('mousemove', (e) => {
    blob.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');

        // Animate skill bars when section comes into view
        if (el.target.id === 'skillsContainer' || el.target.closest('#skillsContainer')) {
          animateSkillBars();
        }
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  // Skill bar animation
  let barsAnimated = false;
  function animateSkillBars() {
    if (barsAnimated) return;
    barsAnimated = true;
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const w = bar.dataset.width;
      setTimeout(() => bar.style.width = w + '%', 100);
    });
  }

  // Also trigger on skills section visibility
  const skillsSection = document.getElementById('skills');
  const skillsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) animateSkillBars();
  }, { threshold: 0.2 });
  skillsObserver.observe(skillsSection);

  // Contact form
  function sendMessage() {
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const msg = document.getElementById('msgInput').value.trim();

    if (!name || !email || !msg) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate sending
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.6';

    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.opacity = '1';
      document.getElementById('nameInput').value = '';
      document.getElementById('emailInput').value = '';
      document.getElementById('msgInput').value = '';

      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }, 1000);
  }