const questions = [
  { text: '“What do you know now that took years to understand?”', code: 'PROMPT_01 / KNOWN' },
  { text: '“Where does your field stop agreeing with itself?”', code: 'PROMPT_02 / EDGE' },
  { text: '“How has the work changed the person doing it?”', code: 'PROMPT_03 / REFLECTION' },
  { text: '“What question follows you when the work is over?”', code: 'PROMPT_04 / UNKNOWN' }
];

const range = document.querySelector('#question-range');
const output = document.querySelector('#question-output');
const code = document.querySelector('#question-code');

function updateQuestion() {
  const item = questions[Number(range.value)];
  output.textContent = item.text;
  code.textContent = item.code;
}

range?.addEventListener('input', updateQuestion);

const form = document.querySelector('#guest-form');
const formStatus = document.querySelector('#form-status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Good signal. This is a design prototype, so nothing was sent yet.';
  formStatus.focus?.();
});

const field = document.querySelector('.field-map');
if (field && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  field.addEventListener('pointermove', (event) => {
    const rect = field.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    field.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(200,255,69,.12), transparent 30%), radial-gradient(circle at center, rgba(141,121,255,.09), transparent 38%)`;
  });
  field.addEventListener('pointerleave', () => field.removeAttribute('style'));
}
