/**
 * Portfolio — Andrian Wijaya · Data Analyst
 * script.js
 */
'use strict';

/* =============================================
   PROJECT DATA — full descriptions for modal
   ============================================= */
const PROJECTS = {
  '01': {
    title:   'Adventure Works Bike Company',
    eyebrow: 'Power BI Dashboard',
    tags:    ['Power BI', 'DAX', 'Power Query', 'KPI Cards'],
    desc:    'Power BI dashboard for Adventure Works Bike Shop analyzing sales performance, customer segmentation, and product detail across 2020–2022. Built with DAX measures, Power Query, and interactive visuals including KPI cards, trend charts, and donut charts.',
    link:    { label: 'View on GitHub', url: 'https://github.com/s-AVE/AdventureWorksCompany' },
    link2:   { label: 'View Presentation', url: 'https://drive.google.com/file/d/1QMCVEVgeFBn6A2lgMJGXR0v4f4uFuVMS/view?usp=sharing' }, // ← paste your presentation URL here
    img:     'assets/project-01.png',
  },
  '02': {
    title:   'Financial Dashboard',
    eyebrow: 'Power BI Dashboard',
    tags:    ['Power BI', 'Financial Analysis', 'Budget Variance', 'Power Query'],
    desc:    'This financial project dashboard provides a comprehensive overview of actual income and expenses compared to the allocated budget from 2019–2024. It consolidates data from both transaction and budget records to monitor financial performance across various projects and account categories. Key indicators such as budget variance, budget utilization rate, and monthly trends enable quick identification of underperforming income sources and over- or under-spending areas. The dashboard also supports project-level analysis, offering insights into revenue and cost efficiency. With interactive visuals and variance breakdowns, it serves as a valuable tool for informed financial decision-making and strategic budget management.',
    link:    { label: 'View on GitHub', url: 'https://github.com/s-AVE/Financial-Dashboard' },
    link2:   { label: 'View Presentation', url: '' }, // ← paste your presentation URL here
    img:     'assets/project-02.png',
  },
  '03': {
    title:   'PPG M&E Visitasi Calculation',
    eyebrow: 'Microsoft Excel',
    tags:    ['Excel', 'M&E', 'PPG', 'Education'],
    desc:    'This Excel workbook is the result of data processing used as input for monitoring and evaluation reports across individual PPG-hosting institutions (LPTK) visited on-site. It contains 4 sheets, each serving a distinct purpose: Sheet 1 calculates institutional capacity, covering study program accreditation, curriculum, and PPG socialization conducted by the LPTK. Sheet 2 covers the educational process — all activities carried out by the LPTK related to learning, assessment, and PPG management. Sheet 3 evaluates DTK Performance across key dimensions involving lecturers, supervising teachers, and education staff. Sheet 4 presents the impact evaluation of PPG on the school unit ecosystem and the education department. A final summary sheet consolidates the component scores from all evaluation dimensions.',
    link:    { label: 'View Spreadsheet', url: 'https://docs.google.com/spreadsheets/d/1S57F2rrX9okcUMJiEQBxTyAeD0PK2oEv9PkakxDlNPo/edit?usp=sharing' },
    img:     'assets/project-03.png',
  },
  '04': {
    title:   'MySQL Assignment Project',
    eyebrow: 'SQL · MySQL',
    tags:    ['SQL', 'MySQL', 'Window Functions', 'CTEs', 'Advanced Queries'],
    desc:    'The structure and flow of the SQL problems follow the curriculum designed by the Maven Analytics team, emphasizing practical, real-world applications of advanced SQL skills including joins, subqueries, window functions, common table expressions (CTEs), recursive CTEs, conditional aggregation, function by data type, and implementation for data analytics.',
    link:    { label: 'View on GitHub', url: 'https://github.com/s-AVE/MySQL-Assignment' },
    img:     'assets/project-04.png',
  },
  '05': {
    title:   'MySQL Sports Analysis Project',
    eyebrow: 'SQL · MySQL',
    tags:    ['SQL', 'MySQL', 'Sports Analytics', 'Advanced Aggregation'],
    desc:    'You have access to decades worth of data including player statistics like schools attended, salaries, teams played for, height and weight, and more. This project uses advanced SQL querying techniques to track how player statistics have changed over time and across different teams in the league.',
    link:    { label: 'View on GitHub', url: 'https://github.com/s-AVE/SQL-project-analysis' },
    link2:   { label: 'View Presentation', url: 'https://drive.google.com/file/d/1HlOmTDGgvdFjq0jB2SSO1xof6wfVr956/view?usp=sharing' },
    img:     'assets/project-05.png',
  },
  '06': {
    title:   'M&E Report — School Counseling Services',
    eyebrow: 'Analysis Report · Ministry of Education',
    tags:    ['M&E', 'Analysis Report', 'Education', 'Teacher Training'],
    desc:    'This report presents the results of monitoring and evaluation of non-degree technical training for educators, focusing on School Counseling Services to Support 21st-Century Student Development. It covers participant satisfaction levels across various aspects of program delivery, as well as observational results regarding the implementation of training activities. The evaluation findings are expected to serve as learning material and input for improving the quality of future training programs.',
    link:    { label: 'View Report', url: 'https://drive.google.com/file/d/1RGs1C9gyQ_GBABfan7qRygGDowwCGqRL/view?usp=drive_link' },
    img:     'assets/project-06.png',
  },
  '07': {
    title:   'M&E Report — AI-Integrated Literacy & Numeracy',
    eyebrow: 'Analysis Report · Ministry of Education',
    tags:    ['M&E', 'Analysis Report', 'AI in Education', 'Pre-Post Test'],
    desc:    'This report presents monitoring and evaluation results of non-degree teacher training with a focus on: Reaction (Level 1) — participant satisfaction across four key aspects (Participant Reception, Learning, Assessment, and Training Management); Observation — verification of session plan implementation and process quality in classrooms/workshops; and Learning (Level 2) — measurement of learning outcomes through Pre–Post Test scores. The analysis includes participant group segmentation for Lecturers and Supervising Teachers, enabling more targeted and operational recommendations.',
    link:    { label: 'View Report', url: 'https://drive.google.com/file/d/1b5rdyc_YBjAYODaUi2CaU9e2tM3ApVNk/view?usp=drive_link' },
    img:     'assets/project-07.png',
  },
  '08': {
    title:   'PPG 4-Level M&E Survey Analysis',
    eyebrow: 'Google Looker Studio',
    tags:    ['Looker Studio', 'Survey Analysis', 'PPG 2024', 'M&E'],
    desc:    'This dashboard presents monitoring and evaluation results through a survey covering learning-to-behavior levels by PPG (Teacher Certification Program) participants for prospective teachers in Wave 2 of 2024, who completed their studies in 2025. Scores are given on a scale of 1 (Very Dissatisfied) to 5 (Very Satisfied). As a note, the number of students who completed the survey may affect how well the analysis results represent conditions at each LPTK (teacher training institution).',
    link:    { label: 'View Dashboard', url: 'https://datastudio.google.com/u/0/reporting/e1e56b32-b0c2-4dc9-8e57-a4bcc0229d34' },
    img:     'assets/project-08.png',
  },
};

/* =============================================
   CURSOR
   ============================================= */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursorTrail');
  if (!cursor || !trail) return;
  let mx = -100, my = -100, tx = -100, ty = -100, raf;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  }, { passive: true });
  const loop = () => {
    tx += (mx - tx) * 0.14; ty += (my - ty) * 0.14;
    trail.style.left = tx + 'px'; trail.style.top = ty + 'px';
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(loop);
  });
})();

/* =============================================
   NAV
   ============================================= */
(function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    updateActive();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle && toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links && links.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      links.classList.remove('open');
      toggle && toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  function updateActive() {
    const sections = document.querySelectorAll('section[id]');
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.scroll === cur));
  }
})();

/* =============================================
   SMOOTH SCROLL
   ============================================= */
document.querySelectorAll('[data-scroll]').forEach(el => {
  el.addEventListener('click', e => {
    const t = document.getElementById(el.dataset.scroll);
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* =============================================
   INTERSECTION OBSERVERS
   ============================================= */
(function initObs() {
  // Hero reveals immediately
  document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 120);
  });

  // General reveals
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal-up:not(.hero .reveal-up)').forEach(el => ro.observe(el));

  // Skill bars
  const so = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => { e.target.style.width = e.target.dataset.width + '%'; }, 200);
        so.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.skill-fill').forEach(el => so.observe(el));

  // Card fade-in
  const co = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)';
        co.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.card, .timeline-item').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    co.observe(el);
  });
})();

/* =============================================
   COUNTERS
   ============================================= */
(function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, target = +el.dataset.target, suffix = el.dataset.suffix || '';
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / 1400, 1), ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (p < 1) requestAnimationFrame(tick); else el.textContent = target + suffix;
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter-num').forEach(el => obs.observe(el));
})();

/* =============================================
   PROJECT PAGINATION + FILTER
   ============================================= */
const PER_PAGE = 6;
let currentPage   = 1;
let activeFilter  = 'all';
let allCards      = [];   // all article.project-card
let filteredCards = [];   // after filter applied

function getFilteredCards() {
  return allCards.filter(c =>
    activeFilter === 'all' || c.dataset.category === activeFilter
  );
}

function renderPage(page) {
  currentPage = page;
  const start = (page - 1) * PER_PAGE;
  const end   = start + PER_PAGE;

  allCards.forEach(c => c.classList.add('page-hidden'));
  filteredCards.slice(start, end).forEach(c => c.classList.remove('page-hidden'));

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(filteredCards.length / PER_PAGE);
  const prev = document.getElementById('pagePrev');
  const next = document.getElementById('pageNext');
  const dots = document.getElementById('pageDots');
  const wrap = document.getElementById('projectsPagination');

  if (!prev || !next || !dots) return;

  // Hide pagination if only 1 page
  if (wrap) wrap.style.display = totalPages <= 1 ? 'none' : 'flex';

  prev.disabled = currentPage === 1;
  next.disabled = currentPage >= totalPages;

  dots.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const dot = document.createElement('button');
    dot.className = 'page-dot' + (i === currentPage ? ' active' : '');
    dot.setAttribute('aria-label', `Page ${i}`);
    dot.addEventListener('click', () => renderPage(i));
    dots.appendChild(dot);
  }
}

(function initProjectSystem() {
  allCards = Array.from(document.querySelectorAll('.project-card'));
  filteredCards = allCards;

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter  = btn.dataset.filter;
      filteredCards = getFilteredCards();
      renderPage(1);
    });
  });

  // Pagination arrows
  document.getElementById('pagePrev') &&
    document.getElementById('pagePrev').addEventListener('click', () => renderPage(currentPage - 1));
  document.getElementById('pageNext') &&
    document.getElementById('pageNext').addEventListener('click', () => renderPage(currentPage + 1));

  // Initial render
  renderPage(1);

  // Card click → modal
  allCards.forEach(card => {
    const openModal = () => openProjectModal(card.dataset.project);
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); } });
  });
})();

/* =============================================
   PROJECT MODAL
   ============================================= */
function openProjectModal(id) {
  const data = PROJECTS[id];
  if (!data) return;
  const overlay = document.getElementById('modalOverlay');
  const body    = document.getElementById('modalBody');
  if (!overlay || !body) return;

  const tagsHTML  = data.tags.map(t => `<span class="badge badge-outline">${t}</span>`).join('');
  const link2HTML = (data.link2 && data.link2.url)
    ? `<a href="${data.link2.url}" target="_blank" rel="noopener noreferrer" class="modal-link modal-link-ghost">${data.link2.label}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg></a>`
    : '';

  body.innerHTML = `
    <div class="modal-img-banner">
      <img src="${data.img}" alt="${data.title}" onerror="this.parentElement.style.display='none'" />
    </div>
    <div class="modal-content">
      <p class="modal-eyebrow">${data.eyebrow}</p>
      <h2 class="modal-title" id="modalTitle">${data.title}</h2>
      <div class="modal-tags">${tagsHTML}</div>
      <p class="modal-desc">${data.desc}</p>
      <div class="modal-actions">
        <a href="${data.link.url}" target="_blank" rel="noopener noreferrer" class="modal-link">${data.link.label}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg></a>
        ${link2HTML}
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Scroll to top of modal
  const modalCard = document.getElementById('modalCard');
  if (modalCard) modalCard.scrollTop = 0;
}

(function initModal() {
  const overlay  = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay) return;

  const close = () => { overlay.classList.remove('open'); document.body.style.overflow = ''; };
  closeBtn && closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });
})();

window.openProjectModal = openProjectModal;

/* =============================================
   CONTACT FORM
   ============================================= */
(function initForm() {
  const submitBtn = document.getElementById('submitBtn');
  const formNote  = document.getElementById('formNote');
  if (!submitBtn) return;
  const f = {
    name:    document.getElementById('inputName'),
    email:   document.getElementById('inputEmail'),
    subject: document.getElementById('inputSubject'),
    message: document.getElementById('inputMessage'),
  };
  const validate = () => {
    if (!f.name.value.trim())                             return 'Name cannot be empty.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim())) return 'Please enter a valid email address.';
    if (!f.subject.value.trim())                          return 'Subject cannot be empty.';
    if (f.message.value.trim().length < 20)               return 'Message must be at least 20 characters.';
    return null;
  };
  submitBtn.addEventListener('click', () => {
    const err = validate();
    if (err) { showNote(err, 'error'); return; }
    const btnText = submitBtn.querySelector('.btn-text');
    submitBtn.disabled = true; btnText.textContent = 'Sending...';
    setTimeout(() => {
      submitBtn.disabled = false; btnText.textContent = 'Send Message';
      Object.values(f).forEach(el => { el.value = ''; });
      showNote('✓ Message sent! I will get back to you soon.', 'success');
      showToast('Message sent successfully!');
    }, 1500);
  });
  function showNote(msg, type) {
    formNote.textContent = msg; formNote.className = 'form-note ' + type;
    setTimeout(() => { formNote.textContent = ''; formNote.className = 'form-note'; }, 5000);
  }
})();

/* =============================================
   TOAST
   ============================================= */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
window.showToast = showToast;

/* =============================================
   BACK TO TOP
   ============================================= */
document.getElementById('backTop') &&
  document.getElementById('backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* =============================================
   CONSOLE
   ============================================= */
console.log('%c Andrian Wijaya — Data Analyst Portfolio ', 'background:#c8a97e;color:#0a0a0f;font-family:monospace;font-weight:bold;padding:8px 16px;border-radius:4px;');
console.log('%c Power BI · Excel · SQL · Looker Studio ', 'color:#c8a97e;font-family:monospace;font-size:11px;');
