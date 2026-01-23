document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init({ duration: 800, once: true });

  const navbar = document.querySelector('#mainNav');
  const form = document.querySelector('#contactForm');
  const btnTop = document.getElementById('btnTop'); // botón Ir arriba

  if (!navbar) console.warn('Navbar (#mainNav) no encontrado.');

  const debounce = (fn, wait = 50) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
      navbar.classList.remove('bg-dark');
    } else {
      navbar.classList.remove('navbar-scrolled');
      navbar.classList.add('bg-dark');
    }

    // Mostrar/ocultar botón Ir arriba
    if (btnTop) {
      if (window.scrollY > 200) {
        btnTop.style.display = 'block';
      } else {
        btnTop.style.display = 'none';
      }
    }
  };

  window.addEventListener('scroll', debounce(handleScroll, 50));
  handleScroll();

  // Smooth scroll al inicio
  if (btnTop) {
    btnTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value.trim();
      const email = form.querySelector('[name="email"]')?.value.trim();
      if (!name || !email) {
        alert('Por favor completa nombre y correo.');
        return;
      }
      alert('¡Mensaje recibido!');
      form.reset();
    });
  } else {
    console.warn('Formulario (#contactForm) no encontrado.');
  }
});