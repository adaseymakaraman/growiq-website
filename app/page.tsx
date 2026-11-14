import Image from "next/image";
import { flowExamples, marquee, services, steps, site } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import Chatbot from "@/components/Chatbot";

const icons = {
  msg: (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v12H5l-1 4z" /></svg>
  ),
  ai: (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8z" /><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></svg>
  ),
  ok: (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#86EFAC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
  ),
};

export default function Home() {
  const delay = (i: number) => ({ animationDelay: `${i * 4}s` });
  return (
    <main className="page">
      <div className="bg" aria-hidden="true">
        <div className="blob b1" style={{ width: 620, height: 620, left: -160, top: -180, background: "#7C3AED", opacity: 0.55 }} />
        <div className="blob b2" style={{ width: 560, height: 560, right: -140, top: 120, background: "#1E3A8A", opacity: 0.7 }} />
        <div className="blob b3" style={{ width: 520, height: 520, left: "30%", top: 900, background: "#4F46E5", opacity: 0.4 }} />
        <div className="blob b1" style={{ width: 480, height: 480, right: "10%", top: 1600, background: "#9333EA", opacity: 0.35 }} />
        <div className="gridbg" />
      </div>

      <div className="container">
        <header className="header fu">
          <a href="#" aria-label="GrowIQ ana sayfa" style={{ display: "flex" }}>
            <Image src="/logo-white.png" alt="GrowIQ" width={116} height={40} priority />
          </a>
          <nav className="nav" aria-label="Ana menü">
            <a className="link" href="#hizmetler">Hizmetler</a>
            <a className="link" href="#surec">Süreç</a>
            <a className="link" href="#iletisim">İletişim</a>
            <a className="btn btn-primary" href="#iletisim">Görüşme Planla</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-text">
            <div className="badge fu d1"><span className="pulse-dot" />AI otomasyon &amp; danışmanlık stüdyosu</div>
            <h1 className="fu d2">İşinizi yapay zekâ ile <span className="shine">büyütün.</span></h1>
            <p className="fu d3">Tekrarlayan işleri otomasyona devredin, ekibiniz büyümeye odaklansın. Stratejiden kuruluma kadar uçtan uca yanınızdayız.</p>
            <div className="row fu d4">
              <a className="btn btn-primary" href="#iletisim">Ücretsiz keşif görüşmesi</a>
              <a className="btn btn-ghost" href="#hizmetler">Neler yapıyoruz?</a>
            </div>
          </div>

          <div className="flow-wrap fu d3">
            <div className="flow">
              <div className="flow-head">
                <span className="eyebrow" style={{ fontSize: 12 }}>Canlı otomasyon akışı</span>
                <span className="pips" aria-hidden="true">
                  {flowExamples.map((_, i) => <span key={i} className="pip" style={delay(i)} />)}
                </span>
              </div>
              <div className="flow-stage">
                {flowExamples.map((ex, i) => (
                  <div key={ex.name} className="ex" style={delay(i)} aria-hidden={i !== 0}>
                    <div className="ex-label">{ex.name}</div>
                    {ex.steps.map((st, j) => (
                      <div key={st.title}>
                        <div className={`step${j === 1 ? " mid" : ""}`}>
                          {icons[st.kind]}
                          <div><strong>{st.title}</strong><span>{st.sub}</span></div>
                        </div>
                        {j < 2 && (
                          <div className={`conn${j === 1 ? " c2" : ""}`}>
                            <i style={{ background: j === 0 ? "#7DA2FF" : "#818CF8", boxShadow: `0 0 12px ${j === 0 ? "#7DA2FF" : "#818CF8"}` }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} style={{ display: "inline-flex", gap: 48 }}>{m}<b>✦</b></span>
          ))}
        </div>
      </div>

      <div className="container">
        <section id="hizmetler" className="section" style={{ paddingTop: 88 }}>
          <div className="eyebrow">Hizmetler</div>
          <div className="grid3">
            {services.map((s) => (
              <div key={s.no} className="card">
                <div style={{ fontFamily: "var(--font-display)", color: "var(--accent)", fontSize: 15 }}>{s.no}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p>{s.text}</p>
                {s.tags.length > 0 && (
                  <div className="row" style={{ gap: 6 }}>{s.tags.map((t) => <span key={t} className="pill">{t}</span>)}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="surec" className="section" style={{ paddingTop: 40 }}>
          <h2 className="h2">3 adımda otomasyon</h2>
          <div className="steps">
            {steps.map((s) => (
              <div key={s.no}>
                <div className="num shine">{s.no}</div>
                <h4 style={{ fontSize: 20 }}>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="iletisim" className="section" style={{ paddingTop: 40, paddingBottom: 96 }}>
          <div className="cta">
            <div aria-hidden="true" className="blob b2" style={{ width: 320, height: 320, right: -60, top: -120, background: "#A5B4FC", opacity: 0.3, filter: "blur(70px)" }} />
            <div className="cta-text">
              <h2>Neyi otomatikleştirebileceğinizi birlikte bulalım.</h2>
              <p>Formu doldurun, 24 saat içinde dönüş yapalım. Ya da doğrudan yazın: <a href={`mailto:${site.email}`} style={{ color: "#fff" }}>{site.email}</a></p>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer className="footer">
          <span style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Image src="/logo-white.png" alt="GrowIQ" width={81} height={28} />© {new Date().getFullYear()} GrowIQ AI
          </span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a> · <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram {site.instagramHandle}</a>
          </span>
        </footer>
      </div>

      <Chatbot />
    </main>
  );
}
