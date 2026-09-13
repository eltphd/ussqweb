import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';
import Venture from '@/components/Venture';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';

const RETAIL_URL = 'https://www.feelingsunplugged.com';

const pricingTiers = [
  { qty: '1–9 copies', price: '$25', per: 'per copy' },
  { qty: '10–24 copies', price: '$20', per: 'per copy' },
  { qty: '25+ copies', price: '$15', per: 'per copy' },
];

const audiences = [
  {
    kicker: 'Primary Audiences',
    title: 'Young People',
    items: [
      'Teens ages 10–18',
      'Neurodivergent learners',
      'LGBTQ+ youth',
      'Young people navigating emotional suppression',
      'Youth who struggle to name or express their feelings',
    ],
  },
  {
    kicker: 'Institutional Buyers',
    title: 'Organizations & Professionals',
    items: [
      'School counselors and social workers',
      'Therapists and mental health clinicians',
      'Nonprofits and after-school programs',
      'Community-based youth organizations',
      'Faith communities and mentorship programs',
    ],
  },
];

export default function FeelingsUnpluggedPage() {
  return (
    <Venture venture="fu">
      <Navigation />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground">
          <div className="contours" aria-hidden="true" />
          <div className="hero-mark" aria-hidden="true">
            FU
          </div>
          <div className="container" style={{ position: 'relative' }}>
            <Eyebrow>A US-Squared Research Institute Publication</Eyebrow>
            <h1 className="display-1" style={{ maxWidth: '12ch', marginBottom: 20 }}>
              Feelings <em>Unplugged</em>
            </h1>
            <p className="h-lede" style={{ marginBottom: 28 }}>
              Named. Held. Understood.
            </p>
            <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
            <p className="lede measure" style={{ marginBottom: 36 }}>
              A compact emotional intelligence guide grounded in the BASE Framework — designed for young people
              learning to name what they feel, and the adults who hold them. Built from peer-reviewed research on
              Black adolescent emotional suppression. Available now in print.
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href={RETAIL_URL}>Get Your Copy → feelingsunplugged.com</Button>
              <Button href="#bulk" variant="ghost">
                Bulk &amp; Institutional Pricing ↓
              </Button>
            </div>
            <div style={{ marginTop: 56 }}>
              <Coord />
            </div>
          </div>
        </section>

        {/* ── Who It's For ─────────────────────────────────────────────── */}
        <Section band="paper">
          <AnimateOnScroll>
            <Eyebrow>Who It&apos;s For</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              Built for young people. <em>Designed for the adults who hold them.</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="grid-2">
              {audiences.map((a) => (
                <Card key={a.kicker}>
                  <span className="kicker" style={{ display: 'block', marginBottom: 14 }}>
                    {a.kicker}
                  </span>
                  <h3 className="display-3" style={{ marginBottom: 18 }}>
                    {a.title}
                  </h3>
                  <ul className="stack" style={{ gap: 10, listStyle: 'none' }}>
                    {a.items.map((item) => (
                      <li key={item} className="small muted hairline-top" style={{ paddingTop: 10 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── The Research Behind It ───────────────────────────────────── */}
        <Section band="ground">
          <AnimateOnScroll>
            <Eyebrow>The Research Behind It</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 16 }}>
              Grounded in the <em>BASE Framework</em>
            </h2>
            <p className="lede measure" style={{ marginBottom: 40 }}>
              Every prompt and tool in Feelings Unplugged is derived from peer-reviewed research on Black adolescent
              emotional suppression and the BASE Framework — the pedagogical spine of the US-Squared Research
              Institute.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <Button href="/research" variant="ghost">
              View All Research →
            </Button>
          </AnimateOnScroll>
        </Section>

        {/* ── Bulk & Institutional Pricing ─────────────────────────────── */}
        <Section id="bulk" band="bone">
          <AnimateOnScroll>
            <Eyebrow>Bulk &amp; Institutional Pricing</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 16 }}>
              Order for <em>your program</em>
            </h2>
            <p className="body measure-narrow" style={{ marginBottom: 40 }}>
              Volume pricing for counselors, therapists, schools, nonprofits, and after-school programs. Contact us to
              place a bulk order or discuss program licensing.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="grid-auto" style={{ maxWidth: 900, marginBottom: 40 }}>
              {pricingTiers.map((tier) => (
                <Card key={tier.qty}>
                  <span className="kicker" style={{ display: 'block', marginBottom: 16 }}>
                    {tier.qty}
                  </span>
                  <span className="display-2 numeral" style={{ display: 'block', marginBottom: 8 }}>
                    {tier.price}
                  </span>
                  <span className="small muted">{tier.per}</span>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href="mailto:executive@us-squared.org?subject=Bulk Order Inquiry — Feelings Unplugged">
                Contact for Bulk Orders →
              </Button>
              <Button href={RETAIL_URL} variant="ghost">
                Individual Copies → feelingsunplugged.com
              </Button>
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Brilliance Forward Access Fund ───────────────────────────── */}
        <Section id="access-fund" band="ground">
          <hr className="rule" style={{ marginBottom: 48 }} />
          <div className="grid-split">
            <AnimateOnScroll>
              <Eyebrow>A US-Squared Program</Eyebrow>
              <h2 className="display-2">
                Brilliance Forward <em>Access Fund</em>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="h-lede" style={{ marginBottom: 20 }}>
                Every book bought places one in the hands of a young person who cannot afford one.
              </p>
              <p className="body measure-narrow muted" style={{ marginBottom: 32 }}>
                The Brilliance Forward Access Fund is a buy-one-give-one program of the US-Squared Research Institute.
                Your gift places a copy of Feelings Unplugged in the hands of a young person who cannot afford one.
                Every dollar goes directly to subsidized copies and distribution — no overhead, no middleman.
              </p>
              <Button href="mailto:executive@us-squared.org?subject=Brilliance Forward Access Fund — Donation">
                Give to the Access Fund →
              </Button>
            </AnimateOnScroll>
          </div>
        </Section>

        {/* ── Podcast — Coming Soon ─────────────────────────────────────── */}
        {/* TODO: Enable podcast section once platform is live */}
        <Section band="raised" tight>
          <AnimateOnScroll>
            <span className="kicker" style={{ display: 'block', marginBottom: 12 }}>
              Also Available As
            </span>
            <h2 className="display-2" style={{ marginBottom: 12 }}>
              The <em>Podcast</em>
            </h2>
            <p className="body muted measure-narrow" style={{ marginBottom: 24 }}>
              A companion podcast to the book — conversations on emotional intelligence, the BASE Framework, and what
              it means to feel fully.
            </p>
            <Button variant="ghost" type="button" disabled aria-disabled="true">
              Coming Soon
            </Button>
          </AnimateOnScroll>
        </Section>

        {/* ── Cross-link to retail site ─────────────────────────────────── */}
        <Section band="raised" tight className="hairline-top">
          <AnimateOnScroll>
            <div className="cluster" style={{ justifyContent: 'space-between', gap: 24 }}>
              <div>
                <span className="kicker" style={{ display: 'block', marginBottom: 8 }}>
                  Individual &amp; Retail Purchases
                </span>
                <p className="body">Looking for a single copy for yourself or a young person you love?</p>
              </div>
              <Button href={RETAIL_URL} variant="ghost">
                Visit feelingsunplugged.com →
              </Button>
            </div>
          </AnimateOnScroll>
        </Section>

        <Footer />
      </main>
    </Venture>
  );
}
