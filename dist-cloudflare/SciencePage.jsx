function SciencePage() {
  const headlineNumbers = [
    { num: '144%', label: 'Faster recovery rate', ref: '3' },
    { num: '47%', label: 'Less muscular fatigue', ref: '3' },
    { num: '17%', label: 'More strength', ref: '4' },
    { num: '21.6%', label: 'More endurance', ref: '4' },
    { num: '54%', label: 'More performance during recovery', ref: '3' },
    { num: '49%', label: 'More muscle energy', ref: '4' },
  ];

  const myoIngredients = [
    {
      name: 'Complete Dairy Protein',
      dose: '20g (MPC + WPI)',
      what: 'Milk Protein Concentrate + Whey Protein Isolate — the full essential amino acid spectrum, both fast and slow-release fractions.',
      does: 'Supports muscle protein synthesis, recovery, and satiety. The base layer the peptide network builds on top of.',
    },
    {
      name: 'PeptiStrong®',
      dose: '2.4g (full clinical dose)',
      what: 'A clinically dosed network of bioactive peptides derived from Vicia faba (fava bean). Plant-based.',
      does: 'Activates muscle protein synthesis (mTOR / S6 phosphorylation), inhibits myostatin by 56%, suppresses TNF-α inflammation.',
    },
    {
      name: 'PeakO2®',
      dose: '300mg organic mushroom blend',
      what: 'Six organic mushrooms — cordyceps, reishi, king trumpet, shiitake, lion\u2019s mane, turkey tail.',
      does: 'Improves oxygen utilization. Supports endurance, stamina, and recovery between high-intensity efforts.',
    },
    {
      name: 'MCT Oil (C8-dominant)',
      dose: '1g',
      what: 'Medium-chain triglycerides, C8-dominant — the fastest-converting MCT to ketones.',
      does: 'Fast brain and body fuel. Supports focus and endurance without spiking blood sugar.',
    },
    {
      name: 'Reb-M + Oobli Sweet Protein',
      dose: '5–9g real sugar only',
      what: 'Reb-M (the cleanest stevia fraction) plus Oobli sweet protein. No sucralose. No acesulfame-K.',
      does: 'Naturally sweet with a cleaner metabolic profile. Protects gut and glucose response.',
    },
  ];

  const energyIngredients = [
    {
      name: 'Cognizin® Citicoline',
      dose: '500mg',
      what: 'Clinically tested form of citicoline — a building block of brain cell membranes and a precursor to acetylcholine, dopamine, and norepinephrine.',
      does: 'At 500mg/day, increased brain membrane turnover by 26% and brain energy utilization by 13.6% (Silveri 2008). Supports memory, mental energy, and long-term brain health.',
    },
    {
      name: 'CognatiQ®',
      dose: '200mg',
      what: 'Whole coffee fruit extract — the only clinically validated coffee fruit ingredient shown to elevate BDNF, a neuroprotein critical to brain cell growth and connectivity.',
      does: 'A single 200mg dose improved decisiveness, accuracy, and impulse control within 60 minutes (Robinson 2024). 28-day daily use drove up to 35% improvement in processing speed plus reduced mental fatigue. Non-stimulant.',
    },
    {
      name: 'N-Acetyl-L-Tyrosine',
      dose: '500mg',
      what: 'A more bioavailable form of the amino acid L-tyrosine. Precursor to dopamine and norepinephrine.',
      does: 'Supports cognitive performance under stress, sleep loss, and demanding workloads. Focused motivation, not overstimulation.',
    },
    {
      name: 'L-Theanine',
      dose: '100mg',
      what: 'An amino acid found naturally in green tea leaves.',
      does: 'Balances caffeine. Calm focus, reduced anxiety, improved attention control.',
    },
    {
      name: 'Green Tea Caffeine',
      dose: '140mg',
      what: 'Naturally occurring caffeine, sourced from green tea — not synthetic.',
      does: 'Smooth, plant-based energy with lower jitter and crash risk than synthetic caffeine.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--bm-paper)', padding: '96px 80px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.55,
          background: "url('assets/facets-pink.png') center/cover",
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1080 }}>
          <Eyebrow color="var(--bm-pink-deep)">The Science</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 144, lineHeight: 0.86, letterSpacing: '-0.03em',
            textTransform: 'uppercase', marginTop: 20,
          }}>Receipts<br/>over hype.</h1>
          <p style={{ fontSize: 22, lineHeight: 1.5, marginTop: 28, maxWidth: 720, color: 'var(--fg-2)' }}>
            Myo-Peptide is built on three published human studies of the only clinically validated plant-based peptide network on the market. Energy is built on Cognizin® citicoline and CognatiQ® coffee fruit extract — both at the doses used in their published RCTs. Every claim below traces to a citation.
          </p>
        </div>
      </section>

      {/* Headline numbers */}
      <section style={{ background: 'var(--bm-paper-2)', padding: '96px 80px' }}>
        <Eyebrow color="var(--bm-pink-deep)">In human trials at 2.4g/day</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em',
          textTransform: 'uppercase', marginTop: 16,
        }}>The numbers<br/>don't lie.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
          {headlineNumbers.map(n => (
            <div key={n.label} style={{
              background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8,
              padding: 32, boxShadow: '6px 6px 0 0 var(--bm-ink)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 80, lineHeight: 0.85, letterSpacing: '-0.03em',
                color: 'var(--bm-pink)',
              }}>{n.num}<sup style={{ fontSize: 18, color: 'var(--bm-ink)', verticalAlign: 'super', marginLeft: 4 }}>{n.ref}</sup></div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 22, lineHeight: 1.15, textTransform: 'uppercase',
                marginTop: 14, letterSpacing: '-0.01em',
              }}>{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Studies */}
      <section style={{ background: 'var(--bm-paper)', padding: '96px 80px' }}>
        <Eyebrow color="var(--bm-pink-deep)">Published studies</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.02em',
          textTransform: 'uppercase', marginTop: 16, maxWidth: 800,
        }}>Three RCTs.<br/>One ingredient.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
          <StudyCard
            num="01" pop="Healthy males"
            title="Strength recovery + fatigue"
            findings={[
              '+144% muscle recovery rate',
              '−47% muscular fatigue',
              '+54% performance during recovery',
            ]}
            cite="Kerr et al., Nutrients 2023;15(4):986"
            dose="2.4g/day, 14 days"
          />
          <StudyCard
            num="02" pop="Resistance-trained"
            title="Strength + endurance + bone"
            findings={[
              '+17% strength gains',
              '+21.6% muscular endurance',
              '+49% muscle energy',
              '+0.7% bone mineral content',
            ]}
            cite="RCT, manuscript submitted (2024)"
            dose="2.4g/day, with resistance training"
          />
          <StudyCard
            num="03" pop="Immobilization model"
            title="Recovery from disuse"
            findings={[
              '+103% leg strength recovery vs 68% milk protein',
              '4× more effective than milk protein for protein synthesis',
              '90% of participants showed an anabolic response',
            ]}
            cite="Weijzen et al., J Nutrition 2023"
            dose="20g/day (higher dose study)"
            footnote="Reference data only — not the dose of the 12 fl oz can."
          />
        </div>
      </section>

      {/* Cognizin clinical strip — Energy line */}
      <section style={{ background: 'var(--bm-blue-sky)', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', opacity: 0.45,
          background: "url('assets/facets-lightblue.png') center/cover",
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 480px' }}>
              <Eyebrow color="var(--bm-blue-deep)">Inside Boss Mode™ Energy</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em',
                textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-ink)',
              }}>Cognizin®<br/>does the focus.</h2>
              <p style={{ fontSize: 18, lineHeight: 1.55, marginTop: 20, maxWidth: 560, color: 'var(--fg-2)' }}>
                500mg of clinically-tested citicoline per can — the dose used in the brain-energy and memory studies. We pair it with green tea caffeine and 100mg L-theanine for clean focus, no jitters.
              </p>
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-blue-deep)',
              letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.6,
              padding: '12px 16px', background: 'rgba(255,255,255,0.6)',
              border: '1.5px solid var(--bm-blue-deep)', borderRadius: 4,
            }}>
              Clinically dosed<br/>at 500mg/day
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 48 }}>
            <CognizinStat
              num="26%"
              citeRef="6"
              label="Increase in brain membrane turnover"
              note="500mg/day, 6 weeks. Phosphoethanolamine. Silveri 2008."
            />
            <CognizinStat
              num="13.6%"
              citeRef="6"
              label="Increase in brain energy utilization"
              note="500mg/day, 6 weeks. ATP metabolite. Silveri 2008."
            />
            <CognizinStat
              num="↑"
              citeRef="11"
              label="Improved episodic + overall memory"
              note="500mg/day, 12 weeks. Healthy older adults (50–85). Nakazaki 2021."
              big
            />
            <CognizinStat
              num="↑"
              citeRef="9"
              label="Improved attention + psychomotor speed"
              note="500mg/day, 28 days. Adolescent males. McGlade 2015/2019."
              big
            />
          </div>

          <div style={{
            marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11,
            color: 'var(--fg-3)', letterSpacing: '0.04em', lineHeight: 1.6, maxWidth: 980,
          }}>
            Cognizin® is a registered trademark of Kyowa Hakko Bio Co., Ltd. Boss Mode™ Energy delivers Cognizin® at 500mg/day — the dose used in the brain-energy, memory, and psychomotor-speed trials cited above.
          </div>
        </div>
      </section>

      {/* CognatiQ clinical strip — Energy line */}
      <section style={{ background: 'var(--bm-paper-2)', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 480px' }}>
              <Eyebrow color="var(--bm-pink-deep)">Inside Boss Mode™ Energy</Eyebrow>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 900,
                fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em',
                textTransform: 'uppercase', marginTop: 16, color: 'var(--bm-ink)',
              }}>CognatiQ®<br/>does the decisions.</h2>
              <p style={{ fontSize: 18, lineHeight: 1.55, marginTop: 20, maxWidth: 580, color: 'var(--fg-2)' }}>
                200mg of whole coffee fruit extract per can — the only clinically studied coffee fruit shown to raise BDNF, the neuroprotein that powers brain cell growth and connectivity. Same-day decisiveness. Long-term resilience. Non-stimulant.
              </p>
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-pink-deep)',
              letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.6,
              padding: '12px 16px', background: '#fff',
              border: '1.5px solid var(--bm-pink-deep)', borderRadius: 4,
            }}>
              Clinically dosed<br/>at 200mg/day
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 48 }}>
            <CognizinStat
              num="80.7%"
              citeRef="13"
              label="Reduction in N-back omission errors"
              note="200mg single dose, within 60 min. Decisiveness under pressure. Robinson 2024."
            />
            <CognizinStat
              num="24.9%"
              citeRef="13"
              label="Improved cognitive accuracy"
              note="200mg single dose, vs. baseline. N-back test. Robinson 2024."
            />
            <CognizinStat
              num="41.1%"
              citeRef="13"
              label="Reduction in go/no-go commission errors"
              note="200mg single dose. Cognitive impulse control. Robinson 2024."
            />
            <CognizinStat
              num="35%"
              citeRef="13"
              label="Improvement in processing speed"
              note="200mg/day, 28 days. Reaction time, baseline → day 28. Robinson 2024."
            />
          </div>

          <div style={{
            marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 11,
            color: 'var(--fg-3)', letterSpacing: '0.04em', lineHeight: 1.6, maxWidth: 980,
          }}>
            CognatiQ® is a registered trademark of VDF FutureCeuticals, Inc. Boss Mode™ Energy uses CognatiQ® at 200mg — the dose used in all studies referenced above. Same-day findings reflect a single 200mg dose; the processing-speed result reflects daily 200mg use over 28 days.
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section id="ingredients" style={{ background: 'var(--bm-ink)', color: 'var(--bm-paper)', padding: '96px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, background: "url('assets/facets-black.png') center/cover" }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow color="var(--bm-pink)">Inside the can</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em',
            textTransform: 'uppercase', marginTop: 16,
          }}>Two formulas.<br/>Ten ingredients.</h2>
          <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.6, maxWidth: 720, color: 'rgba(244,239,228,0.7)' }}>
            Pink ingredients are inside <strong style={{ color: 'var(--bm-pink)' }}>Myo-Peptide™</strong>. Light-blue ingredients are inside <strong style={{ color: 'var(--bm-blue-sky)' }}>Boss Mode Energy™</strong>. Each formula is color-coded so you can trace any claim back to its source.
          </p>

          {/* Myo-Peptide block */}
          <div style={{ marginTop: 64, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{
              background: 'var(--bm-pink)', borderRadius: 10, padding: '14px 22px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '4px 4px 0 0 rgba(0,0,0,0.5)',
            }}>
              <img src="assets/logo-myo-peptide-clean.png" alt="Myo-Peptide" style={{ height: 56, display: 'block' }} />
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-pink)',
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}>The Recovery Formula · 5 ingredients</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 24 }}>
            {myoIngredients.map(i => (
              <IngredientCard key={i.name} i={i} accent="var(--bm-pink)" />
            ))}
          </div>

          {/* Energy block */}
          <div style={{ marginTop: 80, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{
              background: 'var(--bm-blue-sky)', borderRadius: 10, padding: '14px 22px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '4px 4px 0 0 rgba(0,0,0,0.5)',
              minHeight: 84,
            }}>
              <img src="assets/logo-energy.png" alt="Boss Mode Energy" style={{ height: 56, display: 'block' }} />
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--bm-blue-sky)',
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}>The Focus Formula · 5 ingredients</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 24 }}>
            {energyIngredients.map(i => (
              <IngredientCard key={i.name} i={i} accent="var(--bm-blue-sky)" />
            ))}
          </div>
        </div>
      </section>

      {/* Citations + disclaimer */}
      <section style={{ background: 'var(--bm-paper-2)', padding: '64px 80px' }}>
        <Eyebrow color="var(--fg-3)">References</Eyebrow>
        <ol style={{ marginTop: 16, paddingLeft: 20, fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.8, color: 'var(--fg-2)', maxWidth: 980 }}>
          <li>Cal R, et al. Preclinical evaluation of a food-derived functional ingredient to address skeletal muscle atrophy. <em>Nutrients</em>. 2020;12(8):2274.</li>
          <li>Corrochano AR, et al. Characterising the efficacy and bioavailability of bioactive peptides identified for attenuating muscle atrophy within a Vicia faba-derived functional ingredient. <em>Curr Res Food Sci</em>. 2021;4:224–232.</li>
          <li>Kerr A, et al. Improved strength recovery and reduced fatigue with suppressed plasma myostatin following supplementation of a Vicia faba Hydrolysate, in a healthy male population. <em>Nutrients</em>. 2023;15(4):986.</li>
          <li>The effects on human strength and endurance after resistance training with supplementation of Vicia faba hydrolysate compared to placebo. <em>Manuscript submitted</em>.</li>
          <li>Weijzen MEG, et al. Vicia faba peptide network supplementation does not differ from milk protein in modulating changes in muscle size during short-term immobilization and subsequent remobilization, but increases muscle protein synthesis rates during remobilization in healthy young men. <em>The Journal of Nutrition</em>. 2023.</li>
          <li>Silveri MM, et al. Citicoline enhances frontal lobe bioenergetics as measured by phosphorus magnetic resonance spectroscopy. <em>NMR Biomed</em>. 2008;21(10):1066–75.</li>
          <li>McGlade E, et al. Improved attentional performance following citicoline administration in healthy adult women. <em>Food and Nutrition Sciences</em>. 2012;3:769–773.</li>
          <li>Nakazaki E, et al. Citicoline and memory function in healthy older adults. <em>J Nutr</em>. 2021;151(8):2153–2160.</li>
          <li>McGlade E, et al. The effect of citicoline supplementation on motor speed and attention in adolescent males. <em>J Atten Disord</em>. 2019;23(2):121–134.</li>
          <li>Robinson J, et al. Whole Coffee Cherry Extract Improves Working Memory and Response Inhibition: Acute and Longitudinal Results from a Remote, Randomized, Double-Blind, Placebo-Controlled Clinical Trial. <em>Nutrients</em>. 2024. PMC11279654.</li>
        </ol>
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--line)', fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.7, color: 'var(--fg-3)', letterSpacing: '0.04em', maxWidth: 980 }}>
          THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE U.S. FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE.<br/><br/>
          PeptiStrong® is a registered trademark of Nuritas Limited. PeakO2® is a registered trademark of NuLiv Science. Cognizin® is a registered trademark of Kyowa Hakko Bio Co., Ltd. CognatiQ® is a registered trademark of Cognis.
        </div>
      </section>
    </>
  );
}

function StudyCard({ num, pop, title, findings, cite, dose, footnote }) {
  return (
    <div style={{
      background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8,
      padding: 28, boxShadow: '6px 6px 0 0 var(--bm-ink)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--bm-pink)', letterSpacing: '0.08em' }}>STUDY {num}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{pop}</div>
      </div>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 28, lineHeight: 1.05, textTransform: 'uppercase',
        marginTop: 14, letterSpacing: '-0.01em',
      }}>{title}</div>
      <ul style={{ marginTop: 16, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {findings.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.45 }}>
            <span style={{ color: 'var(--bm-pink)', fontWeight: 800, marginTop: 1 }}>+</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div style={{ flex: 1 }} />
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em', lineHeight: 1.5 }}>
          {cite}<br/>
          <span style={{ color: 'var(--bm-pink)' }}>Dose: {dose}</span>
        </div>
        {footnote && (
          <div style={{ marginTop: 8, fontSize: 11, color: 'var(--fg-3)', fontStyle: 'italic' }}>{footnote}</div>
        )}
      </div>
    </div>
  );
}

function CognizinStat({ num, citeRef, label, note, big }) {
  return (
    <div style={{
      background: '#fff', border: '2px solid var(--bm-ink)', borderRadius: 8,
      padding: 24, boxShadow: '4px 4px 0 0 var(--bm-ink)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: big ? 96 : 64, lineHeight: 0.85, letterSpacing: '-0.03em',
        color: 'var(--bm-blue-deep)',
      }}>
        {num}
        <sup style={{ fontSize: 16, color: 'var(--bm-ink)', verticalAlign: 'super', marginLeft: 4 }}>{citeRef}</sup>
      </div>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 16, lineHeight: 1.2, textTransform: 'uppercase',
        marginTop: 14, letterSpacing: '-0.01em', color: 'var(--bm-ink)',
      }}>{label}</div>
      <div style={{ flex: 1 }} />
      <div style={{
        marginTop: 16, paddingTop: 12, borderTop: '1px solid var(--line)',
        fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)',
        letterSpacing: '0.04em', lineHeight: 1.5,
      }}>{note}</div>
    </div>
  );
}

window.SciencePage = SciencePage;

function IngredientCard({ i, accent }) {
  return (
    <div style={{
      background: 'var(--bm-ink-2)',
      border: `1.5px solid ${accent}`,
      borderRadius: 8, padding: 28,
      borderLeft: `6px solid ${accent}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', letterSpacing: '-0.01em', color: accent }}>{i.name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: accent, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{i.dose}</div>
      </div>
      <div style={{ marginTop: 14, fontSize: 14, lineHeight: 1.55, color: 'rgba(244,239,228,0.85)' }}>
        <span style={{ color: accent, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>What it is — </span>
        {i.what}
      </div>
      <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.55, color: 'rgba(244,239,228,0.85)' }}>
        <span style={{ color: accent, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>What it does — </span>
        {i.does}
      </div>
    </div>
  );
}
