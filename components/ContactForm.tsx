"use client";

import { useState } from "react";
import { services, site } from "@/lib/content";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-2">
        <label>Ad Soyad *<input name="name" required autoComplete="name" /></label>
        <label>E-posta *<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="form-2">
        <label>Şirket<input name="company" autoComplete="organization" /></label>
        <label>
          İlgilendiğiniz hizmet *
          <select name="service" required defaultValue="">
            <option value="" disabled>Seçin</option>
            {services.map((s) => <option key={s.no} value={s.title}>{s.title}</option>)}
            <option value="Diğer / Emin değilim">Diğer / Emin değilim</option>
          </select>
        </label>
      </div>
      <label>Mesajınız *<textarea name="message" required placeholder="Hangi işleriniz en çok vaktinizi alıyor?" /></label>
      <label className="check">
        <input type="checkbox" name="consent" value="evet" required />
        <span>Paylaştığım bilgilerin benimle iletişime geçilmesi amacıyla işlenmesini kabul ediyorum.</span>
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Gönderiliyor…" : "Mesaj Gönder"}
      </button>
      <p className="form-msg" role="status" aria-live="polite">
        {status === "ok" && "Teşekkürler! Mesajınız ulaştı, en kısa sürede dönüş yapacağız."}
        {status === "error" && `Bir sorun oluştu. Lütfen ${site.email} adresine e-posta gönderin.`}
      </p>
    </form>
  );
}
