const questions = [
  { text: '“What do you know now that took years to understand?”', code: 'PROMPT_01 / KNOWN' },
  { text: '“Where does your field stop agreeing with itself?”', code: 'PROMPT_02 / EDGE' },
  { text: '“How has the work changed the person doing it?”', code: 'PROMPT_03 / REFLECTION' },
  { text: '“What question follows you when the work is over?”', code: 'PROMPT_04 / UNKNOWN' }
];

const guests = [
  { name: 'Pun', category: 'Builders & Lives', angle: 'Crazy → genius · curiosity · family business · gaming · energy', priority: true },
  { name: 'p’Mark Blognone', category: 'Science & Technology', angle: 'AI · geopolitics · chips · quantum · longevity · humanity', priority: true },
  { name: 'p’Ake / Beauty Gems', category: 'Society & Power', angle: 'Capitalism · systems · history · finance · politics · singularity', priority: true },
  { name: 'Geek Gang — Ta & Boon', category: 'Science & Technology', angle: 'Geek culture · technology · building communities' },
  { name: 'Non-duality / House', category: 'Mind & Meaning', angle: 'Non-duality · self · awareness' },
  { name: 'ศานนท์ หวังสร้างบุญ / Sanon', category: 'Society & Power', angle: 'Cities · public systems · idealism · change from within', priority: true, prepared: true },
  { name: 'Bernard', category: 'Builders & Lives', angle: 'Journey to be explored' },
  { name: 'Baipad', category: 'Builders & Lives', angle: 'Journey to be explored' },
  { name: 'p’Thip', category: 'Science & Technology', angle: 'Physics' },
  { name: 'Robbie Akbal', category: 'Mind & Meaning', angle: 'Inner journey · open question' },
  { name: 'WildAwake', category: 'Mind & Meaning', angle: 'Awakening' },
  { name: 'p’Toom', category: 'Mind & Meaning', angle: 'The watcher · perception' },
  { name: 'อ.เธนศ', category: 'Mind & Meaning', angle: 'Philosophy · open question' },
  { name: 'p’Woody', category: 'Culture & Creativity', angle: 'Life in the spotlight' },
  { name: 'Fatty Uncle', category: 'Builders & Lives', angle: 'Food · memory · family · life' },
  { name: 'p’xx', category: 'Science & Technology', angle: 'Physics · Hubble' },
  { name: 'Pippo', category: 'Builders & Lives', angle: 'Ramen · food story · storytelling' },
  { name: 'SpaceX', category: 'Science & Technology', angle: 'Space · physics · civilization · possibility' },
  { name: 'p’Leng', category: 'Mind & Meaning', angle: 'East and West' },
  { name: 'Tantai', category: 'Science & Technology', angle: 'Biology' },
  { name: 'Jitr Monk', category: 'Mind & Meaning', angle: 'Buddhism' },
  { name: 'Roundfinger', category: 'Mind & Meaning', angle: 'The thinker · ideas · being human' },
  { name: 'n’Toey Jarinporn', category: 'Culture & Creativity', angle: 'Public life · creativity · inner life' },
  { name: 'ONE Championship', category: 'Builders & Lives', angle: 'Competition · discipline · human limits' },
  { name: 'Natalee Glebova', category: 'Culture & Creativity', angle: 'Identity · visibility · life journey' },
  { name: 'k’Chatchart', category: 'Society & Power', angle: 'The pragmatic · city · leadership' },
  { name: 'Thomas', category: 'Mind & Meaning', angle: 'Awareness' },
  { name: 'k’Chuwit', category: 'Society & Power', angle: 'The artist · power' },
  { name: 'Petch', category: 'Science & Technology', angle: 'Silicon Valley' },
  { name: 'Thanatorn', category: 'Society & Power', angle: 'The edge · politics · systems' },
  { name: 'Kate', category: 'Culture & Creativity', angle: 'Live a life' },
  { name: 'Notep', category: 'Culture & Creativity', angle: 'Art' },
  { name: 'p’Jo — Wonderfruit', category: 'Culture & Creativity', angle: 'Festivals · subculture · temporary worlds' },
  { name: 'Ray Chan', category: 'Culture & Creativity', angle: 'Memes · life · internet culture' },
  { name: 'Leopold', category: 'Culture & Creativity', angle: 'Life journey · music' },
  { name: 'p’Note Udom', category: 'Culture & Creativity', angle: 'Comedy from a sad life' },
  { name: 'Ung Ink', category: 'Society & Power', angle: 'A daughter · identity · public life' },
  { name: 'p’Ple Kattiya', category: 'Society & Power', angle: 'The leader' },
  { name: 'p’Kong Sappe', category: 'Builders & Lives', angle: 'Business · the life behind it' },
  { name: 'Rarin — Guss Damn Good', category: 'Builders & Lives', angle: 'Ice cream · brand · building' },
  { name: 'Pen-Ek', category: 'Culture & Creativity', angle: 'Film · seeing the world' },
  { name: 'p’Jord Songkran', category: 'Culture & Creativity', angle: 'Advertising · creativity · life' },
  { name: 'Aivory', category: 'Culture & Creativity', angle: 'Left and right' },
  { name: 'MrBeast', category: 'Culture & Creativity', angle: 'Attention · scale · internet storytelling' },
  { name: 'p’Jo', category: 'Builders & Lives', angle: 'Open thread from the original list' },
  { name: 'Elon Musk', category: 'Science & Technology', angle: 'Physics · abundance · civilization · risk' },
  { name: 'Wait But Why', category: 'Science & Technology', angle: 'Big questions · explanation · the future' }
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

const guestList = document.querySelector('#guest-list');
const guestSearch = document.querySelector('#guest-search');
const guestFilters = document.querySelector('#guest-filters');
const guestResultCount = document.querySelector('#guest-result-count');
const categories = ['All', ...new Set(guests.map((guest) => guest.category))];
let activeCategory = 'All';

function renderFilters() {
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = category;
    button.className = 'filter-button';
    button.setAttribute('aria-pressed', String(category === activeCategory));
    button.addEventListener('click', () => {
      activeCategory = category;
      document.querySelectorAll('.filter-button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      renderGuests();
    });
    guestFilters?.append(button);
  });
}

function renderGuests() {
  if (!guestList) return;
  const query = guestSearch?.value.trim().toLocaleLowerCase() || '';
  const filtered = guests.filter((guest) => {
    const inCategory = activeCategory === 'All' || guest.category === activeCategory;
    const searchable = `${guest.name} ${guest.category} ${guest.angle}`.toLocaleLowerCase();
    return inCategory && searchable.includes(query);
  });

  guestList.replaceChildren();
  filtered.forEach((guest) => {
    const item = document.createElement('li');
    const index = String(guests.indexOf(guest) + 1).padStart(2, '0');
    item.innerHTML = `<span class="guest-number">${index}</span><div class="guest-identity"><h3></h3><p></p></div><div class="guest-meta"><span>${guest.category}</span></div>`;
    item.querySelector('h3').textContent = guest.name;
    item.querySelector('p').textContent = guest.angle;
    const meta = item.querySelector('.guest-meta');
    if (guest.priority) {
      const badge = document.createElement('strong');
      badge.textContent = guest.prepared ? 'PREPARED' : 'PRIORITY';
      meta.prepend(badge);
    }
    guestList.append(item);
  });
  if (guestResultCount) guestResultCount.textContent = `${filtered.length} of ${guests.length} people and possibilities`;
}

if (guestList) {
  renderFilters();
  renderGuests();
  guestSearch?.addEventListener('input', renderGuests);
}

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
