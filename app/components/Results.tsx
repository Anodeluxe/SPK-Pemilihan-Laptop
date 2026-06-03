'use client';

import { RecommendationResult } from '@/app/types';
import { Star, Monitor } from 'lucide-react';

interface ResultsProps {
  results: RecommendationResult[];
  budget: number;
}

export default function Results({ results, budget }: ResultsProps) {
  if (results.length === 0) {
    return (
      <div className="border border-border rounded-xl bg-surface p-12 text-center shadow-[0_4px_24px_oklch(0.4_0.02_220/0.05)]">
        <div className="w-10 h-10 rounded-lg bg-[oklch(0.94_0.004_220)] flex items-center justify-center mx-auto mb-4">
          <Monitor size={17} className="text-muted" />
        </div>
        <p className="text-sm font-medium text-foreground mb-1.5">
          Tidak ada produk yang cocok
        </p>
        <p className="text-sm text-muted max-w-[36ch] mx-auto leading-relaxed">
          Kurangi filter atau naikkan budget untuk melihat lebih banyak pilihan.
        </p>
      </div>
    );
  }

  const top = results[0];
  const rest = results.slice(1, 8);

  return (
    <div>
      {/* Header */}
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-1">
            Hasil Ranking
          </p>
          <h2 className="text-xl font-semibold text-foreground tracking-tight">
            {results.length} produk ditemukan
          </h2>
        </div>
        <span className="text-xs font-mono text-muted">maks Rp {budget}jt</span>
      </div>

      {/* #1 Top Pick */}
      <div className="mb-6 p-5 rounded-xl border border-[oklch(0.52_0.18_250/0.20)] bg-[oklch(0.95_0.04_250/0.30)] shadow-[0_4px_20px_oklch(0.4_0.02_220/0.06)]">
        <p className="text-[10px] font-mono uppercase tracking-widest text-accent mb-4">
          Rekomendasi Utama
        </p>
        <ProductRow product={top} rank={1} isTop />
      </div>

      {/* Alternatives */}
      {rest.length > 0 && (
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-3">
            Alternatif
          </p>
          <div className="border border-border rounded-xl bg-surface overflow-hidden divide-y divide-border shadow-[0_2px_12px_oklch(0.4_0.02_220/0.04)]">
            {rest.map((product, index) => (
              <div key={product.id} className="px-5 py-4">
                <ProductRow product={product} rank={index + 2} />
              </div>
            ))}
          </div>
        </div>
      )}

      {results.length > 8 && (
        <p className="text-[11px] text-muted text-center mt-5 font-mono">
          Menampilkan 8 dari {results.length} hasil
        </p>
      )}
    </div>
  );
}

function ProductRow({
  product,
  rank,
  isTop = false,
}: {
  product: RecommendationResult;
  rank: number;
  isTop?: boolean;
}) {
  return (
    <div className="grid grid-cols-[40px_1fr_auto] gap-4 items-start">
      {/* Rank */}
      <span
        className={`font-mono font-bold leading-none pt-0.5 select-none ${
          isTop ? 'text-3xl text-accent' : 'text-2xl text-[oklch(0.78_0.005_220)]'
        }`}
      >
        {String(rank).padStart(2, '0')}
      </span>

      {/* Main info */}
      <div className="min-w-0">
        <h3
          className={`font-semibold tracking-tight mb-1 truncate ${
            isTop ? 'text-base text-foreground' : 'text-sm text-foreground'
          }`}
        >
          {product.name}
        </h3>
        <p className="text-xs text-muted mb-3 leading-relaxed truncate">
          {product.specs.cpu} · {product.specs.ram} · {product.specs.storage.toUpperCase()}
        </p>

        {/* Match score bar */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-muted w-10 shrink-0">Match</span>
          <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full"
              style={{ width: `${product.matchScore}%` }}
            />
          </div>
          <span className="text-[10px] font-mono font-semibold text-accent w-7 text-right shrink-0">
            {product.matchScore}%
          </span>
        </div>

        {/* Sub-score breakdown — top pick only */}
        {isTop && (
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[
              { label: 'Harga', score: Math.round(product.priceScore) },
              { label: 'Performa', score: Math.round(product.perfScore) },
              { label: 'Rating', score: Math.round(product.ratingScore) },
              { label: 'Garansi', score: Math.round(product.warrantyScore) },
            ].map(({ label, score }) => (
              <div key={label}>
                <p className="text-[9px] font-mono text-muted uppercase tracking-wide mb-1">
                  {label}
                </p>
                <div className="h-1 bg-[oklch(0.91_0.005_220)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[oklch(0.52_0.18_250/0.55)] rounded-full"
                    style={{ width: `${score}%` }}
                  />
                </div>
                <p className="text-[9px] font-mono text-muted mt-0.5">{score}%</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price + rating */}
      <div className="text-right shrink-0">
        <p className={`font-mono font-bold text-foreground ${isTop ? 'text-base' : 'text-sm'}`}>
          Rp {product.price}jt
        </p>
        <div className="flex items-center gap-0.5 justify-end mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={
                i < Math.floor(product.rating)
                  ? 'fill-[oklch(0.72_0.14_75)] text-[oklch(0.72_0.14_75)]'
                  : 'text-border'
              }
            />
          ))}
          <span className="text-[10px] font-mono text-muted ml-1">{product.rating}</span>
        </div>
        <p className="text-[10px] text-muted mt-1">{product.warranty}yr garansi</p>
      </div>
    </div>
  );
}
