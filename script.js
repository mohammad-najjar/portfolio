(() => {
  'use strict';
  const DICT = {
  "en": {
    "meta.title": "Mohammad Najjar | Software Developer",
    "meta.description": "Portfolio of Mohammad Najjar, a software developer from Yatta, Palestine. Browse six selected projects and get in touch.",
    "a11y.skip": "Skip to content",
    "a11y.newtab": "(opens in a new tab)",
    "nav.label": "Main navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.achievements": "Achievements",
    "nav.contact": "Contact",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",
    "lang.label": "Language",
    "brand.name": "Mohammad Najjar",
    "hero.name": "Mohammad Najjar",
    "hero.role": "Software Developer",
    "hero.intro": "I build responsive web projects and publish them online.",
    "hero.location": "Based in Yatta, Palestine",
    "hero.cta.projects": "See my projects",
    "hero.cta.contact": "Get in touch",
    "about.title": "About me",
    "about.p1": "I'm Mohammad Najjar, a software developer from Yatta, Palestine. I build websites and web projects with HTML, CSS and JavaScript.",
    "about.p2": "Four of the projects on this page have live demos you can open right now.",
    "about.location": "Location",
    "about.email": "Email",
    "about.github": "GitHub",
    "about.locationValue": "Yatta, Palestine",
    "skills.title": "Skills",
    "skills.intro": "The technologies behind this portfolio and its projects.",
    "skills.languages": "Languages",
    "skills.tools": "Tools",
    "skills.practices": "Practices",
    "skills.responsive": "Responsive design",
    "skills.accessibility": "Accessibility",
    "skills.bilingual": "Bilingual interfaces (EN/AR)",
    "projects.title": "Featured projects",
    "projects.intro": "Six selected projects.",
    "projects.code": "View code",
    "projects.demo": "Live demo",
    "projects.details": "Details",
    "projects.type.web": "Web project",
    "projects.type.replit": "Replit project",
    "projects.type.repo": "Repository",
    "projects.aistudio.title": "AI-Social-Studio",
    "projects.aistudio.description": "A project originally built on Replit and now kept as a GitHub repository.",
    "projects.brewhouse.title": "Brew House",
    "projects.brewhouse.description": "Brew House is a coffee-themed website. Open the live demo to explore it.",
    "projects.dashly.title": "Dashly",
    "projects.dashly.description": "Dashly is a web project hosted on GitHub Pages. Open the live demo or browse the code.",
    "projects.mohammadnajjar.title": "mohammadnajjar",
    "projects.mohammadnajjar.description": "A personal repository on my GitHub profile.",
    "projects.skilldna.title": "SkillDNA",
    "projects.skilldna.description": "SkillDNA is a web project available online at skilldna.online.",
    "projects.taskflow.title": "TaskFlow",
    "projects.taskflow.description": "TaskFlow is a web project hosted on GitHub Pages. Open the live demo or browse the code.",
    "modal.close": "Close",
    "modal.repo": "Repository",
    "modal.demo": "Live demo",
    "achievements.title": "Achievements",
    "achievements.intro": "Numbers taken directly from this portfolio.",
    "achievements.repos": "Featured projects",
    "achievements.demos": "Projects with live demos",
    "achievements.langs": "Languages on this site",
    "contact.title": "Contact",
    "contact.intro": "Have a question or a project in mind? Send a message and it opens in your email app.",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send message",
    "form.err.name": "Enter your name.",
    "form.err.email": "Enter a valid email address.",
    "form.err.message": "Write a message of at least 10 characters.",
    "form.ok": "Opening your email app with your message…",
    "form.fallback": "If no email app opens, write to me directly at the address on the left.",
    "form.subject": "Portfolio message from {name}",
    "footer.rights": "© {year} Mohammad Najjar. All rights reserved.",
    "footer.built": "Built with HTML, CSS and JavaScript.",
    "footer.top": "Back to top",
    "footer.nav": "Footer navigation"
  },
  "ar": {
    "meta.title": "محمد نجار | مطوّر برمجيات",
    "meta.description": "الموقع الشخصي لمحمد نجار، مطوّر برمجيات من يطا، فلسطين. تصفّح ستة مشاريع مختارة وتواصل معي.",
    "a11y.skip": "انتقل إلى المحتوى",
    "a11y.newtab": "(يفتح في تبويب جديد)",
    "nav.label": "التنقل الرئيسي",
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.achievements": "الإنجازات",
    "nav.contact": "تواصل",
    "nav.menuOpen": "فتح القائمة",
    "nav.menuClose": "إغلاق القائمة",
    "lang.label": "اللغة",
    "brand.name": "محمد نجار",
    "hero.name": "محمد نجار",
    "hero.role": "مطوّر برمجيات",
    "hero.intro": "أبني مشاريع ويب متجاوبة وأنشرها على الإنترنت.",
    "hero.location": "أقيم في يطا، فلسطين",
    "hero.cta.projects": "شاهد مشاريعي",
    "hero.cta.contact": "تواصل معي",
    "about.title": "نبذة عني",
    "about.p1": "أنا محمد نجار، مطوّر برمجيات من يطا، فلسطين. أبني مواقع ومشاريع ويب باستخدام HTML وCSS وJavaScript.",
    "about.p2": "أربعة من المشاريع في هذه الصفحة لها عروض مباشرة يمكنك فتحها الآن.",
    "about.location": "الموقع",
    "about.email": "البريد الإلكتروني",
    "about.github": "GitHub",
    "about.locationValue": "يطا، فلسطين",
    "skills.title": "المهارات",
    "skills.intro": "التقنيات التي بُني بها هذا الموقع ومشاريعه.",
    "skills.languages": "اللغات",
    "skills.tools": "الأدوات",
    "skills.practices": "الممارسات",
    "skills.responsive": "التصميم المتجاوب",
    "skills.accessibility": "إمكانية الوصول",
    "skills.bilingual": "واجهات ثنائية اللغة (EN/AR)",
    "projects.title": "مشاريع مميزة",
    "projects.intro": "ستة مشاريع مختارة.",
    "projects.code": "عرض الكود",
    "projects.demo": "عرض مباشر",
    "projects.details": "التفاصيل",
    "projects.type.web": "مشروع ويب",
    "projects.type.replit": "مشروع Replit",
    "projects.type.repo": "مستودع",
    "projects.aistudio.title": "AI-Social-Studio",
    "projects.aistudio.description": "مشروع أُنشئ في الأصل على Replit، وهو الآن محفوظ كمستودع على GitHub.",
    "projects.brewhouse.title": "Brew House",
    "projects.brewhouse.description": "Brew House موقع بطابع القهوة. افتح العرض المباشر لاستكشافه.",
    "projects.dashly.title": "Dashly",
    "projects.dashly.description": "Dashly مشروع ويب مستضاف على GitHub Pages. افتح العرض المباشر أو تصفّح الكود.",
    "projects.mohammadnajjar.title": "mohammadnajjar",
    "projects.mohammadnajjar.description": "مستودع شخصي على حسابي في GitHub.",
    "projects.skilldna.title": "SkillDNA",
    "projects.skilldna.description": "SkillDNA مشروع ويب متاح على الإنترنت عبر skilldna.online.",
    "projects.taskflow.title": "TaskFlow",
    "projects.taskflow.description": "TaskFlow مشروع ويب مستضاف على GitHub Pages. افتح العرض المباشر أو تصفّح الكود.",
    "modal.close": "إغلاق",
    "modal.repo": "المستودع",
    "modal.demo": "عرض مباشر",
    "achievements.title": "الإنجازات",
    "achievements.intro": "أرقام مأخوذة مباشرة من هذا الموقع.",
    "achievements.repos": "مشاريع مميزة",
    "achievements.demos": "مشاريع لها عروض مباشرة",
    "achievements.langs": "لغات في هذا الموقع",
    "contact.title": "التواصل",
    "contact.intro": "لديك سؤال أو فكرة مشروع؟ أرسل رسالة وستُفتح في تطبيق البريد لديك.",
    "form.name": "الاسم",
    "form.email": "البريد الإلكتروني",
    "form.message": "الرسالة",
    "form.send": "إرسال الرسالة",
    "form.err.name": "أدخل اسمك.",
    "form.err.email": "أدخل بريدًا إلكترونيًا صحيحًا.",
    "form.err.message": "اكتب رسالة لا تقل عن 10 أحرف.",
    "form.ok": "جارٍ فتح تطبيق البريد برسالتك…",
    "form.fallback": "إذا لم يُفتح تطبيق البريد، راسلني مباشرة على العنوان الظاهر في الجانب.",
    "form.subject": "رسالة من الموقع الشخصي من {name}",
    "footer.rights": "© {year} محمد نجار. جميع الحقوق محفوظة.",
    "footer.built": "بُني باستخدام HTML وCSS وJavaScript.",
    "footer.top": "العودة إلى الأعلى",
    "footer.nav": "التنقل في التذييل"
  }
};
  const KEY = 'portfolio-lang', EMAIL = 'mohammadreyad2011@gmail.com';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  let lang = 'en'; // English is always the default; browser language is ignored.
  try { const s = localStorage.getItem(KEY); if (DICT[s]) lang = s; } catch (e) {}

  const t = (k, v = {}) => (DICT[lang][k] ?? DICT.en[k] ?? k).replace(/\{(\w+)\}/g, (m, n) => v[n] ?? m);

  function apply(root = document) {
    const year = new Date().getFullYear();
    $$('[data-i18n]', root).forEach(el => { el.textContent = t(el.dataset.i18n, { year }); }); // textContent: no HTML injection
    $$('[data-i18n-attr]', root).forEach(el => el.dataset.i18nAttr.split(';').forEach(p => {
      const [a, k] = p.split(':'); el.setAttribute(a, t(k));
    }));
  }

  const menuBtn = $('#menuBtn'), nav = $('#nav');
  function syncMenu() {
    const open = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', t(open ? 'nav.menuClose' : 'nav.menuOpen'));
  }
  menuBtn.addEventListener('click', () => { nav.classList.toggle('open'); syncMenu(); });
  nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); syncMenu(); } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); syncMenu(); menuBtn.focus(); } });

  function setLang(l, persist) {
    if (!DICT[l]) return;
    lang = l;
    const h = document.documentElement;
    h.lang = l; h.dir = l === 'ar' ? 'rtl' : 'ltr';
    if (persist) { try { localStorage.setItem(KEY, l); } catch (e) {} }
    document.title = t('meta.title');
    $('meta[name="description"]').content = t('meta.description');
    $('meta[property="og:title"]').content = t('meta.title');
    $('meta[property="og:description"]').content = t('meta.description');
    $('meta[property="og:locale"]').content = l === 'ar' ? 'ar_AR' : 'en_US';
    $('meta[property="og:locale:alternate"]').content = l === 'ar' ? 'en_US' : 'ar_AR';
    apply();
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
    syncMenu();
    $$('#form [aria-invalid="true"]').forEach(check);
  }
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang, true)));

  // Contact form (no backend: opens the visitor's email app)
  const form = $('#form');
  const rules = {
    name: v => v.trim().length > 0,
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    message: v => v.trim().length >= 10
  };
  function check(f) {
    const ok = rules[f.name](f.value);
    $('#err-' + f.name).textContent = ok ? '' : t('form.err.' + f.name);
    f.setAttribute('aria-invalid', String(!ok));
    return ok;
  }
  $$('input, textarea', form).forEach(f => f.addEventListener('input', () => { if (f.getAttribute('aria-invalid') === 'true') check(f); }));
  const toast = $('#toast'); let timer;
  function notify(msg) {
    toast.textContent = msg; toast.classList.add('show');
    clearTimeout(timer); timer = setTimeout(() => toast.classList.remove('show'), 5000);
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = $$('input, textarea', form);
    const bad = fields.filter(f => !check(f));
    if (bad.length) { bad[0].focus(); return; }
    const { name, email, message } = Object.fromEntries(fields.map(f => [f.name, f.value.trim()]));
    const subject = t('form.subject', { name });
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n\n' + name + ' <' + email + '>')}`;
    notify(t('form.ok'));
    form.reset(); fields.forEach(f => f.removeAttribute('aria-invalid'));
  });

  // Project details modal
  const dlg = $('#modal');
  $$('.details').forEach(b => b.addEventListener('click', () => {
    const c = b.closest('.card'), id = c.dataset.project;
    $('#m-title').dataset.i18n = `projects.${id}.title`;
    $('#m-desc').dataset.i18n = `projects.${id}.description`;
    const repo = $('#m-repo'), demo = $('#m-demo');
    $('#m-repo-row').hidden = !c.dataset.repo;
    if (c.dataset.repo) { repo.href = c.dataset.repo; repo.textContent = c.dataset.repo; }
    $('#m-demo-row').hidden = !c.dataset.demo;
    if (c.dataset.demo) { demo.href = c.dataset.demo; demo.textContent = c.dataset.demo; }
    apply(dlg);
    if (typeof dlg.showModal === 'function') dlg.showModal();
  }));
  $('#m-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  setLang(lang, false);
})();
