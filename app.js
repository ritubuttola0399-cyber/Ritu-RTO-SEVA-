// ── NAVBAR SCROLL ──────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── HAMBURGER MENU ─────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ── MULTI-STEP FORM ─────────────────────────────────────────
let currentStep = 1;
const totalSteps = 4;

function nextStep(step) {
  document.getElementById(`step${step}`).classList.remove('active');
  document.querySelector(`.form-step[data-step="${step}"]`).classList.remove('active');
  document.querySelector(`.form-step[data-step="${step}"]`).classList.add('done');

  currentStep = step + 1;
  if (currentStep <= totalSteps) {
    document.getElementById(`step${currentStep}`).classList.add('active');
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
  }
}

function prevStep(step) {
  document.getElementById(`step${step}`).classList.remove('active');
  document.querySelector(`.form-step[data-step="${step}"]`).classList.remove('active');

  currentStep = step - 1;
  document.getElementById(`step${currentStep}`).classList.add('active');
  document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('done');
  document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
}

function submitForm() {
  const appId = 'RTO-2025-' + Math.random().toString(36).substring(2, 7).toUpperCase();
  document.getElementById('appId').textContent = appId;

  for (let i = 1; i <= totalSteps; i++) {
    document.getElementById(`step${i}`).classList.remove('active');
  }
  document.getElementById('stepSuccess').classList.add('active');
}

// ── TRACK APPLICATION ───────────────────────────────────────
function trackApplication() {
  const input = document.getElementById('trackInput').value.trim();
  const result = document.getElementById('trackResult');

  if (!input) {
    result.innerHTML = `<p style="color:#ef4444;font-size:0.9rem;margin-top:0.75rem;">Please enter a valid Application ID.</p>`;
    return;
  }

  result.innerHTML = `
    <div class="track-status-card">
      <h4>Application ID: <strong>${input}</strong></h4>
      <div class="track-steps">
        <div class="track-step done"><div class="track-dot"></div><span>Application Submitted</span></div>
        <div class="track-step done"><div class="track-dot"></div><span>Documents Verified</span></div>
        <div class="track-step active"><div class="track-dot"></div><span>Under Processing at RTO</span></div>
        <div class="track-step"><div class="track-dot"></div><span>Dispatched</span></div>
        <div class="track-step"><div class="track-dot"></div><span>Delivered</span></div>
      </div>
    </div>`;
}

// ── SMOOTH ACTIVE NAV LINK ──────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active-link', a.getAttribute('href') === `#${current}`);
  });
});
