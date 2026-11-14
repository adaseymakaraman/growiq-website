"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { from: "bot" | "me"; text: string };

// GEÇİCİ: Kurallara dayalı basit yanıtlar.
// Bir sonraki adımda bu fonksiyon, Claude API'ye bağlı /api/chat uç noktasıyla değiştirilecek.
function getReply(input: string): string {
  const t = input.toLocaleLowerCase("tr");
  if (/(fiyat|ücret|ne kadar|maliyet|bütçe)/.test(t))
    return "Fiyat, otomasyonun kapsamına göre değişiyor. Kısa bir keşif görüşmesinde ihtiyacınızı netleştirip size özel teklif hazırlıyoruz. Görüşme planlamak ister misiniz?";
  if (/(geo|chatgpt|reklam|perplexity|gemini)/.test(t))
    return "AI reklamcılığında iki şey yapıyoruz: markanızın ChatGPT, Gemini ve Perplexity yanıtlarında görünürlüğünü artırmak (GEO) ve ChatGPT reklam kampanyalarınızı kurup yönetmek. Hangisi ilginizi çekiyor?";
  if (/(lead|crm|müşteri adayı|form)/.test(t))
    return "Gelen leadleri otomatik olarak CRM'e aktarıp önceliklendirebilir, ilk yanıtı anında gönderebiliriz. Hangi CRM'i kullanıyorsunuz?";
  if (/(rapor|excel|tablo|veri)/.test(t))
    return "Reklam, satış ve CRM verilerinizi toplayıp her hafta otomatik rapor olarak e-postanıza gönderebiliriz.";
  if (/(randevu|klinik|hatırlat)/.test(t))
    return "Randevu hatırlatmalarını WhatsApp veya e-posta ile otomatik gönderip onay toplayabiliriz.";
  if (/(süre|ne zaman|kaç gün|hafta)/.test(t))
    return "Süre otomasyonun karmaşıklığına bağlı. Basit akışlar genelde kısa sürede kurulur; net süreyi keşif görüşmesinden sonra paylaşıyoruz.";
  if (/(görüşme|toplantı|iletişim|randevu al)/.test(t))
    return "Harika! Sayfanın altındaki formu doldurabilir ya da info@growiq.net adresine yazabilirsiniz. 24 saat içinde dönüş yapıyoruz.";
  return "Anladım. Bunu nasıl otomatikleştirebileceğimizi en iyi kısa bir görüşmede konuşuruz. İsterseniz sayfanın altındaki formdan görüşme talep edebilirsiniz.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Merhaba! Ben GrowIQ asistanı. Hangi işinizi otomatikleştirmek istersiniz?" },
  ]);
  const [typing, setTyping] = useState(false);
  const [value, setValue] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  function send(text: string) {
    const clean = text.trim();
    if (!clean || typing) return;
    setMsgs((m) => [...m, { from: "me", text: clean }]);
    setValue("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: getReply(clean) }]);
      setTyping(false);
    }, 900);
  }

  return (
    <>
      {open && (
        <div className="chat" role="dialog" aria-label="GrowIQ Asistan">
          <div className="chat-head">
            <div className="av">G</div>
            <div><strong style={{ fontSize: 14 }}>GrowIQ Asistan</strong><small>Genelde birkaç saniyede yanıt verir</small></div>
            <button className="icon-btn" aria-label="Sohbeti kapat" onClick={() => setOpen(false)}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
          <div className="chat-body" ref={bodyRef} aria-live="polite">
            {msgs.map((m, i) => <div key={i} className={`msg ${m.from}`}>{m.text}</div>)}
            {typing && <div className="typing" aria-label="Asistan yazıyor"><i /><i /><i /></div>}
            {msgs.length === 1 && (
              <div className="chips">
                {["Lead takibi", "GEO ve ChatGPT reklamları", "Fiyatlar", "Görüşme planla"].map((c) => (
                  <button key={c} type="button" onClick={() => send(c)}>{c}</button>
                ))}
              </div>
            )}
          </div>
          <form className="chat-form" onSubmit={(e) => { e.preventDefault(); send(value); }}>
            <label htmlFor="chat-input" className="sr">Mesajınız</label>
            <input id="chat-input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Mesajınızı yazın…" maxLength={500} />
            <button type="submit" aria-label="Gönder">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </form>
        </div>
      )}
      <button className="chat-launch" aria-label={open ? "Sohbeti kapat" : "Sohbeti aç"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>
      </button>
    </>
  );
}
