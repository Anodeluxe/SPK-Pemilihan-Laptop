import { Product, RecommendationResult, Priority, SearchFilters } from '@/app/types';

/**
 * Weighted Scoring Method (WSM) / Simple Additive Weighting (SAW)
 * Setiap kriteria dinormalisasi ke skala 0–100, kemudian diberi bobot sesuai prioritas.
 *
 * Kriteria:
 *   C1 – Harga      (cost criteria: semakin hemat dari budget = skor makin tinggi)
 *   C2 – Performa   (benefit: CPU + RAM + Storage + VGA, rata-rata sederhana)
 *   C3 – Rating     (benefit: kepuasan pengguna 0–5 → 0–100)
 *   C4 – Garansi    (benefit: 1–3 tahun → 33–100)
 */
export const calculateScores = (product: Product, budget: number, priority: Priority) => {

  // C1 – Harga: sisa budget setelah pembelian, dinormalisasi terhadap budget
  // Formula: (budget - harga) / budget × 100
  // Makin murah = makin banyak sisa = skor makin tinggi
  const priceScore = Math.min(100, Math.max(0, ((budget - product.price) / budget) * 100));

  // C2 – Performa: rata-rata 4 sub-kriteria hardware
  const cpuScores: Record<string, number>     = { entry: 20, mid: 60, high: 100 };
  const vgaScores: Record<string, number>     = { integrated: 25, entry: 55, mid: 80, high: 100 };
  const storageScores: Record<string, number> = { hdd: 20, ssd: 70, nvme: 100 };

  const perfScore = (
    cpuScores[product.cpu] +
    Math.min(100, (product.ram / 64) * 100) + // dinormalisasi terhadap 64 GB (maks dataset)
    storageScores[product.storage] +
    vgaScores[product.vga]
  ) / 4;

  // C3 – Rating pengguna: langsung proporsional terhadap skala 5
  const ratingScore = (product.rating / 5) * 100;

  // C4 – Garansi: dinormalisasi terhadap 3 tahun (maks garansi konsumen laptop)
  // 1 thn → 33 %   |   2 thn → 67 %   |   3 thn → 100 %
  const warrantyScore = Math.min(100, (product.warranty / 3) * 100);

  // C5 – Efisiensi Daya: dipakai hanya pada prioritas "efficiency"
  // Min-max normalization: range dataset 15 W (ultrabook) – 200 W (workstation gaming)
  // Makin rendah watt = skor makin tinggi
  const POWER_MIN = 15;
  const POWER_MAX = 200;
  const efficiencyScore = Math.min(100, Math.max(0,
    ((POWER_MAX - product.powerUsage) / (POWER_MAX - POWER_MIN)) * 100
  ));

  // ──────────────────────────────────────────────
  // Bobot prioritas (total bobot = 1,00)
  // ──────────────────────────────────────────────
  let finalScore = 0;

  if (priority === 'price') {
    // Fokus penghematan: C1 dominan
    finalScore =
      priceScore    * 0.55 +
      perfScore     * 0.20 +
      ratingScore   * 0.15 +
      warrantyScore * 0.10;

  } else if (priority === 'performance') {
    // Fokus performa: C2 dominan
    finalScore =
      perfScore     * 0.60 +
      ratingScore   * 0.20 +
      priceScore    * 0.15 +
      warrantyScore * 0.05;

  } else if (priority === 'efficiency') {
    // Fokus hemat energi: efisiensi daya + performa per watt
    finalScore =
      efficiencyScore * 0.40 +
      perfScore       * 0.25 +
      priceScore      * 0.20 +
      ratingScore     * 0.15;

  } else {
    // Seimbang: bobot proporsional, performa sedikit lebih penting
    finalScore =
      perfScore     * 0.35 +
      priceScore    * 0.25 +
      ratingScore   * 0.25 +
      warrantyScore * 0.15;
  }

  return {
    priceScore,
    perfScore,
    ratingScore,
    warrantyScore,
    finalScore,
    matchScore: Math.round(Math.min(100, Math.max(0, finalScore))),
  };
};

export const searchRecommendation = (
  products: Product[],
  filters: SearchFilters
): RecommendationResult[] => {
  const { budget, cpu, ram, storage, vga, priority } = filters;

  const scored: RecommendationResult[] = products
    .filter(p => {
      if (p.price > budget)              return false;
      if (cpu     && p.cpu !== cpu)      return false;
      if (ram     && p.ram < parseInt(ram)) return false;
      if (storage && p.storage !== storage) return false;
      if (vga     && p.vga !== vga)      return false;
      return true;
    })
    .map(p => ({ ...p, ...calculateScores(p, budget, priority) }));

  scored.sort((a, b) => b.finalScore - a.finalScore);
  return scored;
};

export const getCPUOptions     = () => ['entry', 'mid', 'high'] as const;
export const getRAMOptions     = () => ['4', '8', '16', '32', '64'] as const;
export const getStorageOptions = () => ['hdd', 'ssd', 'nvme'] as const;
export const getVGAOptions     = () => ['integrated', 'entry', 'mid', 'high'] as const;

export const getPriorityOptions = (): { value: Priority; label: string }[] => [
  { value: 'price',       label: 'Hemat Harga'    },
  { value: 'performance', label: 'Performa Tinggi' },
  { value: 'efficiency',  label: 'Hemat Energi'    },
  { value: 'balanced',    label: 'Seimbang'        },
];
