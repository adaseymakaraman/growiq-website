# GrowIQ AI — growiqai.net

Next.js 14 (App Router) + TypeScript. Tek sayfalık tanıtım sitesi.

## Çalıştırma
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # yayın öncesi kontrol
```

## Nereyi düzenlerim?
- **Tüm metinler:** `lib/content.ts` (hizmetler, süreç, kayan şerit, otomasyon örnekleri, yorumlar)
- **Renkler ve animasyonlar:** `app/globals.css` (en üstteki `:root` değişkenleri)
- **İletişim formu:** `components/ContactForm.tsx` (Formspree'ye gönderir)
- **Chatbot:** `components/Chatbot.tsx` (şimdilik kurallı yanıtlar; sonraki adımda Claude API'ye bağlanacak)
- **Logo:** `public/logo-white.png`

## Yorumlar
`lib/content.ts` içindeki yorumlar örnektir ve `SHOW_TESTIMONIALS = false` ile gizlidir.
Gerçek, izinli müşteri yorumlarınız olduğunda metinleri değiştirip `true` yapın.

## Yayın
Vercel'e bağlıdır; `main` dalına her gönderim otomatik yayınlanır.
