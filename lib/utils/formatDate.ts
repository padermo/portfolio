export function formatDate(date: string | null, locale: string) {
  if (!date) {
    return locale === "es" ? "Actualidad" : "Present";
  }

  const [year, month] = date.split("-").map(Number);

  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric"
  }).format(new Date(year, month - 1));
}
