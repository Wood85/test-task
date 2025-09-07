import type { Shareholder, NormalizedShareholder } from '@definitions/shareholder';

export function normalizeShareholders(data: Shareholder[]): NormalizedShareholder[] {
  const unique = data.filter(
    (item, index, arr) =>
      index ===
      arr.findIndex((s) => s.holder === item.holder && s.share_percent === item.share_percent)
  );

  const withNumbers = unique.map((item) => ({
    holder: item.holder,
    share_percent: Number(item.share_percent)
  }));

  const total = withNumbers.reduce((acc, cur) => acc + cur.share_percent, 0);

  const normalized = withNumbers.map((item) => ({
    holder: item.holder,
    share_percent: total === 100 ? item.share_percent : (item.share_percent / total) * 100
  }));

  return normalized.map((item, idx) => ({
    key: idx + 1,
    ...item
  }));
}
