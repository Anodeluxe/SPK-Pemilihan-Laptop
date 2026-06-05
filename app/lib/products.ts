import { Product } from '@/app/types';

export const products: Product[] = [
  {
    id: 1,
    name: "ASUS VivoBook 15",
    price: 6.5,
    cpu: "mid",
    ram: 8,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i5-1235U",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 20
    },
    rating: 4.5,
    warranty: 2,
    powerUsage: 20,
    image: "https://picsum.photos/seed/laptop1/400/300"
  },
  {
    id: 2,
    name: "Lenovo Ideapad 5",
    price: 7.8,
    cpu: "mid",
    ram: 8,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "AMD Ryzen 5 5500U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      vga: "Radeon Graphics",
      powerUsage: 25
    },
    rating: 4.2,
    warranty: 1,
    powerUsage: 25,
    image: "https://picsum.photos/seed/laptop2/400/300"
  },
  {
    id: 3,
    name: "Dell Inspiron 15",
    price: 7.5,
    cpu: "mid",
    ram: 8,
    storage: "ssd",
    vga: "entry",
    specs: {
      cpu: "Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      vga: "Nvidia MX350 (2GB)",
      powerUsage: 35
    },
    rating: 4.7,
    warranty: 1,
    powerUsage: 35,
    image: "https://picsum.photos/seed/laptop3/400/300"
  },
  {
    id: 4,
    name: "HP Pavilion 14",
    price: 8.2,
    cpu: "mid",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-1165G7",
      ram: "16GB DDR4",
      storage: "256GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 22
    },
    rating: 4.3,
    warranty: 2,
    powerUsage: 22,
    image: "https://picsum.photos/seed/laptop4/400/300"
  },
  {
    id: 5,
    name: "MSI GF63 Thin",
    price: 9.5,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "mid",
    specs: {
      cpu: "Intel Core i7-10750H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Nvidia RTX 3050 (4GB)",
      powerUsage: 90
    },
    rating: 4.4,
    warranty: 2,
    powerUsage: 90,
    image: "https://picsum.photos/seed/laptop5/400/300"
  },
  {
    id: 6,
    name: "ASUS TUF Gaming F15",
    price: 11.0,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "mid",
    specs: {
      cpu: "Intel Core i7-11800H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Nvidia RTX 3050 Ti (4GB)",
      powerUsage: 120
    },
    rating: 4.6,
    warranty: 2,
    powerUsage: 120,
    image: "https://picsum.photos/seed/laptop6/400/300"
  },
  {
    id: 7,
    name: "Acer Aspire 5",
    price: 6.8,
    cpu: "mid",
    ram: 8,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "AMD Ryzen 5 5500U",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      vga: "Radeon Graphics",
      powerUsage: 21
    },
    rating: 4.1,
    warranty: 1,
    powerUsage: 21,
    image: "https://picsum.photos/seed/laptop7/400/300"
  },
  {
    id: 8,
    name: "MacBook Air M2",
    price: 14.5,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Apple M2",
      ram: "16GB Unified Memory",
      storage: "256GB SSD",
      vga: "8-Core GPU",
      powerUsage: 18
    },
    rating: 4.8,
    warranty: 1,
    powerUsage: 18,
    image: "https://picsum.photos/seed/laptop8/400/300"
  },
  {
    id: 9,
    name: "Huawei Matebook D15",
    price: 5.5,
    cpu: "entry",
    ram: 8,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "AMD Ryzen 5 3500U",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      vga: "Vega Graphics",
      powerUsage: 18
    },
    rating: 3.9,
    warranty: 1,
    powerUsage: 18,
    image: "https://picsum.photos/seed/laptop9/400/300"
  },
  {
    id: 10,
    name: "Asus ROG Gaming",
    price: 15.5,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core i9-12900H",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "Nvidia RTX 3080 Ti (12GB)",
      powerUsage: 200
    },
    rating: 4.9,
    warranty: 3,
    powerUsage: 200,
    image: "https://picsum.photos/seed/laptop10/400/300"
  },
  {
    id: 11,
    name: "Lenovo ThinkPad E15",
    price: 8.5,
    cpu: "mid",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i5-1135G7",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 26
    },
    rating: 4.5,
    warranty: 2,
    powerUsage: 26,
    image: "https://picsum.photos/seed/laptop11/400/300"
  },
  {
    id: 12,
    name: "Dell XPS 13",
    price: 12.8,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-1280P",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 19
    },
    rating: 4.7,
    warranty: 1,
    powerUsage: 19,
    image: "https://picsum.photos/seed/laptop12/400/300"
  },
  {
    id: 13,
    name: "HP EliteBook 14",
    price: 9.2,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-1255U",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 24
    },
    rating: 4.4,
    warranty: 3,
    powerUsage: 24,
    image: "https://picsum.photos/seed/laptop13/400/300"
  },
  {
    id: 14,
    name: "Razer Blade 15",
    price: 17.0,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core i9-13900H",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "Nvidia RTX 4090 (16GB)",
      powerUsage: 180
    },
    rating: 4.8,
    warranty: 2,
    powerUsage: 180,
    image: "https://picsum.photos/seed/laptop14/400/300"
  },
  {
    id: 15,
    name: "Samsung Galaxy Book3",
    price: 10.5,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-13700H",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 28
    },
    rating: 4.5,
    warranty: 2,
    powerUsage: 28,
    image: "https://picsum.photos/seed/laptop15/400/300"
  },
  {
    id: 16,
    name: "Xiaomi Mi Notebook Pro",
    price: 7.2,
    cpu: "mid",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-1195G7",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 23
    },
    rating: 4.2,
    warranty: 1,
    powerUsage: 23,
    image: "https://picsum.photos/seed/laptop16/400/300"
  },
  {
    id: 17,
    name: "LG Gram 14",
    price: 9.8,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-1260P",
      ram: "16GB DDR5",
      storage: "256GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 20
    },
    rating: 4.6,
    warranty: 1,
    powerUsage: 20,
    image: "https://picsum.photos/seed/laptop17/400/300"
  },
  {
    id: 18,
    name: "ASUS ZenBook 13",
    price: 8.9,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-1260P",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 21
    },
    rating: 4.5,
    warranty: 2,
    powerUsage: 21,
    image: "https://picsum.photos/seed/laptop18/400/300"
  },

  // ── Tambahan produk ─────────────────────────────────────────────────────
  {
    id: 19,
    name: "Acer Aspire 3 A315",
    price: 4.8,
    cpu: "entry",
    ram: 8,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "AMD Ryzen 3 3250U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      vga: "Radeon Vega 3",
      powerUsage: 15
    },
    rating: 3.8,
    warranty: 1,
    powerUsage: 15,
    image: "https://picsum.photos/seed/laptop19/400/300"
  },
  {
    id: 20,
    name: "Lenovo IdeaPad 1 15ALC7",
    price: 4.2,
    cpu: "entry",
    ram: 4,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "AMD Athlon Silver 3050U",
      ram: "4GB DDR4",
      storage: "256GB SSD",
      vga: "Radeon Graphics",
      powerUsage: 15
    },
    rating: 3.6,
    warranty: 1,
    powerUsage: 15,
    image: "https://picsum.photos/seed/laptop20/400/300"
  },
  {
    id: 21,
    name: "ASUS VivoBook 14 X1404",
    price: 7.9,
    cpu: "mid",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i5-1335U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 22
    },
    rating: 4.3,
    warranty: 2,
    powerUsage: 22,
    image: "https://picsum.photos/seed/laptop21/400/300"
  },
  {
    id: 22,
    name: "HP Victus 15",
    price: 11.5,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "mid",
    specs: {
      cpu: "Intel Core i5-12500H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Nvidia RTX 3050 (4GB)",
      powerUsage: 95
    },
    rating: 4.3,
    warranty: 1,
    powerUsage: 95,
    image: "https://picsum.photos/seed/laptop22/400/300"
  },
  {
    id: 23,
    name: "Lenovo IdeaPad Gaming 3",
    price: 9.9,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "entry",
    specs: {
      cpu: "Intel Core i5-12450H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Nvidia GTX 1650 (4GB)",
      powerUsage: 80
    },
    rating: 4.2,
    warranty: 1,
    powerUsage: 80,
    image: "https://picsum.photos/seed/laptop23/400/300"
  },
  {
    id: 24,
    name: "ASUS ROG Zephyrus G14 2024",
    price: 18.5,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "AMD Ryzen 9 8945HS",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "AMD RX 7600S (8GB)",
      powerUsage: 100
    },
    rating: 4.9,
    warranty: 2,
    powerUsage: 100,
    image: "https://picsum.photos/seed/laptop24/400/300"
  },
  {
    id: 25,
    name: "Dell G15 5520",
    price: 12.5,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "mid",
    specs: {
      cpu: "Intel Core i7-12700H",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      vga: "Nvidia RTX 3060 (6GB)",
      powerUsage: 130
    },
    rating: 4.6,
    warranty: 1,
    powerUsage: 130,
    image: "https://picsum.photos/seed/laptop25/400/300"
  },
  {
    id: 26,
    name: "MSI Katana GF66",
    price: 13.8,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "mid",
    specs: {
      cpu: "Intel Core i7-12650H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Nvidia RTX 3060 (6GB)",
      powerUsage: 125
    },
    rating: 4.4,
    warranty: 1,
    powerUsage: 125,
    image: "https://picsum.photos/seed/laptop26/400/300"
  },
  {
    id: 27,
    name: "MacBook Pro M2 14\"",
    price: 22.5,
    cpu: "high",
    ram: 16,
    storage: "nvme",
    vga: "integrated",
    specs: {
      cpu: "Apple M2 Pro",
      ram: "16GB Unified Memory",
      storage: "512GB NVMe SSD",
      vga: "19-Core GPU",
      powerUsage: 20
    },
    rating: 4.9,
    warranty: 1,
    powerUsage: 20,
    image: "https://picsum.photos/seed/laptop27/400/300"
  },
  {
    id: 28,
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    price: 19.5,
    cpu: "high",
    ram: 16,
    storage: "nvme",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-1365U",
      ram: "16GB LPDDR5",
      storage: "512GB NVMe SSD",
      vga: "Intel Iris Xe",
      powerUsage: 17
    },
    rating: 4.7,
    warranty: 3,
    powerUsage: 17,
    image: "https://picsum.photos/seed/laptop28/400/300"
  },
  {
    id: 29,
    name: "Acer Predator Helios 300",
    price: 14.5,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "high",
    specs: {
      cpu: "Intel Core i7-12700H",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      vga: "Nvidia RTX 3070 Ti (8GB)",
      powerUsage: 150
    },
    rating: 4.7,
    warranty: 2,
    powerUsage: 150,
    image: "https://picsum.photos/seed/laptop29/400/300"
  },
  {
    id: 30,
    name: "HP Envy x360 15",
    price: 12.9,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "entry",
    specs: {
      cpu: "Intel Core i7-1255U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      vga: "Nvidia RTX 2050 (4GB)",
      powerUsage: 45
    },
    rating: 4.5,
    warranty: 1,
    powerUsage: 45,
    image: "https://picsum.photos/seed/laptop30/400/300"
  },

  // ── PCMag / Tom's Hardware / Wirecutter picks ────────────────────────────
  {
    id: 31,
    name: "MacBook Air M3 13\"",
    price: 20.0,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Apple M3",
      ram: "16GB Unified Memory",
      storage: "512GB SSD",
      vga: "10-Core GPU",
      powerUsage: 15
    },
    rating: 4.8,
    warranty: 1,
    powerUsage: 15,
    image: "https://picsum.photos/seed/laptop31/400/300"
  },
  {
    id: 32,
    name: "Microsoft Surface Laptop 5 15\"",
    price: 20.0,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core i7-1265U",
      ram: "16GB LPDDR5x",
      storage: "512GB SSD",
      vga: "Intel Iris Xe",
      powerUsage: 25
    },
    rating: 4.5,
    warranty: 1,
    powerUsage: 25,
    image: "https://picsum.photos/seed/laptop32/400/300"
  },
  {
    id: 33,
    name: "HP Spectre x360 14\"",
    price: 21.5,
    cpu: "high",
    ram: 16,
    storage: "nvme",
    vga: "integrated",
    specs: {
      cpu: "Intel Core Ultra 7 155H",
      ram: "16GB LPDDR5",
      storage: "512GB NVMe SSD",
      vga: "Intel Arc Graphics",
      powerUsage: 28
    },
    rating: 4.6,
    warranty: 1,
    powerUsage: 28,
    image: "https://picsum.photos/seed/laptop33/400/300"
  },
  {
    id: 34,
    name: "ASUS Zenbook 14 OLED",
    price: 13.9,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "integrated",
    specs: {
      cpu: "Intel Core Ultra 7 155H",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      vga: "Intel Arc Graphics",
      powerUsage: 25
    },
    rating: 4.5,
    warranty: 1,
    powerUsage: 25,
    image: "https://picsum.photos/seed/laptop34/400/300"
  },
  {
    id: 35,
    name: "Dell XPS 15 9530",
    price: 23.0,
    cpu: "high",
    ram: 16,
    storage: "nvme",
    vga: "mid",
    specs: {
      cpu: "Intel Core i7-13700H",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      vga: "Nvidia RTX 4060 (8GB)",
      powerUsage: 130
    },
    rating: 4.7,
    warranty: 1,
    powerUsage: 130,
    image: "https://picsum.photos/seed/laptop35/400/300"
  },
  {
    id: 36,
    name: "Framework Laptop 13 (AMD)",
    price: 16.2,
    cpu: "high",
    ram: 16,
    storage: "nvme",
    vga: "integrated",
    specs: {
      cpu: "AMD Ryzen 7 7840U",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      vga: "AMD Radeon 780M",
      powerUsage: 28
    },
    rating: 4.4,
    warranty: 1,
    powerUsage: 28,
    image: "https://picsum.photos/seed/laptop36/400/300"
  },
  {
    id: 37,
    name: "Lenovo Yoga 9i 14\"",
    price: 21.5,
    cpu: "high",
    ram: 16,
    storage: "nvme",
    vga: "integrated",
    specs: {
      cpu: "Intel Core Ultra 7 155H",
      ram: "16GB LPDDR5",
      storage: "512GB NVMe SSD",
      vga: "Intel Arc Graphics",
      powerUsage: 30
    },
    rating: 4.6,
    warranty: 1,
    powerUsage: 30,
    image: "https://picsum.photos/seed/laptop37/400/300"
  },
  {
    id: 38,
    name: "Samsung Galaxy Book4 Pro 16\"",
    price: 22.0,
    cpu: "high",
    ram: 16,
    storage: "nvme",
    vga: "integrated",
    specs: {
      cpu: "Intel Core Ultra 7 155H",
      ram: "16GB LPDDR5",
      storage: "512GB NVMe SSD",
      vga: "Intel Arc Graphics",
      powerUsage: 25
    },
    rating: 4.6,
    warranty: 1,
    powerUsage: 25,
    image: "https://picsum.photos/seed/laptop38/400/300"
  },
  {
    id: 39,
    name: "HP Omen 16",
    price: 17.0,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "mid",
    specs: {
      cpu: "AMD Ryzen 7 7745HX",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      vga: "Nvidia RTX 4060 (8GB)",
      powerUsage: 140
    },
    rating: 4.5,
    warranty: 1,
    powerUsage: 140,
    image: "https://picsum.photos/seed/laptop39/400/300"
  },
  {
    id: 40,
    name: "Lenovo Legion Pro 5i Gen 8",
    price: 20.0,
    cpu: "high",
    ram: 16,
    storage: "ssd",
    vga: "mid",
    specs: {
      cpu: "Intel Core i7-13700HX",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      vga: "Nvidia RTX 4060 (8GB)",
      powerUsage: 165
    },
    rating: 4.7,
    warranty: 1,
    powerUsage: 165,
    image: "https://picsum.photos/seed/laptop40/400/300"
  },
  {
    id: 41,
    name: "ASUS ROG Zephyrus G16 2024",
    price: 29.5,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core Ultra 9 185H",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "Nvidia RTX 4090 (16GB)",
      powerUsage: 175
    },
    rating: 4.8,
    warranty: 2,
    powerUsage: 175,
    image: "https://picsum.photos/seed/laptop41/400/300"
  },
  {
    id: 42,
    name: "Dell XPS 14 9440",
    price: 20.0,
    cpu: "high",
    ram: 16,
    storage: "nvme",
    vga: "entry",
    specs: {
      cpu: "Intel Core Ultra 7 155H",
      ram: "16GB LPDDR5",
      storage: "512GB NVMe SSD",
      vga: "Nvidia RTX 4050 (6GB)",
      powerUsage: 60
    },
    rating: 4.6,
    warranty: 1,
    powerUsage: 60,
    image: "https://picsum.photos/seed/laptop42/400/300"
  },

  // ── Premium 30jt+ ────────────────────────────────────────────────────────
  {
    id: 43,
    name: "Dell XPS 17 9730",
    price: 32.5,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "mid",
    specs: {
      cpu: "Intel Core i9-13900H",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "Nvidia RTX 4070 (8GB)",
      powerUsage: 90
    },
    rating: 4.7,
    warranty: 1,
    powerUsage: 90,
    image: "https://picsum.photos/seed/laptop43/400/300"
  },
  {
    id: 44,
    name: "ASUS ROG Strix SCAR 16 2024",
    price: 37.0,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core i9-14900HX",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "Nvidia RTX 4080 (12GB)",
      powerUsage: 175
    },
    rating: 4.8,
    warranty: 2,
    powerUsage: 175,
    image: "https://picsum.photos/seed/laptop44/400/300"
  },
  {
    id: 45,
    name: "Lenovo ThinkPad X1 Extreme Gen 5",
    price: 39.5,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "mid",
    specs: {
      cpu: "Intel Core i9-12900H",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "Nvidia RTX 3080 Ti (16GB)",
      powerUsage: 80
    },
    rating: 4.7,
    warranty: 3,
    powerUsage: 80,
    image: "https://picsum.photos/seed/laptop45/400/300"
  },
  {
    id: 46,
    name: "MacBook Pro M3 Pro 16\"",
    price: 45.0,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "integrated",
    specs: {
      cpu: "Apple M3 Pro",
      ram: "36GB Unified Memory",
      storage: "512GB NVMe SSD",
      vga: "18-Core GPU",
      powerUsage: 30
    },
    rating: 4.9,
    warranty: 1,
    powerUsage: 30,
    image: "https://picsum.photos/seed/laptop46/400/300"
  },
  {
    id: 47,
    name: "Lenovo ThinkPad P1 Gen 5",
    price: 52.0,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "mid",
    specs: {
      cpu: "Intel Core i9-12900H",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "Nvidia RTX 3080 (16GB)",
      powerUsage: 100
    },
    rating: 4.6,
    warranty: 3,
    powerUsage: 100,
    image: "https://picsum.photos/seed/laptop47/400/300"
  },
  {
    id: 48,
    name: "Razer Blade 16 2024",
    price: 48.5,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core i9-14900HX",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      vga: "Nvidia RTX 4090 (16GB)",
      powerUsage: 200
    },
    rating: 4.8,
    warranty: 2,
    powerUsage: 200,
    image: "https://picsum.photos/seed/laptop48/400/300"
  },
  {
    id: 49,
    name: "Alienware m18 R2",
    price: 58.0,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core i9-13950HX",
      ram: "32GB DDR5",
      storage: "1TB NVMe SSD",
      vga: "Nvidia RTX 4090 (16GB)",
      powerUsage: 200
    },
    rating: 4.7,
    warranty: 2,
    powerUsage: 200,
    image: "https://picsum.photos/seed/laptop49/400/300"
  },
  {
    id: 50,
    name: "MacBook Pro M3 Max 16\"",
    price: 67.0,
    cpu: "high",
    ram: 64,
    storage: "nvme",
    vga: "integrated",
    specs: {
      cpu: "Apple M3 Max",
      ram: "48GB Unified Memory",
      storage: "1TB NVMe SSD",
      vga: "40-Core GPU",
      powerUsage: 30
    },
    rating: 5.0,
    warranty: 1,
    powerUsage: 30,
    image: "https://picsum.photos/seed/laptop50/400/300"
  },
  {
    id: 51,
    name: "MSI Titan GT77 HX",
    price: 75.0,
    cpu: "high",
    ram: 64,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core i9-13980HX",
      ram: "64GB DDR5",
      storage: "2TB NVMe SSD",
      vga: "Nvidia RTX 4090 (16GB)",
      powerUsage: 200
    },
    rating: 4.7,
    warranty: 1,
    powerUsage: 200,
    image: "https://picsum.photos/seed/laptop51/400/300"
  },
  {
    id: 52,
    name: "ASUS ROG Strix Scar 18 2024",
    price: 82.0,
    cpu: "high",
    ram: 32,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core i9-14900HX",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      vga: "Nvidia RTX 4090 (16GB)",
      powerUsage: 200
    },
    rating: 4.9,
    warranty: 2,
    powerUsage: 200,
    image: "https://picsum.photos/seed/laptop52/400/300"
  },
  {
    id: 53,
    name: "HP ZBook Fury 16 G10",
    price: 95.0,
    cpu: "high",
    ram: 64,
    storage: "nvme",
    vga: "high",
    specs: {
      cpu: "Intel Core i9-13950HX",
      ram: "64GB DDR5",
      storage: "2TB NVMe SSD",
      vga: "Nvidia RTX 5000 Ada (16GB)",
      powerUsage: 120
    },
    rating: 4.6,
    warranty: 3,
    powerUsage: 120,
    image: "https://picsum.photos/seed/laptop53/400/300"
  }
];
