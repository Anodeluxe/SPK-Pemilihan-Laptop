'use client';

import { X, Star } from 'lucide-react';
import { Product, RecommendationResult } from '@/app/types';

interface CompareModalProps {
  products: (RecommendationResult | Product)[];
  onClose: () => void;
}

function isResult(p: RecommendationResult | Product): p is RecommendationResult {
  return 'matchScore' in p;
}

const tierLabel: Record<string, string> = {
  entry: 'Entry',
  mid: 'Mid-Range',
  high: 'High-End',
  integrated: 'Integrated',
  hdd: 'HDD',
  ssd: 'SSD',
  nvme: 'NVMe',
};

function bestIdx(values: (number | null)[], prefer: 'high' | 'low'): number {
  const nums = values.map(v => (v === null ? NaN : v));
  let best = prefer === 'high' ? -Infinity : Infinity;
  let idx = -1;
  nums.forEach((n, i) => {
    if (isNaN(n)) return;
    if (prefer === 'high' ? n > best : n < best) { best = n; idx = i; }
  });
  return idx;
}

export default function CompareModal({ products, onClose }: CompareModalProps) {
  const count = products.length;

  const rows: { label: string; values: (string | number | null)[]; prefer?: 'high' | 'low'; numeric?: boolean }[] = [
    {
      label: 'Harga',
      values: products.map(p => p.price),
      prefer: 'low',
      numeric: true,
    },
    {
      label: 'CPU',
      values: products.map(p => tierLabel[p.cpu] ?? p.cpu),
    },
    {
      label: 'Model CPU',
      values: products.map(p => p.specs.cpu),
    },
    {
      label: 'RAM',
      values: products.map(p => p.ram),
      prefer: 'high',
      numeric: true,
    },
    {
      label: 'Detail RAM',
      values: products.map(p => p.specs.ram),
    },
    {
      label: 'Storage',
      values: products.map(p => tierLabel[p.storage] ?? p.storage),
    },
    {
      label: 'Detail Storage',
      values: products.map(p => p.specs.storage),
    },
    {
      label: 'VGA',
      values: products.map(p => tierLabel[p.vga] ?? p.vga),
    },
    {
      label: 'Detail VGA',
      values: products.map(p => p.specs.vga),
    },
    {
      label: 'Power Usage',
      values: products.map(p => p.powerUsage),
      prefer: 'low',
      numeric: true,
    },
    {
      label: 'Rating',
      values: products.map(p => p.rating),
      prefer: 'high',
      numeric: true,
    },
    {
      label: 'Garansi',
      values: products.map(p => p.warranty),
      prefer: 'high',
      numeric: true,
    },
    {
      label: 'Match Score',
      values: products.map(p => (isResult(p) ? p.matchScore : null)),
      prefer: 'high',
      numeric: true,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[oklch(0.08_0.01_220/0.75)]"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-4xl bg-surface border border-border rounded-xl shadow-[0_8px_40px_oklch(0.4_0.02_220/0.12)] overflow-hidden max-h-[90dvh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-0.5">
              Perbandingan
            </p>
            <h2 className="text-base font-semibold text-foreground tracking-tight">
              {count} Laptop Dibandingkan
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <X size={16} />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-auto flex-1">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0 bg-surface z-10">
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-[10px] font-mono uppercase tracking-widest text-muted w-28 shrink-0">
                  Spesifikasi
                </th>
                {products.map(p => (
                  <th key={p.id} className="px-4 py-3 min-w-[160px] text-left border-l border-border">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        width={80}
                        height={60}
                        className="rounded object-cover border border-border mb-2"
                      />
                    )}
                    <p className="text-sm font-semibold text-foreground tracking-tight leading-snug">
                      {p.name}
                    </p>
                    <p className="text-base font-mono font-bold text-accent mt-0.5">
                      Rp {p.price}jt
                    </p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className={
                            i < Math.floor(p.rating)
                              ? 'fill-[oklch(0.72_0.14_75)] text-[oklch(0.72_0.14_75)]'
                              : 'text-border'
                          }
                        />
                      ))}
                      <span className="text-[10px] font-mono text-muted ml-1">{p.rating}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(row => {
                const bi = row.prefer ? bestIdx(row.values.map(v => (typeof v === 'number' ? v : null)), row.prefer) : -1;
                return (
                  <tr key={row.label} className="border-b border-border last:border-0 hover:bg-[oklch(0.97_0.003_220)]">
                    <td className="px-5 py-3 text-[10px] font-mono uppercase tracking-widest text-muted align-top whitespace-nowrap">
                      {row.label}
                    </td>
                    {row.values.map((val, i) => {
                      const isBest = bi === i && val !== null;
                      const display = val === null
                        ? '–'
                        : row.label === 'Harga'
                        ? `Rp ${val}jt`
                        : row.label === 'RAM'
                        ? `${val} GB`
                        : row.label === 'Power Usage'
                        ? `${val} W`
                        : row.label === 'Garansi'
                        ? `${val} thn`
                        : row.label === 'Match Score'
                        ? `${val}%`
                        : String(val);
                      return (
                        <td
                          key={i}
                          className={`px-4 py-3 border-l border-border align-top ${isBest ? 'text-accent font-semibold' : 'text-foreground'}`}
                        >
                          {display}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="px-6 py-3 border-t border-border shrink-0">
          <p className="text-[10px] font-mono text-muted">
            Nilai terbaik per baris ditandai warna biru.
          </p>
        </div>
      </div>
    </div>
  );
}
