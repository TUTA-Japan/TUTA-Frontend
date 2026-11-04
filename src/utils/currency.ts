const vndFormatter = new Intl.NumberFormat("vi-VN");

export function formatVnd(value: number) {
  return vndFormatter.format(value);
}
