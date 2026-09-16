(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var name = f.name.value.trim(), phone = f.phone.value.trim();
      if (!name || !phone) {
        (name ? f.phone : f.name).focus();
        form.classList.add('invalid');
        return;
      }
      var body = 'Name: ' + name + '\nPhone: ' + phone +
        '\nProperty: ' + (f.location.value.trim() || 'not given') +
        '\n\n' + (f.message.value.trim() || 'Please call me back about some roofing work.');
      window.location.href = 'mailto:andrec6@icloud.com?subject=' + encodeURIComponent('Quote request from ' + name) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();
