'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '@/app/types';

interface AddLaptopModalProps {
  onSave: (input: Omit<Product, 'id'>) => void;
  onClose: () => void;
}

const defaultForm = {
  name: '',
  price: '',
  cpuTier: 'mid' as Product['cpu'],
  cpuText: '',
  ram: '8' as string,
  ramText: '',
  storageTier: 'ssd' as Product['storage'],
  storageText: '',
  vgaTier: 'integrated' as Product['vga'],
  vgaText: '',
  rating: '4.0',
  warranty: '1' as string,
  powerUsage: '',
  image: '',
};

export default function AddLaptopModal({ onSave, onClose }: AddLaptopModalProps) {
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function set(field: keyof typeof defaultForm, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi';
    if (!form.price || parseFloat(form.price) <= 0) e.price = 'Harga harus > 0';
    if (!form.cpuText.trim()) e.cpuText = 'Model CPU wajib diisi';
    if (!form.ramText.trim()) e.ramText = 'Detail RAM wajib diisi';
    if (!form.storageText.trim()) e.storageText = 'Detail storage wajib diisi';
    if (!form.vgaText.trim()) e.vgaText = 'Detail VGA wajib diisi';
    const rating = parseFloat(form.rating);
    if (isNaN(rating) || rating < 0 || rating > 5) e.rating = 'Rating harus 0–5';
    if (!form.powerUsage || parseFloat(form.powerUsage) <= 0) e.powerUsage = 'Power usage harus > 0';
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    const pw = parseFloat(form.powerUsage);
    onSave({
      name: form.name.trim(),
      price: parseFloat(form.price),
      cpu: form.cpuTier,
      ram: parseInt(form.ram),
      storage: form.storageTier,
      vga: form.vgaTier,
      specs: {
        cpu: form.cpuText.trim(),
        ram: form.ramText.trim(),
        storage: form.storageText.trim(),
        vga: form.vgaText.trim(),
        powerUsage: pw,
      },
      rating: parseFloat(form.rating),
      warranty: parseInt(form.warranty),
      powerUsage: pw,
      image: form.image.trim() || undefined,
      isCustom: true,
    });
    onClose();
  }

  const labelClass = 'block text-[10px] font-mono uppercase tracking-widest text-muted mb-1.5 font-medium';
  const inputClass = 'w-full px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-shadow duration-150';
  const selectClass = inputClass;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[oklch(0.08_0.01_220/0.75)]"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-2xl bg-surface border border-border rounded-xl shadow-[0_8px_40px_oklch(0.4_0.02_220/0.12)] overflow-y-auto max-h-[90dvh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-0.5">Database</p>
            <h2 className="text-base font-semibold text-foreground tracking-tight">Tambah Laptop Baru</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          {/* Name + Price */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_140px] gap-4">
            <div>
              <label className={labelClass}>Nama Laptop</label>
              <input
                type="text"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                placeholder="Contoh: ASUS VivoBook 15"
                className={inputClass}
              />
              {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className={labelClass}>Harga (juta Rp)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={form.price}
                onChange={e => set('price', e.target.value)}
                placeholder="8.5"
                className={inputClass}
              />
              {errors.price && <p className="text-[10px] text-red-500 mt-1">{errors.price}</p>}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* CPU */}
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4">
            <div>
              <label className={labelClass}>Tier CPU</label>
              <select value={form.cpuTier} onChange={e => set('cpuTier', e.target.value)} className={selectClass}>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid-Range</option>
                <option value="high">High-End</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Model CPU</label>
              <input
                type="text"
                value={form.cpuText}
                onChange={e => set('cpuText', e.target.value)}
                placeholder="Intel Core i5-1235U"
                className={inputClass}
              />
              {errors.cpuText && <p className="text-[10px] text-red-500 mt-1">{errors.cpuText}</p>}
            </div>
          </div>

          {/* RAM */}
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4">
            <div>
              <label className={labelClass}>RAM (GB)</label>
              <select value={form.ram} onChange={e => set('ram', e.target.value)} className={selectClass}>
                <option value="4">4 GB</option>
                <option value="8">8 GB</option>
                <option value="16">16 GB</option>
                <option value="32">32 GB</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Detail RAM</label>
              <input
                type="text"
                value={form.ramText}
                onChange={e => set('ramText', e.target.value)}
                placeholder="8GB DDR4"
                className={inputClass}
              />
              {errors.ramText && <p className="text-[10px] text-red-500 mt-1">{errors.ramText}</p>}
            </div>
          </div>

          {/* Storage */}
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4">
            <div>
              <label className={labelClass}>Tier Storage</label>
              <select value={form.storageTier} onChange={e => set('storageTier', e.target.value)} className={selectClass}>
                <option value="hdd">HDD</option>
                <option value="ssd">SSD</option>
                <option value="nvme">NVMe</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Detail Storage</label>
              <input
                type="text"
                value={form.storageText}
                onChange={e => set('storageText', e.target.value)}
                placeholder="512GB SSD"
                className={inputClass}
              />
              {errors.storageText && <p className="text-[10px] text-red-500 mt-1">{errors.storageText}</p>}
            </div>
          </div>

          {/* VGA */}
          <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4">
            <div>
              <label className={labelClass}>Tier VGA</label>
              <select value={form.vgaTier} onChange={e => set('vgaTier', e.target.value)} className={selectClass}>
                <option value="integrated">Integrated</option>
                <option value="entry">Entry-level</option>
                <option value="mid">Mid-Range</option>
                <option value="high">High-End</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Detail VGA</label>
              <input
                type="text"
                value={form.vgaText}
                onChange={e => set('vgaText', e.target.value)}
                placeholder="Intel Iris Xe"
                className={inputClass}
              />
              {errors.vgaText && <p className="text-[10px] text-red-500 mt-1">{errors.vgaText}</p>}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Rating, Warranty, Power */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Rating (0–5)</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={form.rating}
                onChange={e => set('rating', e.target.value)}
                className={inputClass}
              />
              {errors.rating && <p className="text-[10px] text-red-500 mt-1">{errors.rating}</p>}
            </div>
            <div>
              <label className={labelClass}>Garansi</label>
              <select value={form.warranty} onChange={e => set('warranty', e.target.value)} className={selectClass}>
                <option value="1">1 tahun</option>
                <option value="2">2 tahun</option>
                <option value="3">3 tahun</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Power (watt)</label>
              <input
                type="number"
                min="0"
                step="1"
                value={form.powerUsage}
                onChange={e => set('powerUsage', e.target.value)}
                placeholder="25"
                className={inputClass}
              />
              {errors.powerUsage && <p className="text-[10px] text-red-500 mt-1">{errors.powerUsage}</p>}
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className={labelClass}>URL Gambar (opsional)</label>
            <input
              type="url"
              value={form.image}
              onChange={e => set('image', e.target.value)}
              placeholder="https://..."
              className={inputClass}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-muted rounded-lg bg-[oklch(0.94_0.004_220)] hover:bg-border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 text-sm font-semibold text-accent-fg bg-accent rounded-lg hover:opacity-90 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2"
          >
            Simpan Laptop
          </button>
        </div>
      </div>
    </div>
  );
}
