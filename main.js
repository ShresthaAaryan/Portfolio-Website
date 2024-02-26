document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const navLinks = document.querySelectorAll('.topnav a:not(.no-smooth-scroll)');
  const sidebarLinks = document.querySelectorAll('.sidebar a:not(.no-smooth-scroll)');

  body.classList.add("light-mode");

  function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("active");
  }
  darkModeToggle.addEventListener("click", toggleDarkMode);

  function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    const offsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href').substring(1));
    });
  });

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href').substring(1));
    });
  });

  function scrollSpy() {
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').substring(1));

      if (
        section.offsetTop <= fromTop + 20 &&
        section.offsetTop + section.offsetHeight > fromTop + 20
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    sidebarLinks.forEach(link => {
      const section = document.getElementById(link.getAttribute('href').substring(1));

      if (
        section.offsetTop <= fromTop + 20 &&
        section.offsetTop + section.offsetHeight > fromTop + 20
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);

  scrollSpy();
});
