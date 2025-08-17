// Main JS for interactions, animations, form validation, gallery lightbox
document.addEventListener('DOMContentLoaded', function(){

  // Set current years in footers
  const yearEls = ['year','yearPrice','yearGallery','yearAbout','yearContact'];
  yearEls.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle (applies to all toggles using same logic)
  function setupNav(toggleId){
    const btn = document.getElementById(toggleId);
    if(!btn) return;
    btn.addEventListener('click', function(){
      const nav = this.closest('.header-inner').querySelector('.nav');
      if(nav) nav.classList.toggle('active');
      this.classList.toggle('open');
    });
  }
  ['navToggle','navTogglePrice','navToggleGallery','navToggleAbout','navToggleContact'].forEach(setupNav);

  // Smooth anchor scroll for internal links (if present)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Order button example: opens contact page or external link
  const orderButtons = document.querySelectorAll('#orderBtn,#orderBtn2');
  orderButtons.forEach(b=>{
    b.addEventListener('click', (e)=>{
      // if you have an external ordering page, replace '#' in HTML with your link.
      // Here we send user to contact page as default.
      if(b.getAttribute('href') === '#'){
        e.preventDefault();
        window.location.href = 'contact.html';
      }
    });
  });

  // Price toggle (one-time vs subscription) simple animation
  const toggles = document.querySelectorAll('.price-toggle .btn');
  toggles.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      toggles.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      // You can add more logic to change prices dynamically
    });
  });

  // Gallery lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if(galleryItems.length && lightbox){
    galleryItems.forEach(img=>{
      img.addEventListener('click', ()=>{
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightboxCaption.textContent = img.alt || '';
        lightbox.setAttribute('aria-hidden','false');
      });
    });

    function closeLightbox(){
      lightbox.setAttribute('aria-hidden','true');
      lightboxImg.src = '';
      lightboxCaption.textContent = '';
    }
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e)=>{
      if(e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') closeLightbox();
    });
  }

  // Contact form handling (client-side only)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const msg = document.getElementById('formMsg');

      if(!name.value.trim() || !email.value.trim() || !message.value.trim()){
        msg.textContent = 'Моля попълнете всички задължителни полета.';
        msg.style.color = '#FFB86B';
        return;
      }
      // Simple email format check
      if(!/^\S+@\S+\.\S+$/.test(email.value)){
        msg.textContent = 'Моля въведете валиден имейл.';
        msg.style.color = '#FFB86B';
        return;
      }

      // Simulate successful sending (replace with actual AJAX or mail handler)
      msg.textContent = 'Вашето запитване беше изпратено успешно! Ще се свържем скоро.';
      msg.style.color = '#A7FFBB';
      form.reset();
    });
  }

  // IntersectionObserver for reveal animations on scroll (adds class to animate)
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .pop-in').forEach(el=>{
    observer.observe(el);
  });

  // Tiny micro-interactions: floating effect for elements with .wobble (handled in CSS)
});
<!-- PushAlert -->
<script type="text/javascript">
        (function(d, t) {
                var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
                g.src = "https://cdn.pushalert.co/integrate_cf9c5b96325d0cddee0bb09aef0747ba.js";
                s.parentNode.insertBefore(g, s);
        }(document, "script"));
</script>
<!-- End PushAlert -->



