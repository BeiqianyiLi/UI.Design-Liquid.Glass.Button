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
        <div className="space-y-20 py-20">
          {/* 01 — The Concept (minimal intro) */}
          <section
            className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
            style={{
              background:
                'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(250,250,249,0.95) 0%, rgba(245,245,244,0.9) 40%, rgba(231,229,228,0.85) 100%)',
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

          {/* 02 — Transparent button (glass effect) */}
          <section
            className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
            style={{ background: '#0a0a0c' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(255,255,255,0.05),transparent_70%)]" />
            <div className="relative max-w-[1400px] mx-auto">
              <SectionTitle number="02" title="Transparent button" />
              <div className="grid md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-4">
                  <p className="text-stone-400 text-[15px] leading-relaxed font-normal">
                    The outer glass layer holds the halo and lens effect, creating a soft, liquid edge around the active state.
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

          {/* 03 — Button main body */}
          <section
            className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
            style={{
              background:
                'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(250,250,249,0.95) 0%, rgba(245,245,244,0.9) 40%, rgba(231,229,228,0.85) 100%)',
            }}
          >
            <div className="relative max-w-[1400px] mx-auto">
              <SectionTitle number="03" title="Button main body" light />
              <p className="text-stone-600 max-w-xl mb-12 text-[15px] font-normal">
                The core pill structure defines the hit area, typography, and icon alignment for both Light and Dark themes.
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

          {/* 04 — Component display (contexts) */}
          <section
            className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
            style={{ background: '#0a0a0c' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
            <div className="relative max-w-[1400px] mx-auto">
              <SectionTitle number="04" title="Component display" />
              <div className="flex justify-center">
                <ImageCard
                  src={images.imageB}
                  alt="Button components in different contexts"
                  className="max-w-4xl w-full"
                />
              </div>
            </div>
          </section>

          {/* 05 — Interaction (Fluid interaction logic) */}
          <section
            className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
            style={{
              background:
                'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(250,250,249,0.95) 0%, rgba(245,245,244,0.9) 40%, rgba(231,229,228,0.85) 100%)',
            }}
          >
            <div className="relative max-w-[1400px] mx-auto">
              <SectionTitle number="05" title="Interaction" light />
              <div className="grid md:grid-cols-12 gap-10 items-start">
                <div className="md:col-span-5 md:pt-6">
                  <p className="text-stone-600 text-[15px] leading-relaxed font-normal max-w-md">
                    The interaction links Light and Dark scenes through a single, fluid flow. The thumb glides between states while the surrounding glass softens the motion and keeps the focus on the active side.
                  </p>
                </div>
                <div className="md:col-span-7">
                  <ImageCard
                    src={images.interactionNew}
                    alt="Fluid interaction logic between Light and Dark"
                    className="w-full border-stone-200/60 shadow-premium-light"
                    light
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 06 — Shadow & depth (three images) */}
          <section
            className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
            style={{ background: '#0a0a0c' }}
          >
            <div className="max-w-[1400px] mx-auto">
              <SectionTitle number="06" title="Shadow & depth" />
              <div className="grid md:grid-cols-3 gap-8">
                <ImageCard
                  src={images.liquidGlassSpec}
                  alt="Glass effect and shadow specifications"
                  className="w-full"
                />
                <ImageCard
                  src={images.imageE}
                  alt="Dark button halo and lens detail"
                  className="w-full"
                />
                <ImageCard
                  src={images.shadowExtra}
                  alt="Wireframe view emphasising layered depth"
                  className="w-full"
                />
              </div>
              <p className="text-stone-400 text-[15px] leading-relaxed font-normal mt-8 max-w-xl">
                Layered inner and outer shadows give the button its depth and softness, making the liquid glass surface feel tactile without overwhelming the layout.
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
        </div>
      </main>
    </div>
  );
}
