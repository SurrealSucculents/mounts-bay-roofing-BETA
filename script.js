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
  var note = document.getElementById('form-note');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var name = f.name.value.trim(), phone = f.phone.value.trim();
      if (!name || !phone) {
        (name ? f.phone : f.name).focus();
        form.classList.add('invalid');
        note.textContent = 'Please add your name and a phone number so we can call you back.';
        note.classList.add('error');
        return;
      }
      form.classList.remove('invalid');
      note.classList.remove('error');
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      btn.textContent = 'Sending…';
      var data = new FormData(form);
      fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      }).then(function (r) { return r.ok ? r.json() : Promise.reject(r); }).then(function (j) {
        if (!j || String(j.success) !== 'true') { return Promise.reject(j); }
        form.classList.add('sent');
        note.textContent = 'Thanks ' + name + ', your request has been sent. We’ll call you on ' + phone + ' to arrange a visit.';
      }).catch(function () {
        btn.disabled = false;
        btn.textContent = 'Send request';
        note.classList.add('error');
        note.textContent = 'Sorry, that didn’t send. Please call 07803 479673 or email andrec6@icloud.com.';
      });
    });
  }
})();
