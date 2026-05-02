// OGMA – Hub de Tutos | Main Script

(function () {
  'use strict';

  // ========================
  // Theme Toggle
  // ========================
  const THEME_KEY = 'ogma-theme';
  const toggleBtn = document.getElementById('theme-toggle');

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    // Preserve sidebar classes if already set
    if (localStorage.getItem('ogma-sidebar') === 'open') {
        document.body.classList.add('sidebar-open');
    }
    if (toggleBtn) toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem(THEME_KEY, theme);
  }

  applyTheme(getPreferredTheme());

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var current = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  // ========================
  // Sidebar Toggle
  // ========================
  const sidebar = document.getElementById('main-sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  
  function setSidebarState(isOpen) {
    if (isOpen) {
        sidebar.classList.remove('sidebar-closed');
        document.body.classList.add('sidebar-open');
        localStorage.setItem('ogma-sidebar', 'open');
    } else {
        sidebar.classList.add('sidebar-closed');
        document.body.classList.remove('sidebar-open');
        localStorage.setItem('ogma-sidebar', 'closed');
    }
  }

  // Initial state
  const savedSidebar = localStorage.getItem('ogma-sidebar') || 'closed';
  setSidebarState(savedSidebar === 'open');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
        const isOpen = !sidebar.classList.contains('sidebar-closed');
        setSidebarState(!isOpen);
    });
  }

  // ========================
  // Hamburger Menu (Mobile Only)
  // ========================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      hamburger.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        hamburger.textContent = '☰';
      });
    });
  }

  // ========================
  // Scroll Reveal Animation
  // ========================
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // ========================
  // Auto Table of Contents (Tutorial pages)
  // ========================
  var tocContainer = document.getElementById('toc-list');
  var markdownBody = document.querySelector('.markdown-body');

  if (tocContainer && markdownBody) {
    var headings = markdownBody.querySelectorAll('h2');
    headings.forEach(function (h, i) {
      var id = 'section-' + i;
      h.id = id;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;
      li.appendChild(a);
      tocContainer.appendChild(li);
    });
  }

})();
