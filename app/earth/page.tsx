import Navigation from '@/components/Navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Footer from '@/components/Footer';
import Venture from '@/components/Venture';
import { Section, Eyebrow, Coord, Button, Card } from '@/components/ui';

// ─── Titles ──────────────────────────────────────────────────────────────────
const titles = [
  {
    kicker: 'Vol. 01 · Now Available',
    name: 'Feelings Unplugged',
    href: '/feelings-unplugged',
    cta: 'View Book →',
  },
  {
    kicker: 'Vol. 02 · Forthcoming',
    name: 'Embargo',
    status: 'Coming Soon',
  },
];

export default function AlteredEarthPressPage() {
  return (
    <Venture venture="press">
      <Navigation />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="hero hero-short band-ground" id="top">
          <div className="contours" aria-hidden="true" />
          <div className="container" style={{ position: 'relative' }}>
            <Eyebrow>A US-Squared Imprint · 03</Eyebrow>
            <h1 className="display-1" style={{ maxWidth: '12ch', marginBottom: 20 }}>
              Altered Earth <em>Press</em>
            </h1>
            <p className="h-lede measure" style={{ marginBottom: 28 }}>
              Stories from the people living them.
            </p>
            <hr className="rule" style={{ maxWidth: 120, marginBottom: 28 }} />
            <p className="lede measure" style={{ marginBottom: 36 }}>
              Altered Earth Press is the publishing imprint of the US-Squared Research Institute. We publish real
              community stories — told from the lens of adolescents and the adults who hold them. Not case studies.
              Not curricula. Stories.
            </p>
            <div className="cluster" style={{ gap: 14 }}>
              <Button href="#titles">Our titles</Button>
              <Button href="/connect" variant="ghost">
                Get in touch
              </Button>
            </div>
            <div style={{ marginTop: 56 }}>
              <Coord />
            </div>
          </div>
        </section>

        {/* ── About the Press ───────────────────────────────────────── */}
        <Section id="about" band="bone">
          <AnimateOnScroll>
            <Eyebrow>Our Mission</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 40 }}>
              The story is <em>the evidence.</em>
            </h2>
          </AnimateOnScroll>

          <div className="grid-2" style={{ maxWidth: 960, gap: 40 }}>
            <AnimateOnScroll delay={0.05}>
              <p className="body">
                The research shows patterns. The story shows the person inside the pattern. Altered Earth Press exists
                to hold both — to put community-centered, youth-voiced narratives into the hands of the educators,
                caregivers, and practitioners who need them most.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="body">
                Every title we publish is grounded in the BASE Framework and rooted in the lived experiences of Black
                and Brown youth and the communities that surround them. We don&apos;t interpret their stories. We
                amplify them.
              </p>
            </AnimateOnScroll>
          </div>
        </Section>

        {/* ── Our Titles ────────────────────────────────────────────── */}
        <Section id="titles" band="ink">
          <AnimateOnScroll>
            <Eyebrow>Our Titles</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 48 }}>
              What we&apos;ve <em>published</em>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="grid-auto">
              {titles.map((t) => (
                <Card key={t.name} plain>
                  <span className="kicker" style={{ display: 'block', marginBottom: 18 }}>
                    {t.kicker}
                  </span>
                  <h3 className="display-3" style={{ marginBottom: 22 }}>
                    {t.name}
                  </h3>
                  {t.href ? (
                    <Button href={t.href} variant="link">
                      {t.cta}
                    </Button>
                  ) : (
                    <span className="chip">{t.status}</span>
                  )}
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
        </Section>

        {/* ── Submit / Connect ──────────────────────────────────────── */}
        <Section id="submit" band="bone">
          <AnimateOnScroll>
            <Eyebrow>Work With Us</Eyebrow>
            <h2 className="display-2" style={{ marginBottom: 20 }}>
              Have a story <em>to tell?</em>
            </h2>
            <p className="body measure-narrow" style={{ marginBottom: 32 }}>
              We are interested in community-sourced manuscripts, practitioner accounts, and youth-authored work that
              centers the experiences of adolescents and the adults who show up for them. Reach out to start the
              conversation.
            </p>
            <Button href="/connect">Get in Touch →</Button>
          </AnimateOnScroll>
        </Section>

        <Footer />
      </main>
    </Venture>
  );
}
