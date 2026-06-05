'use client';

import { X, GitCompareArrows } from 'lucide-react';
import { Product } from '@/app/types';

interface ComparePanelProps {
  selectedProducts: Product[];
  onRemove: (id: number) => void;
  onClear: () => void;
  onCompare: () => void;
}

export default function ComparePanel({ selectedProducts, onRemove, onClear, onCompare }: ComparePanelProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[oklch(0.25_0.01_220)] bg-[oklch(0.15_0.012_220)] shadow-[0_-4px_24px_oklch(0.4_0.02_220/0.15)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center gap-4">
        {/* Label */}
        <div className="shrink-0 hidden sm:block">
          <p className="text-[10px] font-mono uppercase tracking-widest text-[oklch(0.52_0.01_220)]">
            Bandingkan
          </p>
          <p className="text-xs font-semibold text-[oklch(0.95_0.005_220)]">
            {selectedProducts.length} / 3 dipilih
          </p>
        </div>

        <div className="hidden sm:block w-px h-8 bg-[oklch(0.25_0.01_220)] shrink-0" />

        {/* Selected chips */}
        <div className="flex-1 flex items-center gap-2 overflow-x-auto min-w-0">
          {selectedProducts.map(p => (
            <div
              key={p.id}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[oklch(0.25_0.01_220)] border border-[oklch(0.30_0.01_220)] shrink-0"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt=""
                  width={24}
                  height={18}
                  className="rounded object-cover"
                />
              )}
              <span className="text-xs text-[oklch(0.90_0.005_220)] font-medium max-w-[120px] truncate">
                {p.name}
              </span>
              <button
                onClick={() => onRemove(p.id)}
                className="text-[oklch(0.52_0.01_220)] hover:text-[oklch(0.90_0.005_220)] transition-colors duration-150 focus-visible:outline-none"
              >
                <X size={12} />
              </button>
            </div>
          ))}

          {/* Empty slots */}
          {Array.from({ length: 3 - selectedProducts.length }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="w-24 h-8 rounded-lg border border-dashed border-[oklch(0.30_0.01_220)] shrink-0"
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClear}
            className="px-3 py-1.5 text-xs font-medium text-[oklch(0.52_0.01_220)] hover:text-[oklch(0.90_0.005_220)] transition-colors duration-150 focus-visible:outline-none"
          >
            Reset
          </button>
          <button
            onClick={onCompare}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-accent-fg bg-accent rounded-lg hover:opacity-90 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <GitCompareArrows size={14} />
            Bandingkan
          </button>
        </div>
      </div>
    </div>
  );
}
