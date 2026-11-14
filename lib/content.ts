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
    text: "Tekrarlayan iş akışlarınızı AI destekli sistemlerle değiştiriyoruz: lead takibi, teklif, raporlama, müşteri yanıtları.",
    tags: [] as string[],
  },
  {
    no: "02",
    title: "Kişiselleştirilmiş AI Danışmanlığı",
    text: "Birebir stratejik rehberlik ve işletmenize özel bir AI yol haritası.",
    tags: [] as string[],
  },
  {
    no: "03",
    title: "AI Reklamcılığı",
    text: "Markanızın ChatGPT, Gemini ve Perplexity yanıtlarında görünürlüğünü artırıyor (GEO), ChatGPT reklam kampanyalarınızı kurup yönetiyoruz.",
    tags: ["GEO", "ChatGPT Ads"],
  },
];

export const steps = [
  { no: "01", title: "Keşif görüşmesi", text: "Zaman kaybettiren süreçlerinizi birlikte listeliyoruz." },
  { no: "02", title: "Otomasyon planı", text: "Hangi işin, hangi araçla otomatikleşeceğini netleştiriyoruz." },
  { no: "03", title: "Kurulum ve teslim", text: "Sistemi kuruyor, test ediyor ve ekibinize hazır şekilde teslim ediyoruz." },
];

export const marquee = [
  "Lead takibi",
  "Teklif hazırlama",
  "Raporlama",
  "Müşteri yanıtları",
  "İçerik planı",
  "Randevu hatırlatma",
  "ChatGPT reklamları",
  "GEO",
];

type Step = { kind: "msg" | "ai" | "ok"; title: string; sub: string };
export const flowExamples: { name: string; steps: Step[] }[] = [
  {
    name: "Lead yönetimi",
    steps: [
      { kind: "msg", title: "Yeni lead geldi", sub: "Web formu · Instagram DM" },
      { kind: "ai", title: "AI analiz ediyor", sub: "Niyet, bütçe, öncelik" },
      { kind: "ok", title: "CRM'e eklendi, yanıt gitti", sub: "Satış ekibine bildirim" },
    ],
  },
  {
    name: "E-ticaret destek",
    steps: [
      { kind: "msg", title: "“Kargom nerede?”", sub: "WhatsApp mesajı" },
      { kind: "ai", title: "AI siparişi buluyor", sub: "Mağaza paneli + kargo" },
      { kind: "ok", title: "Takip linkiyle yanıtlandı", sub: "Destek ekibine iş düşmedi" },
    ],
  },
  {
    name: "Teklif hazırlama",
    steps: [
      { kind: "msg", title: "Toplantı notu yüklendi", sub: "Google Drive" },
      { kind: "ai", title: "AI teklif taslağı yazıyor", sub: "Fiyat listesi + şablon" },
      { kind: "ok", title: "PDF teklif müşteride", sub: "Onay için takip hatırlatması" },
    ],
  },
  {
    name: "Haftalık raporlama",
    steps: [
      { kind: "msg", title: "Pazartesi 09:00", sub: "Zamanlanmış tetikleyici" },
      { kind: "ai", title: "AI verileri topluyor", sub: "Reklam + satış + CRM" },
      { kind: "ok", title: "Rapor yöneticinin e-postasında", sub: "Özet ve öneriler" },
    ],
  },
  {
    name: "Randevu hatırlatma",
    steps: [
      { kind: "msg", title: "Yarın 3 randevu var", sub: "Takvim" },
      { kind: "ai", title: "AI kişisel mesaj yazıyor", sub: "İsim, saat, adres" },
      { kind: "ok", title: "WhatsApp'tan onay alındı", sub: "Gelmeyenler azalıyor" },
    ],
  },
];
