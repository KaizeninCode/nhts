const OFFSET_MS = 3 * 60 * 60 * 1000; // Africa/Nairobi, UTC+3, no daylight saving

// "2026-10-20T06:30:00.000Z" -> "9:30 AM" (Nairobi time)
export const formatSlot = (iso: string) => {
  const d = new Date(new Date(iso).getTime() + OFFSET_MS);
  const h = d.getUTCHours();
  const m = d.getUTCMinutes();
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
};

// start and end of today in Nairobi, as UTC ISO strings for the API's from/to filters
export const nairobiDayRange = (d = new Date()) => {
  const ymd = new Date(d.getTime() + OFFSET_MS).toISOString().slice(0, 10);
  const start = new Date(`${ymd}T00:00:00Z`).getTime() - OFFSET_MS;
  return {
    from: new Date(start).toISOString(),
    to: new Date(start + 86_400_000 - 1).toISOString(),
  };
};

export const greeting = (now:Date = new Date()) => {
  const hour = new Date(now.getTime() + OFFSET_MS).getUTCHours() // NBI ime
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}