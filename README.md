# 💻 PC Recommendation System - Next.js Version

Sistem rekomendasi PC berbasis metode **Weighted Scoring (DSS)** yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS.

## 🎯 Fitur Utama

✅ **Multi-Criteria Decision Making (MCDM)**
- Penilaian berdasarkan 4 kriteria: Price, Performance, Rating, Warranty
- Algoritma Weighted Scoring untuk perhitungan objective

✅ **4 Mode Prioritas**
- 💰 **Price** - Fokus hemat harga
- 🚀 **Performance** - Fokus performa tinggi
- ⚡ **Efficiency** - Fokus hemat energi
- ⚖️ **Balanced** - Kombinasi seimbang (default)

✅ **Filter Pencarian Lengkap**
- Budget slider (Rp 3-30 Juta)
- CPU Type (Entry/Mid/High)
- RAM Minimum (4GB-32GB)
- Storage Type (HDD/SSD/NVMe)
- VGA Type (Integrated/Entry/Mid/High)

✅ **Hasil Rekomendasi Komprehensif**
- Ranking dengan medal (🏆 🥈 🥉)
- Match Score (0-100%)
- Detail spesifikasi produk
- Star rating dari pengguna
- Info garansi

✅ **UI/UX Modern**
- Responsive design (mobile-friendly)
- Gradient backgrounds
- Smooth animations
- Card-based layout
- Real-time filtering

## 🛠️ Tech Stack

```
Framework:   Next.js 16.2.7
Language:    TypeScript
Styling:     Tailwind CSS
Icons:       Lucide React
Runtime:     Node.js v22+
Package:     npm (Turbopack)
```

## 📁 Struktur Project

```
app/
├── page.tsx                 # Main page (home)
├── components/
│   ├── SearchForm.tsx      # Filter & search form
│   └── Results.tsx         # Recommendation results display
├── lib/
│   ├── products.ts         # Product database (18 items)
│   └── recommendation.ts   # DSS algorithm & calculation
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Server akan berjalan di `http://localhost:3000`

### 3. Build untuk Production
```bash
npm run build
npm start
```

## 📊 Metode Perhitungan (DSS)

### Price Score (Cost Criteria)
```
PriceScore = (Budget - HargaProduk) / Budget × 100
```

### Performance Score (Benefit Criteria)
```
PerfScore = (CPUScore + RAMScore + StorageScore + VGAScore) / 4
```

### Rating Score (Benefit Criteria)
```
RatingScore = (Rating / 5) × 100
```

### Warranty Score (Benefit Criteria)
```
WarrantyScore = min(Tahun × 20, 100)
```

### Final Score (Weighted)
```
FinalScore = Σ(Score × Bobot) sesuai prioritas yang dipilih
```

### Bobot Berdasarkan Prioritas

**Priority = PRICE (Hemat Harga)**
- Price: 60%, Performance: 20%, Rating: 15%, Warranty: 5%

**Priority = PERFORMANCE (Performa Tinggi)**
- Performance: 60%, Rating: 20%, Price: 15%, Warranty: 5%

**Priority = EFFICIENCY (Hemat Energi)**
- Efficiency: 40%, Performance: 30%, Price: 20%, Rating: 10%

**Priority = BALANCED (Seimbang)**
- Performance: 35%, Price: 25%, Rating: 25%, Warranty: 15%

## 💾 Database Produk

Sistem menyimpan 18 PC dengan spesifikasi lengkap:
- Brand ternama (ASUS, Lenovo, Dell, HP, MSI, MacBook, dsb)
- Harga: Rp 5.5 Juta - Rp 17 Juta
- CPU: Entry level hingga High-end
- RAM: 8GB - 32GB
- Storage: HDD, SSD, NVMe
- VGA: Integrated hingga RTX 4090

File: `app/lib/products.ts`

## 🔧 Customization

### Menambah Produk Baru
Edit `app/lib/products.ts`:
```typescript
{
  id: 19,
  name: "PC Name",
  price: 9.5,
  cpu: "mid",
  ram: 16,
  storage: "ssd",
  vga: "entry",
  specs: { /* ... */ },
  rating: 4.5,
  warranty: 2,
  powerUsage: 50
}
```

### Mengubah Bobot Prioritas
Edit `app/lib/recommendation.ts` dalam fungsi `calculateScores()`:
```typescript
if (priority === 'custom') {
  finalScore = score1 * 0.5 + score2 * 0.3 + score3 * 0.15 + score4 * 0.05;
}
```

### Styling & Theme
Semua styling menggunakan Tailwind CSS. Edit di component files:
- `app/components/SearchForm.tsx`
- `app/components/Results.tsx`
- `app/page.tsx`

## 📈 Cara Penggunaan

1. **Set Budget** - Geser slider untuk budget maksimal PC
2. **Pilih Filter** (Optional) - CPU, RAM, Storage, VGA
3. **Pilih Prioritas** - Price/Performance/Efficiency/Balanced
4. **Klik "CARI REKOMENDASI"** - Sistem akan menghitung
5. **Lihat Hasil** - Ranking PC dengan Match Score
6. **Bandingkan** - Lihat detail spesifikasi setiap produk

## 🎓 Edukasi DSS

Metode **Weighted Scoring** adalah MCDM yang:
- ✅ Objektif (berbasis data)
- ✅ Transparan (terlihat proses keputusan)
- ✅ Fleksibel (bobot dapat disesuaikan)
- ✅ Mudah dipahami (score 0-100%)
- ✅ Cepat komputasi (real-time)

Ideal untuk:
- Pemilihan produk
- Evaluasi vendor
- Analisis investasi
- Pengambilan keputusan multi-faktor

## 📝 File Penting

- **package.json** - Dependencies & scripts
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.ts** - Tailwind CSS config
- **next.config.ts** - Next.js configuration
- **.gitignore** - Files to ignore in git

## 🌐 Deployment

Sistem dapat di-deploy di:
- **Vercel** (Recommended - seamless Next.js support)
- **Netlify**
- **GitHub Pages**
- **Docker Container**
- **VPS/Cloud Server**

## 📞 Troubleshooting

### Port 3000 sudah terpakai
```bash
npm run dev -- -p 3001
```

### Module not found error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build error
```bash
npm run build -- --debug
```

## 📚 Referensi

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## 📄 License

MIT License - Bebas digunakan dan dimodifikasi

---

**Dibuat:** Juni 2026  
**Status:** Production Ready ✅  
**Last Updated:** 2026-06-03
