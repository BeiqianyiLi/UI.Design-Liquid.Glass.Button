import { images } from './assets';

function ImageCard({ src, alt, className = '', light = false }) {
  return (
    <div
      className={`
        rounded-2xl overflow-hidden border
        ${light
          ? 'border-stone-200/60 shadow-premium-light bg-white/5'
          : 'border-white/10 shadow-premium'
        }
        ${className}
      `}
    >
      <img src={src} alt={alt} className="w-full h-auto object-cover" loading="lazy" />
    </div>
  );
}

function SectionTitle({ number, title, light = false }) {
  const textClass = light ? 'text-stone-800' : 'text-stone-200';
  const numClass = light ? 'text-stone-400' : 'text-stone-500';
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className={`text-3xl font-medium tabular-nums ${numClass}`}>{number}</span>
      <h2 className={`text-xl md:text-2xl font-medium tracking-tight ${textClass}`}>{title}</h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero */}
      <header
        className="relative py-28 px-6 overflow-hidden"
        style={{ background: '#0a0a0c' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 max-w-3xl mx-auto">
            UI-Liquid Glass Button
          </h1>
          <p className="text-lg text-stone-400 max-w-xl mx-auto font-normal">
            A micro-interaction exploring affordance and state transitions through a theme toggle.
          </p>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6">
        {/* Section 1 — The Concept, Image_A, minimal intro */}
        <section
          className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(250,250,249,0.95) 0%, rgba(245,245,244,0.9) 40%, rgba(231,229,228,0.85) 100%)',
          }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <SectionTitle number="01" title="The Concept" light />
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3">
                <p className="text-stone-600 leading-relaxed font-normal text-[15px]">
                  A liquid glass toggle for Light and Dark theme. Translucent, neumorphic surface with a clear feedback loop and tuned state transitions.
                </p>
              </div>
              <div className="md:col-span-2 md:mt-16">
                <ImageCard
                  src={images.imageA}
                  alt="Liquid glass toggle in Light and Dark modes"
                  className="w-full border-stone-200/60 shadow-premium-light"
                  light
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Image_B */}
        <section
          className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden my-20"
          style={{ background: '#0a0a0c' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
          <div className="relative max-w-[1400px] mx-auto">
            <SectionTitle number="02" title="Component display" />
            <div className="flex justify-center">
              <ImageCard
                src={images.imageB}
                alt="Icon assets and component library"
                className="max-w-4xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Section 4 — Logic & States */}
        <section
          className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(255,255,255,0.92) 0%, rgba(250,250,249,0.88) 40%, rgba(231,229,228,0.8) 100%)',
          }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <SectionTitle number="04" title="Logic & States" light />
            <p className="text-stone-600 max-w-2xl mb-12 text-[15px] font-normal">
              The button is deconstructed into clear states so that affordance and interaction fidelity stay high at every step.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Default', desc: 'Idle theme state with the corresponding icon and label visible.' },
                { name: 'Hover', desc: 'Cursor over the control; optional subtle scale or glow to reinforce clickability.' },
                { name: 'Active', desc: 'During click or tap; the liquid glass thumb and halo emphasize the pressed region.' },
                { name: 'Loading', desc: 'Optional interim state; spinner or pulse without losing context.' },
                { name: 'Success', desc: 'Transition complete; the new theme and icon are shown.' },
              ].map((s) => (
                <div
                  key={s.name}
                  className="p-6 rounded-2xl border border-stone-200/80 bg-white/80 shadow-premium-light"
                >
                  <h3 className="text-stone-900 font-medium mb-2">{s.name}</h3>
                  <p className="text-sm text-stone-600 font-normal">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Transparent button, Image_C */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: '#0a0a0c' }}
        >
          <div className="max-w-[1400px] mx-auto">
            <SectionTitle number="05" title="Transparent button" />
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4 md:pt-20">
                <p className="text-stone-400 text-[15px] leading-relaxed font-normal">
                  The outer glass layer is defined by transparency, blur, and soft edges. This creates the frosted, liquid-glass look and supports the sense of depth.
                </p>
              </div>
              <div className="md:col-span-8">
                <ImageCard
                  src={images.imageC}
                  alt="Glass effect and transparent layer"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Button main body: keep first image, second = Image_D */}
        <section
          className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 100% 70% at 80% 50%, rgba(250,250,249,0.9) 0%, rgba(245,245,244,0.85) 50%, rgba(231,229,228,0.8) 100%)',
          }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <SectionTitle number="06" title="Button main body" light />
            <p className="text-stone-600 max-w-xl mb-12 text-[15px] font-normal">
              Main body uses a linear gradient fill and a thin inside stroke. Corner radius keeps the pill shape consistent across Light and Dark.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="md:-mb-6">
                <ImageCard
                  src={images.lightProps}
                  alt="Light button fill, stroke, and corner radius"
                  className="w-full border-stone-200/60 shadow-premium-light"
                  light
                />
              </div>
              <div className="md:mt-6">
                <ImageCard
                  src={images.imageD}
                  alt="Dark button fill, stroke, dimensions"
                  className="w-full border-stone-200/60 shadow-premium-light"
                  light
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Shadow & depth: keep first image, add Image_E as second */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: '#0a0a0c' }}
        >
          <div className="max-w-[1400px] mx-auto">
            <SectionTitle number="07" title="Shadow & depth" />
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-8">
                <ImageCard
                  src={images.liquidGlassSpec}
                  alt="Glass effect and shadow specs"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-4 md:pt-16">
                <ImageCard
                  src={images.imageE}
                  alt="Dark button wireframe and layer blur"
                  className="w-full"
                />
              </div>
            </div>
            <p className="text-stone-400 text-[15px] leading-relaxed font-normal mt-8 max-w-xl">
              Inner and drop shadows give the button a three-dimensional feel and reinforce the liquid glass effect. Shadows are tuned per theme for contrast.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-16 text-center text-stone-500 text-sm font-normal border-t border-white/5"
          style={{ background: '#0a0a0c' }}
        >
          <p>Becky-UI</p>
        </footer>
      </main>
    </div>
  );
}
