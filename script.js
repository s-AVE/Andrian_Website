/**
 * Portfolio — Andrian Wijaya · Data Analyst
 */
'use strict';

/* ---------- Project details shown in the dialog ---------- */
const PROJECTS = {
  '01': {
    title:  'Teacher Performance Analysis',
    kicker: 'Looker Studio · Case study',
    tags:   ['Looker Studio', 'Google Sheets', 'Performance Analysis'],
    img:    'assets/teacher_performance_analysis.png',
    desc:   'An academic operations case study analyzing teacher performance for Term 2 of the 2025/2026 academic year: 24 teachers across two branches (Jayapura and Purbalingga), measured on 16 metrics in five categories — Curriculum Implementation, Professionalism & Contribution, Parent Communication & Empathy, Team Coordination, and School OKR. I handled the whole pipeline independently, from data cleaning and metric calculation to dashboard design and insights.',
    links:  [{ label: 'Open dashboard', url: 'https://lookerstudio.google.com/reporting/68b9252b-a368-47ea-a0f0-03ad10c1818f/page/bLy0F' }],
  },
  '02': {
    title:  'Maven Market Sales Performance',
    kicker: 'Power BI dashboard',
    tags:   ['Power BI', 'DAX', 'Power Query', 'KPI Cards'],
    img:    'assets/maven_market.png',
    desc:   'A Power BI dashboard that looks at business performance from three angles: overall sales health, product portfolio efficiency, and customer and store behavior.',
    links:  [
      { label: 'View on GitHub', url: 'https://github.com/s-AVE/MavenMarketDashboard/tree/main' },
      { label: 'View presentation', url: 'https://drive.google.com/file/d/1IVkF6uMBL4_5o6Nk7sShLT1ohLwlm4YP/view?usp=sharing' },
    ],
  },
  '03': {
    title:  'Adventure Works Sales Dashboard',
    kicker: 'Power BI dashboard',
    tags:   ['Power BI', 'DAX', 'Power Query', 'KPI Cards'],
    img:    'assets/adventure_works.png',
    desc:   'A Power BI dashboard for the Adventure Works bike shop covering sales performance, customer segmentation and product detail from 2020 to 2022, built with DAX measures, Power Query and interactive visuals such as KPI cards and trend charts.',
    links:  [
      { label: 'View on GitHub', url: 'https://github.com/s-AVE/AdventureWorksCompany' },
      { label: 'View presentation', url: 'https://drive.google.com/file/d/1QMCVEVgeFBn6A2lgMJGXR0v4f4uFuVMS/view?usp=sharing' },
    ],
  },
  '04': {
    title:  'Financial Budget vs Actual',
    kicker: 'Power BI dashboard',
    tags:   ['Power BI', 'Financial Analysis', 'Budget Variance', 'Power Query'],
    img:    'assets/financial_dashboard.png',
    desc:   'Compares actual income and expenses with the allocated budget from 2019 to 2024, combining transaction and budget records. Budget variance, utilization rate and monthly trends make it quick to spot underperforming income sources and over- or under-spending, down to project and account level.',
    links:  [{ label: 'View on GitHub', url: 'https://github.com/s-AVE/Financial-Dashboard' }],
  },
  '05': {
    title:  'PPG Site Visit Scoring Model',
    kicker: 'Excel · Ministry of Education',
    tags:   ['Excel', 'M&E', 'PPG', 'Education'],
    img:    'assets/visitasi2025.png',
    desc:   'The Excel workbook behind the monitoring and evaluation reports for teacher training institutions (LPTK) visited on site. Four sheets score each evaluation dimension — institutional capacity (accreditation, curriculum, PPG socialization), the education process (learning, assessment and PPG management), lecturer, supervising teacher and staff performance, and the impact of PPG on schools and local education offices. A summary sheet combines them into one score per component.',
    links:  [{ label: 'Open spreadsheet', url: 'https://docs.google.com/spreadsheets/d/1S57F2rrX9okcUMJiEQBxTyAeD0PK2oEv9PkakxDlNPo/edit?usp=sharing' }],
  },
  '06': {
    title:  'Advanced SQL Problem Set',
    kicker: 'SQL · MySQL',
    tags:   ['SQL', 'MySQL', 'Window Functions', 'CTEs'],
    img:    'assets/mysql-assignment.png',
    desc:   'A set of SQL problems following the Maven Analytics curriculum, focused on practical analytics work: joins, subqueries, window functions, common table expressions (including recursive CTEs), conditional aggregation and data-type functions.',
    links:  [{ label: 'View on GitHub', url: 'https://github.com/s-AVE/MySQL-Assignment' }],
  },
  '07': {
    title:  'Sports Player Trends in SQL',
    kicker: 'SQL · MySQL',
    tags:   ['SQL', 'MySQL', 'Sports Analytics', 'Aggregation'],
    img:    'assets/mysql-project.png',
    desc:   'Uses decades of player data — schools attended, salaries, teams, height and weight — and advanced SQL queries to track how player statistics changed over time and across teams.',
    links:  [
      { label: 'View on GitHub', url: 'https://github.com/s-AVE/SQL-project-analysis' },
      { label: 'View presentation', url: 'https://drive.google.com/file/d/1HlOmTDGgvdFjq0jB2SSO1xof6wfVr956/view?usp=sharing' },
    ],
  },
  '08': {
    title:  'Evaluation Report: School Counseling Training',
    kicker: 'Analysis report · Ministry of Education',
    tags:   ['M&E', 'Analysis Report', 'Teacher Training'],
    img:    'assets/monev-bk.png',
    desc:   'Monitoring and evaluation results for a non-degree technical training program for educators on school counseling services for 21st-century student development. Covers participant satisfaction across each part of program delivery plus observations of how the training was carried out, with recommendations to improve future programs.',
    links:  [{ label: 'Read the report', url: 'https://drive.google.com/file/d/1RGs1C9gyQ_GBABfan7qRygGDowwCGqRL/view?usp=drive_link' }],
  },
  '09': {
    title:  'Evaluation Report: AI-Integrated Literacy & Numeracy',
    kicker: 'Analysis report · Ministry of Education',
    tags:   ['M&E', 'Kirkpatrick', 'Pre/Post Test', 'AI in Education'],
    img:    'assets/monev-litnum.png',
    desc:   'Evaluation of a non-degree teacher training program using the Kirkpatrick model: Reaction (Level 1) — satisfaction across participant reception, learning, assessment and training management; Observation — whether session plans were delivered as designed; and Learning (Level 2) — pre/post test score gains. Results are split by lecturers and supervising teachers for more targeted recommendations.',
    links:  [{ label: 'Read the report', url: 'https://drive.google.com/file/d/1b5rdyc_YBjAYODaUi2CaU9e2tM3ApVNk/view?usp=drive_link' }],
  },
  '10': {
    title:  'PPG Survey Analysis: Learning to Behavior',
    kicker: 'Looker Studio · Ministry of Education',
    tags:   ['Looker Studio', 'Survey Analysis', 'PPG 2024', 'M&E'],
    img:    'assets/data-studio-4level-2025.png',
    desc:   'A dashboard of survey results from Wave 2 2024 PPG (teacher certification) participants who completed their studies in 2025, measuring outcomes from learning through to behavior on a 1–5 satisfaction scale, broken down by teacher training institution (LPTK). It notes where low response counts limit how representative an institution\'s results are.',
    links:  [{ label: 'Open dashboard', url: 'https://lookerstudio.google.com/reporting/e1e56b32-b0c2-4dc9-8e57-a4bcc0229d34' }],
  },
};

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- Mobile nav ---------- */
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
links.addEventListener('click', e => {
  if (e.target.closest('a')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
});

/* ---------- Highlight the current section in the nav ---------- */
const navLinks = [...links.querySelectorAll('a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));

/* ---------- Project dialog ---------- */
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const extIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="margin-left:8px"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>';

document.querySelectorAll('.project').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = PROJECTS[btn.dataset.project];
    if (!p) return;
    modalBody.innerHTML = `
      <img src="${esc(p.img)}" alt="Screenshot of ${esc(p.title)}" />
      <div class="modal-content">
        <p class="modal-kicker">${esc(p.kicker)}</p>
        <h2 id="modalTitle">${esc(p.title)}</h2>
        <p class="chips">${p.tags.map(t => `<span>${esc(t)}</span>`).join('')}</p>
        <p>${esc(p.desc)}</p>
        <div class="modal-actions">
          ${p.links.filter(l => l.url).map((l, i) => `<a class="btn ${i ? 'btn-secondary' : 'btn-primary'}" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}${extIcon}</a>`).join('')}
        </div>
      </div>`;
    modal.showModal();
    modal.scrollTop = 0;
  });
});
document.getElementById('modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });

/* ---------- Contact form (Formspree) ---------- */
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const v = id => document.getElementById(id).value.trim();
  const data = { name: v('inputName'), email: v('inputEmail'), subject: v('inputSubject'), message: v('inputMessage') };

  const err = !data.name ? 'Please enter your name.'
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? 'Please enter a valid email address.'
    : !data.subject ? 'Please add a subject.'
    : data.message.length < 20 ? 'Please write a message of at least 20 characters.'
    : null;
  if (err) { setNote(err, 'error'); return; }

  submitBtn.disabled = true; submitBtn.textContent = 'Sending…';
  try {
    const res = await fetch('https://formspree.io/f/maqvpkwl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) { form.reset(); setNote('Thanks! Your message was sent. I\'ll reply soon.', 'success'); }
    else setNote('Something went wrong. Please try again, or email me directly.', 'error');
  } catch {
    setNote('Connection error. Please try again, or email me directly.', 'error');
  } finally {
    submitBtn.disabled = false; submitBtn.textContent = 'Send message';
  }
});
function setNote(msg, type) { note.textContent = msg; note.className = 'form-note ' + type; }
