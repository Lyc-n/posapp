export function formatCurrency(
  value: number,
  currency = 'IDR',
  locale = 'id-ID',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

export function formatDate(
  value: Date | string | number,
  locale = 'id-ID',
): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
  }).format(new Date(value));
}
