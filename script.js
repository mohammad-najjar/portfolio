(() => {
  'use strict';
  const DICT = {
  "en": {
    "meta.title": "Mohammad Najjar | Software Developer",
    "meta.description": "Portfolio of Mohammad Najjar, a software developer from Yatta, Palestine. Browse five selected projects and get in touch.",
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
    "skills.intro": "Technologies used in the projects on this page.",
    "skills.languages": "Frontend development",
    "skills.tools": "Tools and platforms",
    "skills.practices": "Practices",
    "skills.responsive": "Responsive design",
    "skills.accessibility": "Accessibility",
    "skills.bilingual": "Bilingual interfaces (EN/AR)",
    "projects.title": "Featured projects",
    "projects.intro": "Five selected projects.",
    "projects.code": "View code",
    "projects.demo": "Live demo",
    "projects.details": "Details",
    "projects.type.demo": "Front-end demo",
    "projects.type.web": "Live website",
    "projects.type.source": "This website's source",
    "projects.status.demo": "Portfolio demo (fictional data)",
    "projects.status.live": "Live website",
    "projects.status.source": "Published on GitHub Pages",
    "projects.brewhouse.title": "Brew House",
    "projects.brewhouse.description": "A fictional coffee shop website with a filterable menu and a demo order panel. No real orders or payments.",
    "projects.brewhouse.details": "Brew House is a fictional specialty coffee shop built to practise front-end work. You can browse a menu of six drinks, filter it by hot or iced coffee, add items to an order panel and review the total.",
    "projects.brewhouse.limits": "Demo only: orders are not sent anywhere, no payment is taken, and the testimonials, address and phone number are sample content.",
    "projects.brewhouse.stack": "HTML, CSS, JavaScript",
    "projects.dashly.title": "Dashly",
    "projects.dashly.description": "A front-end e-commerce analytics dashboard with charts, an orders table and an add-product form. All data is fictional.",
    "projects.dashly.details": "Dashly is a front-end demo of an e-commerce analytics dashboard. It has sections for an overview with a revenue chart (daily, weekly, monthly), sales by category, recent orders, order details and an add-product form.",
    "projects.dashly.limits": "Every figure, name and email is fictional. Nothing is connected to a real store.",
    "projects.dashly.stack": "HTML, CSS, JavaScript",
    "projects.mohammadnajjar.title": "mohammadnajjar",
    "projects.mohammadnajjar.description": "The source code of this portfolio website: static HTML, CSS and JavaScript with English and Arabic support.",
    "projects.mohammadnajjar.details": "This is the source code of this portfolio website. It is a static site made of HTML, CSS and JavaScript, with English and Arabic versions, a project details dialog and a contact form.",
    "projects.mohammadnajjar.limits": "This is a website repository, not a standalone application. The contact form opens your email app; it does not send messages by itself.",
    "projects.mohammadnajjar.stack": "HTML, CSS, JavaScript",
    "projects.skilldna.title": "SkillDNA",
    "projects.skilldna.description": "A short skill-discovery questionnaire: 10 questions, about 3 minutes, no account required. Available in English and Arabic.",
    "projects.skilldna.details": "SkillDNA is a short questionnaire that helps visitors reflect on the skills they show in the way they think, create, communicate and solve problems. It has 10 questions, takes about 3 minutes and needs no account.",
    "projects.skilldna.limits": "It is a self-reflection tool. No scientific validation or assessment accuracy is claimed. The source code is not public.",
    "projects.skilldna.stack": "",
    "projects.taskflow.title": "TaskFlow",
    "projects.taskflow.description": "A front-end task manager with a dashboard, kanban board, calendar and dark theme. Data is saved in your browser only.",
    "projects.taskflow.details": "TaskFlow is a front-end task manager. It has an overview dashboard, a task list with search, filters and sorting, a kanban board, a monthly calendar, a completed view and light and dark themes.",
    "projects.taskflow.limits": "A demo user and sample tasks are shown on first visit, labelled as demo data. Tasks are saved in your browser's localStorage only: there is no sync, account or backup, and clearing site data erases them. Drag-and-drop is for mouse devices; a status menu is provided for touch.",
    "projects.taskflow.stack": "HTML, CSS, JavaScript",
    "modal.close": "Close",
    "modal.repo": "Repository",
    "modal.demo": "Live demo",
    "modal.status": "Status",
    "modal.stack": "Technologies",
    "modal.limits": "Notes and limitations",
    "achievements.title": "Achievements",
    "achievements.intro": "Counts taken directly from this page.",
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
    "meta.description": "الموقع الشخصي لمحمد نجار، مطوّر برمجيات من يطا، فلسطين. تصفّح خمسة مشاريع مختارة وتواصل معي.",
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
    "skills.intro": "التقنيات المستخدمة في المشاريع المعروضة في هذه الصفحة.",
    "skills.languages": "تطوير الواجهات الأمامية",
    "skills.tools": "الأدوات والمنصات",
    "skills.practices": "الممارسات",
    "skills.responsive": "التصميم المتجاوب",
    "skills.accessibility": "إمكانية الوصول",
    "skills.bilingual": "واجهات ثنائية اللغة (EN/AR)",
    "projects.title": "مشاريع مميزة",
    "projects.intro": "خمسة مشاريع مختارة.",
    "projects.code": "عرض الكود",
    "projects.demo": "عرض مباشر",
    "projects.details": "التفاصيل",
    "projects.type.demo": "مشروع واجهة تجريبي",
    "projects.type.web": "موقع مباشر",
    "projects.type.source": "كود هذا الموقع",
    "projects.status.demo": "عرض تجريبي ضمن الأعمال (بيانات وهمية)",
    "projects.status.live": "موقع مباشر",
    "projects.status.source": "منشور على GitHub Pages",
    "projects.brewhouse.title": "Brew House",
    "projects.brewhouse.description": "موقع مقهى وهمي فيه قائمة قابلة للتصفية ولوحة طلب تجريبية. لا توجد طلبات حقيقية ولا مدفوعات.",
    "projects.brewhouse.details": "Brew House مقهى وهمي للقهوة المختصة، بُني لتدريب مهارات الواجهة الأمامية. يمكنك تصفّح قائمة من ستة مشروبات وتصفيتها بين الساخن والبارد، وإضافة العناصر إلى لوحة الطلب ومراجعة المجموع.",
    "projects.brewhouse.limits": "عرض تجريبي فقط: لا تُرسل الطلبات إلى أي جهة ولا يتم أي دفع، والآراء والعنوان ورقم الهاتف كلها محتوى تجريبي.",
    "projects.brewhouse.stack": "HTML, CSS, JavaScript",
    "projects.dashly.title": "Dashly",
    "projects.dashly.description": "لوحة تحليلات تجريبية لمتجر إلكتروني تضم مخططات وجدول طلبات ونموذج إضافة منتج. كل البيانات وهمية.",
    "projects.dashly.details": "Dashly عرض تجريبي لواجهة لوحة تحليلات لمتجر إلكتروني. فيه أقسام لنظرة عامة مع مخطط للإيرادات (يومي وأسبوعي وشهري)، والمبيعات حسب الفئة، وأحدث الطلبات، وتفاصيل الطلب، ونموذج لإضافة منتج.",
    "projects.dashly.limits": "كل الأرقام والأسماء والبريد الإلكتروني وهمية، ولا شيء مرتبط بمتجر حقيقي.",
    "projects.dashly.stack": "HTML, CSS, JavaScript",
    "projects.mohammadnajjar.title": "mohammadnajjar",
    "projects.mohammadnajjar.description": "كود المصدر لهذا الموقع: HTML وCSS وJavaScript ثابتة مع دعم للإنجليزية والعربية.",
    "projects.mohammadnajjar.details": "هذا هو كود المصدر لموقع الأعمال هذا. موقع ثابت مكوّن من HTML وCSS وJavaScript، بنسختين إنجليزية وعربية، ونافذة تفاصيل للمشاريع ونموذج تواصل.",
    "projects.mohammadnajjar.limits": "هذا مستودع موقع وليس تطبيقًا مستقلًا. نموذج التواصل يفتح تطبيق البريد لديك ولا يرسل الرسائل بنفسه.",
    "projects.mohammadnajjar.stack": "HTML, CSS, JavaScript",
    "projects.skilldna.title": "SkillDNA",
    "projects.skilldna.description": "استبيان قصير لاكتشاف المهارات: 10 أسئلة في نحو 3 دقائق، دون الحاجة إلى حساب. متاح بالإنجليزية والعربية.",
    "projects.skilldna.details": "SkillDNA استبيان قصير يساعد الزائر على التأمل في مهاراته من خلال طريقة تفكيره وإبداعه وتواصله وحلّه للمشكلات. يتكوّن من 10 أسئلة ويستغرق نحو 3 دقائق ولا يحتاج إلى حساب.",
    "projects.skilldna.limits": "أداة للتأمل الذاتي، ولا أدّعي أي اعتماد علمي أو دقة في التقييم. الكود المصدري غير منشور.",
    "projects.skilldna.stack": "",
    "projects.taskflow.title": "TaskFlow",
    "projects.taskflow.description": "مدير مهام بواجهة أمامية فيه لوحة نظرة عامة ولوحة كانبان وتقويم ووضع داكن. تُحفظ البيانات في متصفحك فقط.",
    "projects.taskflow.details": "TaskFlow مدير مهام بواجهة أمامية. يضم لوحة نظرة عامة، وقائمة مهام مع بحث وتصفية وترتيب، ولوحة كانبان، وتقويمًا شهريًا، وعرضًا للمهام المكتملة، ووضعين فاتح وداكن.",
    "projects.taskflow.limits": "يظهر مستخدم وبيانات تجريبية عند أول زيارة وهي موسومة كبيانات تجريبية. تُحفظ المهام في التخزين المحلي لمتصفحك فقط: لا مزامنة ولا حسابات ولا نسخ احتياطي، ومسح بيانات الموقع يحذفها. السحب والإفلات مخصص للفأرة، وتتوفر قائمة حالة للمس.",
    "projects.taskflow.stack": "HTML, CSS, JavaScript",
    "modal.close": "إغلاق",
    "modal.repo": "المستودع",
    "modal.demo": "عرض مباشر",
    "modal.status": "الحالة",
    "modal.stack": "التقنيات",
    "modal.limits": "ملاحظات وقيود",
    "achievements.title": "الإنجازات",
    "achievements.intro": "أعداد مأخوذة مباشرة من هذه الصفحة.",
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
    $('#m-desc').dataset.i18n = `projects.${id}.details`;
    $('#m-status').dataset.i18n = c.dataset.status;
    $('#m-stack').dataset.i18n = `projects.${id}.stack`;
    $('#m-limits').dataset.i18n = `projects.${id}.limits`;
    const repo = $('#m-repo'), demo = $('#m-demo');
    $('#m-repo-row').hidden = !c.dataset.repo;
    if (c.dataset.repo) { repo.href = c.dataset.repo; repo.textContent = c.dataset.repo; }
    $('#m-demo-row').hidden = !c.dataset.demo;
    if (c.dataset.demo) { demo.href = c.dataset.demo; demo.textContent = c.dataset.demo; }
    apply(dlg);
    $('#m-stack-row').hidden = !$('#m-stack').textContent;
    if (typeof dlg.showModal === 'function') dlg.showModal();
  }));
  $('#m-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  // Highlight the nav link of the section in view
  if ('IntersectionObserver' in window) {
    const links = $$('#nav a');
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => (a.getAttribute('href') === '#' + e.target.id) ? a.setAttribute('aria-current','true') : a.removeAttribute('aria-current'));
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(s => io.observe(s));
  }

  setLang(lang, false);
})();
