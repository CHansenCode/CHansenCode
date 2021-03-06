export default function useDates() {
  let now = new Date();

  let d = now.getDate();
  let m = now.getMonth() + 1;
  let y = now.getFullYear();

  let mm = m < 10 ? `0${m}` : m;
  let dd = d < 10 ? `0${d}` : d;

  let DoW = now.getDay();
  let weekday =
    DoW === 0
      ? 'sunday'
      : DoW === 1
      ? 'monday'
      : DoW === 2
      ? 'tuesday'
      : DoW === 3
      ? 'wednesday'
      : DoW === 4
      ? 'thursday'
      : DoW === 5
      ? 'friday'
      : DoW === 6
      ? 'saturday'
      : 'sunday';

  return { y: y, mm: mm, m: m, dd: dd, d: d, weekday: weekday };
}
