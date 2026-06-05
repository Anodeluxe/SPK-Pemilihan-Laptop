'use client';

import { useMemo, useState } from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import AddLaptopModal from './components/AddLaptopModal';
import ComparePanel from './components/ComparePanel';
import CompareModal from './components/CompareModal';
import { searchRecommendation } from './lib/recommendation';
import { products as staticProducts } from './lib/products';
import { useCustomProducts } from './hooks/useCustomProducts';
import { Product, RecommendationResult, SearchFilters } from './types';
import { Monitor, Plus } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { customProducts, addProduct, deleteProduct } = useCustomProducts();
  const allProducts = useMemo(
    () => [...staticProducts, ...customProducts],
    [customProducts]
  );

  const [results, setResults] = useState<RecommendationResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleSearch = (searchFilters: SearchFilters) => {
    setFilters(searchFilters);
    setResults(searchRecommendation(allProducts, searchFilters));
    setHasSearched(true);
    setCompareIds([]);
  };

  const handleToggleCompare = (id: number) => {
    setCompareIds(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const handleDeleteCustom = (id: number) => {
    deleteProduct(id);
    setCompareIds(prev => prev.filter(x => x !== id));
    if (filters) {
      const updated = allProducts.filter(p => p.id !== id);
      setResults(searchRecommendation(updated, filters));
    }
  };

  const selectedForCompare: (RecommendationResult | Product)[] = useMemo(() => {
    return compareIds.map(id => {
      const fromResults = results.find(r => r.id === id);
      if (fromResults) return fromResults;
      return allProducts.find(p => p.id === id)!;
    }).filter(Boolean);
  }, [compareIds, results, allProducts]);

  const showComparePanel = compareIds.length >= 2;

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-[30] bg-[oklch(0.15_0.012_220)] border-b border-[oklch(0.25_0.01_220)]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Lappiez Legit" width={32} height={25} className="shrink-0" />
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-[oklch(0.96_0.005_220)] tracking-tighter leading-none">
                Lappiez
              </span>
              <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest leading-none pb-0.5">
                Legit
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[oklch(0.95_0.005_220)] bg-[oklch(0.25_0.01_220)] hover:bg-[oklch(0.30_0.01_220)] rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <Plus size={12} />
              Tambah Laptop
            </button>
            <span className="hidden sm:block text-[10px] font-mono px-2 py-1 bg-[oklch(0.25_0.01_220)] text-[oklch(0.62_0.01_220)] rounded tracking-widest uppercase">
              Weighted Scoring · DSS
            </span>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className={`flex-1 max-w-[1400px] mx-auto w-full px-4 md:px-8 py-8 lg:py-10 ${showComparePanel ? 'pb-24' : ''}`}>
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
              <Results
                results={results}
                budget={filters?.budget ?? 0}
                compareIds={compareIds}
                onToggleCompare={handleToggleCompare}
                onDeleteCustom={handleDeleteCustom}
              />
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
            4 kriteria · {allProducts.length} produk · 2026
          </p>
        </div>
      </footer>

      {/* Modals & panels */}
      {isAddModalOpen && (
        <AddLaptopModal
          onSave={addProduct}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}

      {showComparePanel && (
        <ComparePanel
          selectedProducts={selectedForCompare as Product[]}
          onRemove={handleToggleCompare}
          onClear={() => setCompareIds([])}
          onCompare={() => setIsCompareModalOpen(true)}
        />
      )}

      {isCompareModalOpen && (
        <CompareModal
          products={selectedForCompare}
          onClose={() => setIsCompareModalOpen(false)}
        />
      )}
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
