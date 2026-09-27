import { useState, useEffect } from 'react';
import logo from '@/assets/logo-church.png';

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1622598453695-4fbaf151aadc?w=1920&h=1080&fit=crop&auto=format',
  worship: 'https://images.unsplash.com/photo-1600288480699-0b0d8a456dd8?w=900&h=600&fit=crop&auto=format',
  cross: 'https://images.unsplash.com/photo-1528825539566-2bcb5882445c?w=800&h=600&fit=crop&auto=format',
  bible: 'https://images.unsplash.com/photo-1607098263775-e2cc11657839?w=800&h=600&fit=crop&auto=format',
  sunrise: 'https://images.unsplash.com/photo-1450558415837-1f5e21a17709?w=800&h=600&fit=crop&auto=format',
  concert: 'https://images.unsplash.com/photo-1510384742052-1abcb6282645?w=900&h=600&fit=crop&auto=format',
};

const VALUES = [
  { ref: 'Jean 3.1-8', title: 'Repentance & Baptême', text: 'La repentance à Christ et le baptême par immersion' },
  { ref: '1Thes 4.3', title: 'Sanctification', text: 'La sanctification et la fidélité en toutes choses' },
  { ref: 'Gal 5.22', title: 'Plénitude du Saint-Esprit', text: 'La plénitude du Saint-Esprit manifestée par son fruit' },
  { ref: 'Jacques 5.13-18', title: 'Foi & Prière', text: 'La foi et la vie de prière comme piliers fondamentaux' },
  { ref: '2Cor 8.12', title: 'Générosité', text: 'La générosité et la libéralité envers Dieu et le prochain' },
  { ref: 'Col 3.12-14', title: 'Humilité & Pardon', text: "L'humilité et le pardon réciproque comme témoignage" },
  { ref: '1Cor 13.4-8', title: 'Amour & Espérance', text: "L'amour en action et l'espérance qui ne déçoit pas" },
];

const OBJECTIVES = [
  { icon: '🙌', verse: 'Mat 4.10', title: 'Célébrer', text: 'Célébrer la présence de Dieu dans nos cultes et notre vie quotidienne' },
  { icon: '📢', verse: 'Mat 28.19-20', title: 'Communiquer', text: "Communiquer la parole par l'évangélisation dans tout Kpogan et ses environs" },
  { icon: '🤝', verse: 'Actes 4.32-37', title: 'Intégrer', text: 'Intégrer la famille de Dieu par une communion fraternelle authentique' },
  { icon: '📖', verse: 'Eph 4.11-16', title: 'Enseigner', text: 'Enseigner le peuple de Dieu vers la maturité par le discipulat' },
  { icon: '❤️', verse: 'Actes 6.1-7', title: 'Démontrer', text: "Démontrer l'amour de Dieu par un ministère de service concret" },
];

const PROGRAMME = [
  {
    day: 'Mercredi',
    icon: '📚',
    color: '#1A4D2E',
    items: [{ time: '18h30 – 20h00', label: 'Étude Biblique' }],
  },
  {
    day: 'Vendredi',
    icon: '🙏',
    color: '#8B1A1A',
    items: [
      { time: '18h30 – 20h00', label: 'Prière' },
      { time: 'Tous les 3e Vendredi', label: 'Veillée de Prière' },
    ],
  },
  {
    day: 'Dimanche',
    icon: '✝️',
    color: '#C9A227',
    items: [
      { time: '7h30 – 8h15', label: 'École du Dimanche' },
      { time: '8h30 – 10h30', label: 'Culte' },
    ],
  },
];

const ENGAGEMENTS = [
  { num: '01', title: 'Aimer Dieu', desc: 'Mettre Dieu au centre de tout — notre adoration, nos décisions, notre vie entière.' },
  { num: '02', title: 'Aimer le Prochain', desc: 'Servir notre communauté avec compassion, justice et générosité au nom de Christ.' },
  { num: '03', title: 'Faire des Disciples', desc: "Transformer l'Église par le discipulat et équiper chaque membre pour sa mission." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ fontFamily: 'Open Sans, system-ui, sans-serif', backgroundColor: '#FEFAF0', color: '#1C1C1C' }}>
      {/* ── Navigation ── */}
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.3s, box-shadow 0.3s',
          background: scrolled ? 'rgba(26,77,46,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.25)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <a href="#accueil" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <img src={logo} alt="Logo EBBAJ" style={{ height: 52, width: 52, objectFit: 'contain', borderRadius: '50%', border: '2px solid #C9A227', background: '#fff', padding: 2 }} />
            <div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#C9A227', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.1 }}>EGLISE BAPTISTE</div>
              <div style={{ color: '#e8e8e8', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Les Bien-Aimés de Jésus • Kpogan</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {['Vision', 'Mission', 'Valeurs', 'Programme', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link"
                style={{ color: '#e8e8e8', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', letterSpacing: '0.03em' }}
              >
                {link}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem', textDecoration: 'none' }}>
              Nous rejoindre
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C9A227', padding: 8 }}
            className="show-mobile"
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#1A4D2E', padding: '1rem 1.5rem 1.5rem', borderTop: '1px solid rgba(201,162,39,0.3)' }}>
            {['Vision', 'Mission', 'Valeurs', 'Programme', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '0.75rem 0', color: '#e8e8e8', textDecoration: 'none', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.1)' }}
              >
                {link}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ display: 'block', marginTop: '1rem', textAlign: 'center', textDecoration: 'none' }}>
              Nous rejoindre
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section
        id="accueil"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#0f2e1a',
        }}
      >
        <img
          src={IMAGES.hero}
          alt="Culte d'adoration"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(15,46,26,0.5) 0%, rgba(139,26,26,0.3) 50%, rgba(15,46,26,0.85) 100%)',
        }} />
        <div style={{ position: 'relative', textAlign: 'center', padding: '6rem 1.5rem 4rem', maxWidth: 860 }}>
          <img src={logo} alt="Logo" style={{ height: 110, width: 110, objectFit: 'contain', borderRadius: '50%', border: '3px solid #C9A227', background: '#fff', padding: 4, marginBottom: '1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }} />
          {/* Hierarchy badge */}
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(201,162,39,0.4)', borderRadius: 6, padding: '0.6rem 1.2rem', marginBottom: '1.25rem' }}>
            <span style={{ color: '#C9A227', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Convention Baptiste du Togo</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>▾</span>
            <span style={{ color: '#d0d0d0', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Zone Agapè</span>
          </div>
          <div style={{ color: '#C9A227', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>Bienvenue à</div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            color: '#ffffff',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '0.5rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}>
            L'Église Baptiste<br />
            <span style={{ color: '#C9A227' }}>Les Bien-Aimés de Jésus</span>
          </h1>
          <div style={{ color: '#e0e0e0', fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>de Kpogan, Togo</div>
          <div style={{ width: 60, height: 2, background: '#C9A227', margin: '1.5rem auto', borderRadius: 2 }} />
          <p style={{ color: '#d4d4d4', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 600, margin: '0 auto 2.5rem' }}>
            <em style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#e8e8e8' }}>« Servir Christ de mieux en mieux »</em>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#vision" className="btn-primary" style={{ textDecoration: 'none' }}>Découvrir notre vision</a>
            <a href="#contact" className="btn-outline" style={{ textDecoration: 'none' }}>Nous contacter</a>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', color: '#C9A227', opacity: 0.8 }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Vision ── */}
      <section id="vision" style={{ padding: '6rem 1.5rem', background: '#FEFAF0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Notre Vision</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#1A4D2E', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Une Église forte,<br />biblique et missionnaire
            </h2>
            <div className="section-divider" style={{ margin: '0 0 1.5rem' }} />
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#444', marginBottom: '2rem' }}>
              Devenir une église Baptiste forte, biblique, missionnaire, mobilisant des ressources endogènes et exogènes — humaines et financières — pour un <strong style={{ color: '#1A4D2E' }}>impact holistique</strong> (spirituel, social, politique, économique...) de la société togolaise.
            </p>

            <h3 style={{ fontFamily: 'Playfair Display, serif', color: '#8B1A1A', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.25rem' }}>Nos Engagements</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ENGAGEMENTS.map(e => (
                <div key={e.num} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: 44, height: 44,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1A4D2E, #256339)',
                    color: '#C9A227',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.85rem',
                  }}>
                    {e.num}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1A4D2E', marginBottom: '0.25rem' }}>{e.title}</div>
                    <div style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6 }}>{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-16px 16px 16px -16px', background: '#1A4D2E', borderRadius: 4, zIndex: 0 }} />
            <img
              src={IMAGES.cross}
              alt="La croix de Jésus-Christ au coucher du soleil"
              style={{ position: 'relative', zIndex: 1, width: '100%', height: 420, objectFit: 'cover', borderRadius: 4, boxShadow: '0 16px 48px rgba(0,0,0,0.25)' }}
            />
            <div style={{
              position: 'absolute', bottom: -12, right: -12, zIndex: 2,
              background: '#C9A227', color: '#1C1C1C',
              padding: '0.75rem 1.25rem', borderRadius: 4,
              fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 600, fontSize: '0.9rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}>
              « Dieu est amour »
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section id="mission" style={{ padding: '6rem 1.5rem', background: '#1A4D2E', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          <img src={IMAGES.concert} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Notre Mission</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, maxWidth: 700, margin: '0 auto 1rem' }}>
              Amener les gens à Jésus,<br />les former à sa ressemblance
            </h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(201,162,39,0.3)', borderRadius: 8, padding: '2.5rem', backdropFilter: 'blur(8px)' }}>
              <p style={{ color: '#e0e0e0', fontSize: '1.05rem', lineHeight: 1.95, fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
                « L'église existe pour amener les gens du village de Kpogan et ses environs à Jésus afin qu'ils deviennent membres de sa famille, les aider à se développer en maturité à l'image de Christ et les équiper pour leur ministère en son sein et leur mission dans le monde, afin de magnifier le nom de Dieu. »
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 40, height: 2, background: '#C9A227' }} />
                <span style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em' }}>NOTRE DÉCLARATION</span>
              </div>
            </div>
            <div>
              <img
                src={IMAGES.bible}
                alt="Lecture de la Bible"
                style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 8, boxShadow: '0 16px 48px rgba(0,0,0,0.4)', border: '3px solid rgba(201,162,39,0.3)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section id="valeurs" style={{ padding: '6rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ce en quoi nous croyons</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#1A4D2E', lineHeight: 1.2, marginBottom: '0.5rem' }}>
              Nos Valeurs Fondamentales
            </h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="value-card"
                style={{
                  background: '#FEFAF0',
                  border: '1px solid #e8e0cc',
                  borderRadius: 8,
                  padding: '2rem',
                  borderTop: '4px solid',
                  borderTopColor: i % 3 === 0 ? '#1A4D2E' : i % 3 === 1 ? '#C9A227' : '#8B1A1A',
                }}
              >
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1A4D2E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{v.title}</div>
                <div style={{ color: '#999', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>{v.ref}</div>
                <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Objectives ── */}
      <section id="objectifs" style={{ padding: '6rem 1.5rem', background: '#FEFAF0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '35%', overflow: 'hidden', borderRadius: '0 0 0 80px' }}>
          <img src={IMAGES.sunrise} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} />
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pourquoi nous existons</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#1A4D2E', lineHeight: 1.2, marginBottom: '0.5rem' }}>
              Nos Objectifs
            </h2>
            <div className="section-divider" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {OBJECTIVES.map((obj, i) => (
              <div
                key={i}
                className="value-card"
                style={{
                  background: '#fff',
                  borderRadius: 8,
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(26,77,46,0.08)',
                  border: '1px solid #e8e0cc',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{obj.icon}</div>
                <div style={{ color: '#C9A227', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{obj.verse}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#1A4D2E', fontSize: '1.15rem', marginBottom: '0.75rem' }}>{obj.title}</div>
                <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.7 }}>{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programme ── */}
      <section id="programme" style={{ padding: '6rem 1.5rem', background: '#1A4D2E' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Venez nous rejoindre</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '0.5rem' }}>
              Programme des Activités
            </h2>
            <div className="section-divider" />
          </div>

          {/* 3 day cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {PROGRAMME.map((p) => (
              <div key={p.day} style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid rgba(255,255,255,0.12)`, borderTop: `4px solid ${p.color}`, borderRadius: 8, padding: '2rem', backdropFilter: 'blur(6px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '2rem' }}>{p.icon}</span>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#fff', fontSize: '1.3rem' }}>{p.day}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {p.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <span style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>{item.time}</span>
                      <span style={{ color: '#d4d4d4', fontSize: '0.9rem', textAlign: 'right' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Entretien pasteurs note */}
          <div style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: 8, padding: '1.5rem 2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>📌</span>
            <div>
              <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Note importante</div>
              <p style={{ color: '#e0e0e0', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#fff' }}>Du Mardi au Samedi, de 9h à 14h</strong> — Entretien avec les Pasteurs disponible pour accompagnement spirituel, counseling, et tout besoin pastoral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Worship Banner ── */}
      <section style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
        <img
          src={IMAGES.worship}
          alt="Adoration collective"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(26,77,46,0.85) 0%, rgba(139,26,26,0.7) 100%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '2rem',
        }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#fff', fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', fontWeight: 600, marginBottom: '1rem', textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            « Servir Christ de mieux en mieux »
          </h2>
          <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>— MOT D'ORDRE DE L'ÉGLISE —</div>
          <a href="#contact" className="btn-primary" style={{ marginTop: '2rem', textDecoration: 'none' }}>Rejoignez-nous</a>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: '6rem 1.5rem', background: '#1C1C1C' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nous trouver</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Contactez<br />notre église
            </h2>
            <div className="section-divider" style={{ margin: '0 0 2rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, background: '#C9A227', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" fill="none" stroke="#1C1C1C" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>ADRESSE</div>
                  <div style={{ color: '#d4d4d4', lineHeight: 1.8 }}>
                    Village de Kpogan, Togo<br />
                    <span style={{ fontSize: '0.88rem', color: '#aaa' }}>Derrière l'École Sainte-Catherine,</span><br />
                    <span style={{ fontSize: '0.88rem', color: '#aaa' }}>non loin de Motévétcha</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, background: '#1A4D2E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" fill="none" stroke="#C9A227" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>TÉLÉPHONE</div>
                  <a href="tel:+22890218132" style={{ display: 'block', color: '#d4d4d4', textDecoration: 'none', fontSize: '1rem', fontWeight: 600 }}>+228 90 21 81 32</a>
                  <a href="tel:+22899820742" style={{ display: 'block', color: '#d4d4d4', textDecoration: 'none', fontSize: '1rem', fontWeight: 600, marginTop: '0.2rem' }}>+228 99 82 07 42</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, background: '#8B1A1A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>EMAIL</div>
                  <a href="mailto:egbbaj@gmail.com" style={{ color: '#d4d4d4', textDecoration: 'none' }}>egbbaj@gmail.com</a>
                </div>
              </div>

              {/* Donation info */}
              <div style={{ marginTop: '0.5rem', background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.35)', borderRadius: 8, padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>💛</span>
                  <span style={{ color: '#C9A227', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Soutenir l'Église — Vos Dons</span>
                </div>
                <div style={{ color: '#d4d4d4', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  <div style={{ marginBottom: '0.35rem' }}>
                    <span style={{ color: '#aaa', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Banque</span>
                    <div style={{ color: '#fff', fontWeight: 600 }}>Ecobank Togo</div>
                  </div>
                  <div>
                    <span style={{ color: '#aaa', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Numéro de compte</span>
                    <div style={{ color: '#C9A227', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}>141 559 865 001</div>
                  </div>
                </div>
                <p style={{ color: '#888', fontSize: '0.78rem', marginTop: '0.75rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                  « Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte. » — 2 Cor 9.7
                </p>
              </div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,162,39,0.2)', borderRadius: 8, padding: '2.5rem' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', color: '#C9A227', fontWeight: 700, fontSize: '1.4rem', marginBottom: '0.5rem' }}>Envoyez-nous un message</h3>
            <p style={{ color: '#888', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Nous vous répondrons dans les meilleurs délais.</p>
            <form onSubmit={e => { e.preventDefault(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Votre nom"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '0.875rem 1rem', color: '#fff', fontSize: '0.95rem', outline: 'none', width: '100%' }}
              />
              <input
                type="email"
                placeholder="Votre email"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '0.875rem 1rem', color: '#fff', fontSize: '0.95rem', outline: 'none', width: '100%' }}
              />
              <textarea
                placeholder="Votre message..."
                rows={4}
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '0.875rem 1rem', color: '#fff', fontSize: '0.95rem', outline: 'none', width: '100%', resize: 'vertical', fontFamily: 'inherit' }}
              />
              <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#0f1f0f', padding: '2.5rem 1.5rem', borderTop: '1px solid rgba(201,162,39,0.2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={logo} alt="EBBAJ" style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: '50%', border: '2px solid #C9A227', background: '#fff', padding: 2 }} />
            <div>
              <div style={{ color: '#C9A227', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.9rem' }}>EGLISE BAPTISTE LES BIEN-AIMÉS</div>
              <div style={{ color: '#555', fontSize: '0.7rem', letterSpacing: '0.1em' }}>DE JÉSUS DE KPOGAN • TOGO</div>
            </div>
          </div>
          <div style={{ color: '#555', fontSize: '0.8rem', textAlign: 'center' }}>
            © {new Date().getFullYear()} Église Baptiste Les Bien-Aimés de Jésus de Kpogan.
            <br />
            <span style={{ color: '#444' }}>Tous droits réservés.</span>
          </div>
          <div style={{ color: '#444', fontSize: '0.85rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#vision" style={{ color: '#555', textDecoration: 'none' }}>Vision</a>
            <a href="#mission" style={{ color: '#555', textDecoration: 'none' }}>Mission</a>
            <a href="#valeurs" style={{ color: '#555', textDecoration: 'none' }}>Valeurs</a>
            <a href="#programme" style={{ color: '#555', textDecoration: 'none' }}>Programme</a>
            <a href="#contact" style={{ color: '#555', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </footer>

      {/* Responsive mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        ::placeholder { color: rgba(255,255,255,0.35); }
      `}</style>
    </div>
  );
}
