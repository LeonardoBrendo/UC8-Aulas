export function formatCurrency(value) {
  if (typeof value !== 'number') {
    return '';
  }
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
