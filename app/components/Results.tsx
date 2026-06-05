'use client';

import { RecommendationResult } from '@/app/types';
import { Star, Monitor, Plus, Check, Trash2 } from 'lucide-react';

interface ResultsProps {
  results: RecommendationResult[];
  budget: number;
  compareIds: number[];
  onToggleCompare: (id: number) => void;
  onDeleteCustom: (id: number) => void;
}

export default function Results({ results, budget, compareIds, onToggleCompare, onDeleteCustom }: ResultsProps) {
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
        <ProductRow
          product={top}
          rank={1}
          isTop
          isSelected={compareIds.includes(top.id)}
          compareDisabled={compareIds.length >= 3 && !compareIds.includes(top.id)}
          onToggleCompare={() => onToggleCompare(top.id)}
          onDeleteCustom={onDeleteCustom}
        />
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
                <ProductRow
                  product={product}
                  rank={index + 2}
                  isSelected={compareIds.includes(product.id)}
                  compareDisabled={compareIds.length >= 3 && !compareIds.includes(product.id)}
                  onToggleCompare={() => onToggleCompare(product.id)}
                  onDeleteCustom={onDeleteCustom}
                />
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
  isSelected,
  compareDisabled,
  onToggleCompare,
  onDeleteCustom,
}: {
  product: RecommendationResult;
  rank: number;
  isTop?: boolean;
  isSelected: boolean;
  compareDisabled: boolean;
  onToggleCompare: () => void;
  onDeleteCustom: (id: number) => void;
}) {
  return (
    <div className="grid grid-cols-[40px_56px_1fr_auto] gap-3 items-start">
      {/* Rank + compare toggle */}
      <div className="flex flex-col items-center gap-1.5 pt-0.5">
        <span
          className={`font-mono font-bold leading-none select-none ${
            isTop ? 'text-3xl text-accent' : 'text-2xl text-[oklch(0.78_0.005_220)]'
          }`}
        >
          {String(rank).padStart(2, '0')}
        </span>
        <button
          title={isSelected ? 'Hapus dari perbandingan' : 'Tambah ke perbandingan'}
          onClick={onToggleCompare}
          className={`w-6 h-6 rounded flex items-center justify-center border transition-[background,color,border-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
            isSelected
              ? 'bg-accent border-accent text-accent-fg'
              : compareDisabled
              ? 'border-border text-border opacity-40 cursor-not-allowed pointer-events-none'
              : 'border-border text-muted hover:border-accent hover:text-accent'
          }`}
        >
          {isSelected ? <Check size={11} /> : <Plus size={11} />}
        </button>
      </div>

      {/* Thumbnail */}
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          width={56}
          height={42}
          className={`rounded object-cover border border-border shrink-0 ${isTop ? 'w-16 h-12' : 'w-14 h-10'}`}
        />
      ) : (
        <div className={`rounded border border-border bg-[oklch(0.94_0.004_220)] shrink-0 flex items-center justify-center ${isTop ? 'w-16 h-12' : 'w-14 h-10'}`}>
          <Monitor size={14} className="text-border" />
        </div>
      )}

      {/* Main info */}
      <div className="min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <h3
            className={`font-semibold tracking-tight truncate ${
              isTop ? 'text-base text-foreground' : 'text-sm text-foreground'
            }`}
          >
            {product.name}
          </h3>
          {product.isCustom && (
            <>
              <span className="shrink-0 text-[9px] font-mono px-1.5 py-0.5 rounded bg-[oklch(0.94_0.004_220)] text-muted uppercase tracking-wide">
                Custom
              </span>
              <button
                title="Hapus laptop"
                onClick={() => onDeleteCustom(product.id)}
                className="shrink-0 text-muted hover:text-red-500 transition-colors duration-150 focus-visible:outline-none"
              >
                <Trash2 size={12} />
              </button>
            </>
          )}
        </div>
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
