// LangkahKu – Eksperimen A (dibangun hanya dari PRD.md)
// Data langkah adalah data simulasi (PRD bagian 7).

const STRIDE_KM = 0.00071; // panjang langkah rata-rata ~0,71 m
const KCAL_PER_STEP = 0.033;

// Data simulasi 7 hari: langkah dari HP dan dari jam
const history = [
  { day: 'Sen', phone: 4136, watch: 1776 },
  { day: 'Sel', phone: 1365, watch: 1617 },
  { day: 'Rab', phone: 5343, watch: 4785 },
  { day: 'Kam', phone: 862, watch: 517 },
  { day: 'Jum', phone: 929, watch: 754 },
  { day: 'Sab', phone: 419, watch: 285 },
  { day: 'Min', phone: 2650, watch: 1980 }, // hari ini
];

let target = 5000;
try {
  const saved = localStorage.getItem('langkahku-target');
  if (saved) target = parseInt(saved, 10) || 5000;
} catch (e) { /* localStorage tidak tersedia */ }

const $ = (id) => document.getElementById(id);
const fmt = (n) => n.toLocaleString('id-ID');

// Total langkah = angka tertinggi dari kedua perangkat
const totalOf = (d) => Math.max(d.phone, d.watch);

function render() {
  const today = history[history.length - 1];
  const total = totalOf(today);
  const pct = Math.min(100, Math.round((total / target) * 100));

  $('todayLabel').textContent = new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  $('totalSteps').textContent = fmt(total);
  $('progressBar').style.width = pct + '%';
  $('progressPct').textContent = pct;
  $('targetLabel').textContent = fmt(target);
  $('distance').textContent = (total * STRIDE_KM).toFixed(2).replace('.', ',');
  $('calories').textContent = fmt(Math.round(total * KCAL_PER_STEP));
  $('phoneSteps').textContent = fmt(today.phone);
  $('watchSteps').textContent = fmt(today.watch);
  $('watchFace').textContent = fmt(today.watch);
  $('targetInput').value = target;

  const max = Math.max(...history.map(totalOf), target);
  $('historyChart').innerHTML = history.map((d, i) => {
    const t = totalOf(d);
    const h = Math.max(4, Math.round((t / max) * 100));
    const isToday = i === history.length - 1;
    return `<div class="flex-1 h-full flex flex-col items-center gap-1">
      <span class="text-[10px] text-slate-500">${fmt(t)}</span>
      <div class="w-full flex-1 flex items-end">
        <div class="w-full rounded-t-md ${isToday ? 'bg-emerald-500' : 'bg-emerald-200'}" style="height:${h}%"></div>
      </div>
      <span class="text-xs ${isToday ? 'font-bold' : 'text-slate-500'}">${d.day}</span>
    </div>`;
  }).join('');
}

function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.style.opacity = '1';
  clearTimeout(toast.t);
  toast.t = setTimeout(() => (el.style.opacity = '0'), 2200);
}

// F5 Sinkronisasi (simulasi)
$('syncBtn').addEventListener('click', () => {
  const btn = $('syncBtn');
  btn.disabled = true;
  btn.textContent = 'Menyinkronkan...';
  setTimeout(() => {
    const today = history[history.length - 1];
    today.phone += Math.floor(Math.random() * 120);
    today.watch += Math.floor(Math.random() * 80);
    render();
    btn.disabled = false;
    btn.textContent = 'Sinkronkan';
    toast('Sinkronisasi berhasil');
  }, 1200);
});

// F6 Target langkah
$('targetForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const v = parseInt($('targetInput').value, 10);
  if (!v || v < 500) return toast('Target minimal 500 langkah');
  target = v;
  try { localStorage.setItem('langkahku-target', String(v)); } catch (err) { /* abaikan */ }
  render();
  toast('Target disimpan');
});

// F7 Bagikan
$('shareBtn').addEventListener('click', async () => {
  const today = history[history.length - 1];
  const text = `Hari ini aku jalan ${fmt(totalOf(today))} langkah! 🚶 (LangkahKu)`;
  try {
    if (navigator.share) await navigator.share({ text });
    else { await navigator.clipboard.writeText(text); toast('Ringkasan disalin'); }
  } catch (e) { /* dibatalkan */ }
});

render();
