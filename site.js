/* LONGEVEATS: dropdown navigation shared by every page.
   Opens and closes the panel, closes it on outside click and on Escape. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('site-nav');
  if (!toggle || !panel) return;

  var setOpen = function (open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    panel.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('click', function (e) {
    if (!panel.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setOpen(false); toggle.focus(); }
  });
})();
