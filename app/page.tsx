'use client';

import { useState } from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import { searchRecommendation } from './lib/recommendation';
import { products } from './lib/products';
import { RecommendationResult, SearchFilters } from './types';
import { Monitor } from 'lucide-react';

export default function Home() {
  const [results, setResults] = useState<RecommendationResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchFilters: SearchFilters) => {
    setFilters(searchFilters);
    const recommendations = searchRecommendation(products, searchFilters);
    setResults(recommendations);
    setHasSearched(true);
  };

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-[30] bg-[oklch(0.15_0.012_220)] border-b border-[oklch(0.25_0.01_220)]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Monitor size={15} className="text-accent" />
            <span className="font-semibold text-[oklch(0.95_0.005_220)] tracking-tight text-sm">
              Sistem Rekomendasi laptop
            </span>
          </div>
          <span className="hidden sm:block text-[10px] font-mono px-2 py-1 bg-[oklch(0.25_0.01_220)] text-[oklch(0.62_0.01_220)] rounded tracking-widest uppercase">
            Weighted Scoring · DSS
          </span>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 md:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-10 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[80px]">
            <SearchForm onSearch={handleSearch} />
          </aside>

          {/* Content */}
          <div>
            {!hasSearched ? (
              <EmptyState />
            ) : (
              <Results results={results} budget={filters?.budget ?? 0} />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted">
            Sistem Pendukung Keputusan · Metode Weighted Scoring
          </p>
          <p className="text-xs text-muted font-mono">
            4 kriteria · 30 produk · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="border border-border rounded-xl bg-surface p-12 text-center shadow-[0_4px_24px_oklch(0.4_0.02_220/0.05)]">
      <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mx-auto mb-5">
        <Monitor size={20} className="text-accent" />
      </div>
      <h2 className="text-base font-semibold text-foreground mb-2 tracking-tight">
        Belum ada pencarian
      </h2>
      <p className="text-sm text-muted max-w-[38ch] mx-auto leading-relaxed">
        Atur kriteria di panel filter, lalu tekan Cari Rekomendasi untuk melihat ranking laptop terbaik.
      </p>
    </div>
  );
}
