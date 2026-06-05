'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/app/types';

const STORAGE_KEY = 'custom-laptops';

export function useCustomProducts() {
  const [customProducts, setCustomProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCustomProducts(JSON.parse(stored));
    } catch {
      // corrupted storage — start fresh
    }
  }, []);

  function addProduct(input: Omit<Product, 'id'>) {
    const newProduct: Product = { ...input, id: Date.now(), isCustom: true };
    setCustomProducts(prev => {
      const next = [...prev, newProduct];
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* noop */ }
      return next;
    });
  }

  function deleteProduct(id: number) {
    setCustomProducts(prev => {
      const next = prev.filter(p => p.id !== id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* noop */ }
      return next;
    });
  }

  return { customProducts, addProduct, deleteProduct };
}
