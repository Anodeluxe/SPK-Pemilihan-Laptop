'use client';

import { SearchFilters, Priority } from '@/app/types';
import {
  getCPUOptions,
  getRAMOptions,
  getStorageOptions,
  getVGAOptions,
  getPriorityOptions,
} from '@/app/lib/recommendation';
import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    budget: 10,
    cpu: '',
    ram: '',
    storage: '',
    vga: '',
    priority: 'balanced',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: name === 'budget' ? parseFloat(value) : value,
    }));
  };

  const priorityOptions = getPriorityOptions();

  const selectClass =
    'w-full px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ' +
    'transition-shadow duration-150';

  const labelClass =
    'block text-[10px] font-mono uppercase tracking-widest text-muted mb-1.5 font-medium';

  return (
    <div className="border border-border rounded-xl bg-surface p-5 shadow-[0_4px_24px_oklch(0.4_0.02_220/0.05)]">
      <p className={`${labelClass} mb-5`}>Filter Pencarian</p>

      {/* Budget */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className={labelClass} htmlFor="budget">
            Budget Maksimal
          </label>
          <div className="flex items-center gap-0.5 text-accent">
            <span className="text-sm font-mono">Rp</span>
            <input
              type="number"
              min="3"
              max="30"
              step="0.5"
              value={filters.budget}
              onChange={e => {
                const val = parseFloat(e.target.value);
                if (!isNaN(val)) {
                  setFilters(prev => ({ ...prev, budget: Math.min(30, Math.max(3, val)) }));
                }
              }}
              className="w-14 text-sm font-mono font-semibold text-accent text-center bg-transparent border-b border-accent/40 focus-visible:outline-none focus-visible:border-accent transition-colors duration-150"
            />
            <span className="text-sm font-mono">jt</span>
          </div>
        </div>
        <input
          id="budget"
          type="range"
          name="budget"
          min="3"
          max="30"
          step="0.5"
          value={filters.budget}
          onChange={handleChange}
          className="w-full cursor-pointer accent-accent focus-visible:outline-none"
        />
        <div className="flex justify-between text-[10px] font-mono text-muted mt-1.5">
          <span>Rp 3jt</span>
          <span>Rp 30jt</span>
        </div>
      </div>

      <div className="border-t border-border my-4" />

      {/* Dropdowns */}
      <div className="space-y-4 mb-5">
        <div>
          <label className={labelClass} htmlFor="cpu">CPU</label>
          <select id="cpu" name="cpu" value={filters.cpu} onChange={handleChange} className={selectClass}>
            <option value="">Semua Tipe</option>
            {getCPUOptions().map(opt => (
              <option key={opt} value={opt}>
                {opt === 'entry' ? 'Entry Level' : opt === 'mid' ? 'Mid-Range' : 'High-End'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="ram">RAM Minimum</label>
          <select id="ram" name="ram" value={filters.ram} onChange={handleChange} className={selectClass}>
            <option value="">Semua RAM</option>
            {getRAMOptions().map(opt => (
              <option key={opt} value={opt}>{opt}GB+</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="storage">Storage</label>
          <select id="storage" name="storage" value={filters.storage} onChange={handleChange} className={selectClass}>
            <option value="">Semua Tipe</option>
            {getStorageOptions().map(opt => (
              <option key={opt} value={opt}>{opt.toUpperCase()}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="vga">VGA</label>
          <select id="vga" name="vga" value={filters.vga} onChange={handleChange} className={selectClass}>
            <option value="">Semua VGA</option>
            {getVGAOptions().map(opt => (
              <option key={opt} value={opt}>
                {opt === 'integrated'
                  ? 'Integrated'
                  : opt === 'entry'
                  ? 'Entry-level'
                  : opt === 'mid'
                  ? 'Mid-Range'
                  : 'High-End'}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="border-t border-border my-4" />

      {/* Priority */}
      <div className="mb-5">
        <label className={labelClass}>Prioritas</label>
        <div className="grid grid-cols-2 gap-2">
          {priorityOptions.map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilters(prev => ({ ...prev, priority: option.value as Priority }))}
              className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-[background,color] duration-150
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                filters.priority === option.value
                  ? 'bg-accent text-accent-fg'
                  : 'bg-[oklch(0.94_0.004_220)] text-muted hover:bg-border hover:text-foreground'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <button
        type="button"
        onClick={() => onSearch(filters)}
        className="w-full flex items-center justify-center gap-2 bg-accent text-accent-fg
          font-semibold py-2.5 rounded-lg text-sm transition-opacity duration-150
          hover:opacity-90 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-accent/50 focus-visible:ring-offset-2"
      >
        <Search size={14} />
        Cari Rekomendasi
      </button>
    </div>
  );
}
