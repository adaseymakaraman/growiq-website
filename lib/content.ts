// Sitedeki tüm metinler burada. Metin değiştirmek için sadece bu dosyayı düzenleyin.

export const site = {
  name: "GrowIQ AI",
  url: "https://growiqai.net",
  email: "info@growiq.net",
  instagram: "https://instagram.com/growiq.ai",
  instagramHandle: "@growiq.ai",
  // Formspree form kimliği (iletişim formu bu adrese gönderilir)
  formspreeId: "xaqvpplk",
};

export const services = [
  {
    no: "01",
    title: "AI Süreç Otomasyonu",
    text: "Operasyon, finans ve ekip içi tekrarlayan işleri AI destekli sistemlere devrediyoruz: teklif hazırlama, fatura işleme, raporlama, doküman ve veri girişi.",
    tags: [] as string[],
  },
  {
    no: "02",
    title: "Kişiselleştirilmiş AI Danışmanlığı",
    text: "Birebir stratejik rehberlik ve işletmenize özel bir AI yol haritası: hangi işler otomatikleşir, hangi araçlar uygun, nereden başlanır.",
    tags: [] as string[],
  },
];

export const steps = [
  { no: "01", title: "Keşif görüşmesi", text: "Zaman kaybettiren süreçlerinizi birlikte listeliyoruz." },
  { no: "02", title: "Otomasyon planı", text: "Hangi işin, hangi araçla otomatikleşeceğini netleştiriyoruz." },
  { no: "03", title: "Kurulum ve teslim", text: "Sistemi kuruyor, test ediyor ve ekibinize hazır şekilde teslim ediyoruz." },
];

export const marquee = [
  "Teklif hazırlama",
  "Fatura işleme",
  "Raporlama",
  "Doküman özetleme",
  "Veri girişi",
  "İşe alım ön eleme",
  "Stok takibi",
  "Toplantı notları",
];

type Step = { kind: "msg" | "ai" | "ok"; title: string; sub: string };
export const flowExamples: { name: string; steps: Step[] }[] = [
  {
    name: "Teklif hazırlama",
    steps: [
      { kind: "msg", title: "Toplantı notu yüklendi", sub: "Google Drive" },
      { kind: "ai", title: "AI teklif taslağı yazıyor", sub: "Fiyat listesi + şablon" },
      { kind: "ok", title: "PDF teklif onaya hazır", sub: "Yöneticiye bildirim" },
    ],
  },
  {
    name: "Fatura işleme",
    steps: [
      { kind: "msg", title: "Fatura e-postayla geldi", sub: "PDF ek" },
      { kind: "ai", title: "AI bilgileri okuyor", sub: "Tutar, tarih, tedarikçi" },
      { kind: "ok", title: "Muhasebe tablosuna işlendi", sub: "Elle veri girişi yok" },
    ],
  },
  {
    name: "Haftalık raporlama",
    steps: [
      { kind: "msg", title: "Pazartesi 09:00", sub: "Zamanlanmış tetikleyici" },
      { kind: "ai", title: "AI verileri topluyor", sub: "Sipariş + stok + finans" },
      { kind: "ok", title: "Rapor yöneticinin e-postasında", sub: "Özet ve öneriler" },
    ],
  },
  {
    name: "Doküman özetleme",
    steps: [
      { kind: "msg", title: "Yeni sözleşme yüklendi", sub: "Ortak klasör" },
      { kind: "ai", title: "AI özetliyor", sub: "Önemli maddeler işaretlenir" },
      { kind: "ok", title: "Özet ekibe iletildi", sub: "Okuma süresi kısalır" },
    ],
  },
  {
    name: "İşe alım ön eleme",
    steps: [
      { kind: "msg", title: "Yeni başvuru geldi", sub: "CV + form" },
      { kind: "ai", title: "AI kriterlere göre eşleştiriyor", sub: "Deneyim, beceri, konum" },
      { kind: "ok", title: "Kısa liste İK'da", sub: "Son karar ekibinizde" },
    ],
  },
];
