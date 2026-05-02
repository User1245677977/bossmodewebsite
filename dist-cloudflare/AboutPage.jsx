function AboutPage() {
  return (
    <>
      {/* Title */}
      <section style={{ background: 'var(--bm-paper)', padding: '96px 80px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '50%', height: 280, opacity: 0.55,
          background: "url('assets/facets-pink.png') center/cover",
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow color="var(--bm-pink-deep)">Our Story</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 144, lineHeight: 0.86, letterSpacing: '-0.03em',
            textTransform: 'uppercase', marginTop: 20, maxWidth: 1100,
          }}>Built in<br/>adversity.</h1>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 48, lineHeight: 0.95, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-pink)',
          }}>Forged for everyone.</div>
        </div>
      </section>

      {/* Founder essay */}
      <section style={{ background: 'var(--bm-paper)', padding: '64px 80px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 96 }}>
            <div style={{
              background: 'var(--bm-pink-bg)', border: '2px solid var(--bm-ink)',
              borderRadius: 8, padding: 24, boxShadow: '6px 6px 0 0 var(--bm-ink)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-pink-deep)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Founder</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 56, lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 12 }}>Jonathan</div>
              <div style={{ marginTop: 16, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5 }}>
                Co-founder, formula architect, operations. Power-wheelchair user since age two. Built Boss Mode™ out of the only thing he had left to work with: tenacity.
              </div>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-text)', fontSize: 22, lineHeight: 1.55, color: 'var(--bm-ink)', maxWidth: 720 }}>
            <p style={{ marginTop: 0 }}>
              I'm Jonathan. A spinal cord injury between C1 &amp; C2 at birth put me in a power wheelchair at age two. Adversity wasn't a chapter. It was the whole book.
            </p>
            <p>Then at 28, the doctors gave me weeks to live. Leukemia.</p>

            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40,
              lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em',
              marginTop: 32, color: 'var(--bm-pink)',
            }}>I wasn't done.</p>

            <p style={{ marginTop: 32 }}>
              In the pursuit to advance and conquer, I built a formula. Clean energy. Real focus. Something that could meet me where I was and lift me past it. It changed the game — for me, for my family.
            </p>
            <p>When my wife noticed the shift, she asked me how I felt.</p>

            <blockquote style={{
              margin: '40px 0', padding: '32px 40px',
              background: 'var(--bm-ink)', color: 'var(--bm-paper)',
              borderRadius: 8, position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 8, left: 16, fontFamily: 'var(--font-display)', fontSize: 80, color: 'var(--bm-pink)', lineHeight: 1, opacity: 0.6 }}>"</div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36,
                lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '-0.02em',
                position: 'relative', zIndex: 1,
              }}>I told her I felt like I was living on Boss Mode™.</div>
            </blockquote>

            <p>Day two, she was spontaneously throwing kettlebells around the house.</p>
            <p>That's when David said it: <em>we have to give this to people.</em> The same tools. The same edge. So they can rise to whatever's in front of them, too.</p>

            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40,
              lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em',
              marginTop: 40, marginBottom: 8, color: 'var(--bm-ink)',
            }}>That's Boss Mode™.</p>
            <p style={{ fontSize: 22, color: 'var(--fg-2)', marginTop: 0 }}>Built in adversity. Forged for everyone.</p>

            <div style={{
              marginTop: 48, fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 28, letterSpacing: '0.04em', textTransform: 'uppercase',
              color: 'var(--bm-pink)',
            }}>Sip. Dominate. Repeat.™</div>
            <div style={{
              marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>— Jonathan, Founder</div>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', padding: '120px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4, background: "url('assets/facets-black.png') center/cover" }} />
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
          <Pillar n="01" t="Clean by default" d="No artificial sweeteners. No synthetic stims. No fillers. We built it for ourselves first." />
          <Pillar n="02" t="Clinically dosed" d="Real ingredients at real doses. PeptiStrong®, Cognizin®, PeakO2® — backed by published RCTs." />
          <Pillar n="03" t="For everyone" d="Built in a wheelchair. Forged for the gym, the shift, the field, the desk. Adversity has no demo." />
        </div>
      </section>

      {/* Founders side-by-side */}
      <section style={{ background: 'var(--bm-paper)', padding: '120px 80px' }}>
        <Eyebrow color="var(--bm-pink-deep)">The Founders</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em',
          textTransform: 'uppercase', marginTop: 16, marginBottom: 48,
        }}>Two operators.<br/>One mission.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          <FounderCard
            name="Jonathan"
            role="Co-Founder · Formula Architect · Operations"
            bio="Built the original Boss Mode™ formula in his own kitchen, for his own body. Lives the brand promise daily — clean energy, real focus, no compromise."
            tone="pink"
          />
          <FounderCard
            name="David"
            role="Co-Founder · CFO · Operations"
            bio="Saw what Jonathan had built and refused to let it stay private. Runs operations, supply, and the long fight to put Boss Mode™ in every fridge."
            tone="blue"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: 'var(--bm-paper-2)', padding: '120px 80px' }}>
        <Eyebrow color="var(--bm-pink-deep)">FAQ</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em',
          textTransform: 'uppercase', marginTop: 16, marginBottom: 48,
        }}>The receipts.</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1080 }}>
          <FAQ q="When can I actually buy Boss Mode™?" a="We're in pre-launch. Get on the waitlist (hero or footer) and you'll be first to know — including a launch-day discount for early supporters." />
          <FAQ q="What is PeptiStrong®?" a="A clinically dosed, plant-based peptide network derived from Vicia faba (fava beans). It's the only ingredient of its kind backed by three published human RCTs. We use 2.4g per can — the dose the recovery and strength studies were run at." />
          <FAQ q="Is Boss Mode™ Myo-Peptide™ vegan?" a="The peptide network itself is plant-based. Our current formulas use milk protein concentrate as the primary protein source. A 100% plant-based SKU is on the roadmap." />
          <FAQ q="How much caffeine is in Boss Mode™ Energy?" a="140mg per 12 fl oz can — naturally sourced from green tea. Paired with 100mg L-theanine to smooth the curve. No jitters, no crash." />
          <FAQ q="Can I drink both lines?" a="Yes. They're built to stack. Energy in the morning for focus, Myo-Peptide post-workout or as a recovery shake. Many of our beta users drink both daily." />
          <FAQ q="Do these statements have FDA approval?" a="No dietary supplement does — that's not how the FDA works. These statements have not been evaluated by the FDA. Boss Mode™ is not intended to diagnose, treat, cure, or prevent any disease. The clinical claims are sourced from peer-reviewed and submitted human trials of the PeptiStrong® ingredient." />
        </div>
      </section>

      {/* Wholesale strip */}
      <section style={{ background: 'var(--bm-pink)', color: '#fff', padding: '96px 80px', textAlign: 'center' }}>
        <Eyebrow color="rgba(255,255,255,0.7)">Wholesale + Press</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em',
          textTransform: 'uppercase', marginTop: 16, color: '#fff',
        }}>Stock the shelves.</h2>
        <p style={{ fontSize: 20, marginTop: 16, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          Independent gyms, retailers, and press inquiries — we'd love to hear from you.
        </p>
        <div style={{ marginTop: 32, display: 'inline-flex', gap: 16 }}>
          <Button variant="dark" href="mailto:hello@drinkbossmode.net">hello@drinkbossmode.net</Button>
        </div>
      </section>
    </>
  );
}

function Pillar({ n, t, d }) {
  return (
    <div style={{ borderTop: '4px solid var(--bm-pink)', paddingTop: 24 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--bm-pink)', letterSpacing: '0.04em' }}>{n}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 36, lineHeight: 1, textTransform: 'uppercase',
        marginTop: 12, letterSpacing: '-0.01em', color: 'var(--bm-paper)',
      }}>{t}</div>
      <p style={{ fontSize: 16, lineHeight: 1.5, marginTop: 16, color: 'rgba(244,239,228,0.78)' }}>{d}</p>
    </div>
  );
}

function FounderCard({ name, role, bio, tone }) {
  const accent = tone === 'blue' ? 'var(--bm-blue)' : 'var(--bm-pink)';
  const accentDeep = tone === 'blue' ? 'var(--bm-blue-deep)' : 'var(--bm-pink-deep)';
  return (
    <div style={{
      background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8,
      padding: 32, boxShadow: '6px 6px 0 0 var(--bm-ink)',
      display: 'flex', gap: 24, alignItems: 'flex-start',
    }}>
      <div style={{
        width: 96, height: 96, flexShrink: 0,
        background: accent, color: '#fff', borderRadius: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48,
        letterSpacing: '-0.02em',
      }}>{name[0]}</div>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: accentDeep, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{role}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 6 }}>{name}</div>
        <p style={{ fontSize: 15, lineHeight: 1.55, marginTop: 14, color: 'var(--fg-2)' }}>{bio}</p>
      </div>
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8,
      overflow: 'hidden',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', textAlign: 'left',
        padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20,
        textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'var(--bm-ink)',
      }}>
        <span>{q}</span>
        <span style={{ color: 'var(--bm-pink)', fontSize: 28, lineHeight: 1, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 200ms var(--ease-out)' }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)' }}>{a}</div>
      )}
    </div>
  );
}

window.AboutPage = AboutPage;
