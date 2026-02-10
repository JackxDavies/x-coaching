function signupHandler(e){
  e.preventDefault();
  const form = e.target;
  const name = (form.name && form.name.value) || '';
  const email = (form.email && form.email.value) || '';
  const subject = encodeURIComponent('Sign up — 8 Week Transformation');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nPlease provide next steps.`);
  // open mail client as a simple signup fallback
  window.location.href = `mailto:hello@x-coaching.com?subject=${subject}&body=${body}`;
  return false;
}

// Small enhancement: smooth scroll for in-page links
document.addEventListener('click', function(e){
  const a = e.target.closest && e.target.closest('a');
  if(!a) return;
  const href = a.getAttribute('href')||'';
  if(href.startsWith('#') && href.length>1){
    const target = document.querySelector(href);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  }
});
