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
      {/* Hero — dark */}
      <header
        className="relative py-28 px-6 overflow-hidden"
        style={{ background: '#0a0a0c' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-6">Case Study</p>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 max-w-3xl mx-auto">
            Liquid Glass Button
          </h1>
          <p className="text-lg text-stone-400 max-w-xl mx-auto font-normal">
            A micro-interaction study exploring affordance, state transitions, and interaction fidelity through a theme toggle.
          </p>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6">
        {/* The Concept — light pearl, no flowchart, text-led */}
        <section
          className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(250,250,249,0.95) 0%, rgba(245,245,244,0.9) 40%, rgba(231,229,228,0.85) 100%)',
          }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <SectionTitle number="01" title="The Concept" light />
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 space-y-6 text-stone-600 leading-relaxed font-normal text-[15px]">
                <p>
                  This case study documents the design and implementation of a liquid glass toggle button—a single UI control that communicates theme (Light and Dark) through a translucent, neumorphic aesthetic. The goal was high interaction fidelity: the button should feel responsive and tangible, with clear affordance and a consistent feedback loop.
                </p>
                <p>
                  Visual language draws from glassmorphism and soft UI: frosted surfaces, subtle depth, and a glossy thumb that reads as the active region. Easing and timing were tuned so that state transitions feel natural rather than abrupt.
                </p>
                <p className="text-stone-500 text-sm">
                  Inspired by contemporary theme toggles and glass-style UI patterns. Component-based structure and consistent asset naming informed the flow used in this narrative.
                </p>
              </div>
              <div className="md:col-span-2 md:mt-16">
                <ImageCard
                  src={images.lightButton}
                  alt="Liquid glass Light button"
                  className="w-full"
                  light
                />
              </div>
            </div>
          </div>
        </section>

        {/* Complete Work — Bright Button Section (sophisticated dark) */}
        <section
          className="relative py-28 -mx-6 px-6 rounded-3xl overflow-hidden my-20"
          style={{ background: '#0a0a0c' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
          <div className="relative max-w-[1400px] mx-auto">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-4">Complete Work</p>
            <h2 className="text-xl font-medium text-stone-300 mb-14">Bright Button Section</h2>
            <div className="flex justify-center">
              <ImageCard
                src={images.completeWork}
                alt="Liquid glass toggle in Light and Dark modes"
                className="max-w-4xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Dark Button Section — light pearl, breathing room */}
        <section
          className="relative py-28 -mx-6 px-6 rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(255,255,255,0.9) 0%, rgba(250,250,249,0.85) 30%, rgba(231,229,228,0.75) 70%, rgba(214,211,209,0.7) 100%)',
          }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-4">Dark Button Section</p>
            <h2 className="text-xl font-medium text-stone-700 mb-14">Breathing room</h2>
            <div className="flex justify-center">
              <ImageCard
                src={images.completeWork}
                alt="Liquid glass Dark mode with subtle glow"
                className="max-w-4xl w-full border-stone-200/60 shadow-premium-light"
                light
              />
            </div>
          </div>
        </section>

        {/* Transition — diagonal split / gradient, both contexts */}
        <section
          className="relative py-28 -mx-6 px-6 rounded-3xl overflow-hidden my-20"
          style={{
            background: 'linear-gradient(135deg, #0a0a0c 0%, #171717 25%, #262626 50%, #404040 75%, #e7e5e4 100%)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_60%,rgba(255,255,255,0.06),transparent_50%)]" />
          <div className="relative max-w-[1400px] mx-auto">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 mb-4">Both contexts</p>
            <h2 className="text-xl font-medium text-stone-300 mb-14">Diagonal transition</h2>
            <div className="flex justify-center">
              <ImageCard
                src={images.completeWork}
                alt="Light and Dark liquid glass buttons"
                className="max-w-4xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Component display — staggered: text + overlapping card */}
        <section
          className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(250,250,249,0.95) 0%, rgba(245,245,244,0.9) 50%, rgba(231,229,228,0.85) 100%)',
          }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <SectionTitle number="02" title="Component display" light />
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-5 space-y-4 text-stone-600 text-[15px] leading-relaxed font-normal">
                <p>
                  Consistent naming for icons and components keeps state transitions and Smart Animate behaviour predictable. Name icons the same across frames so interactions stay smooth and the feedback loop feels coherent.
                </p>
              </div>
              <div className="md:col-span-7 md:pl-8">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-stone-200/30 blur-xl" />
                  <ImageCard
                    src={images.iconAssets}
                    alt="Icon assets and component library"
                    className="relative w-full border-stone-200/60 shadow-premium-light"
                    light
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction details — overlapping cards, no parameter text */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: '#0a0a0c' }}
        >
          <div className="max-w-[1400px] mx-auto">
            <SectionTitle number="03" title="Interaction details" />
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 md:order-2 md:-mt-8">
                <ImageCard
                  src={images.interaction}
                  alt="Interaction panel and transition behaviour"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-5 md:order-1 md:pt-12">
                <p className="text-stone-400 text-[15px] leading-relaxed font-normal max-w-md">
                  The transition from Light to Dark is driven by a single interaction: navigate to the target frame with Smart Animate. The motion is tuned for a quick but readable feedback loop so the control feels responsive and intentional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logic & States — card grid on dark */}
        <section
          className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden my-20"
          style={{
            background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(255,255,255,0.92) 0%, rgba(250,250,249,0.88) 40%, rgba(231,229,228,0.8) 100%)',
          }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <SectionTitle number="04" title="Logic & States" light />
            <p className="text-stone-600 max-w-2xl mb-12 text-[15px] font-normal">
              The button is deconstructed into clear states so that affordance and interaction fidelity stay high at every step. Each state has a distinct visual and, where relevant, motion treatment.
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

        {/* Detail 1 — Transparent / glass layer — asymmetric */}
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
                  src={images.wireframeLight}
                  alt="Transparent glass layer wireframe and properties"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detail 2 — Main body — staggered two cards */}
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
                  src={images.darkButton}
                  alt="Dark button fill, stroke, dimensions"
                  className="w-full border-stone-200/60 shadow-premium-light"
                  light
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detail 3 — Shadow & depth */}
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
                <p className="text-stone-400 text-[15px] leading-relaxed font-normal">
                  Inner and drop shadows give the button a three-dimensional feel and reinforce the liquid glass effect. Shadows are tuned per theme for contrast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual spec — two cards, no parameter list */}
        <section
          className="relative py-24 -mx-6 px-6 md:px-12 rounded-3xl overflow-hidden my-20"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(250,250,249,0.9) 0%, rgba(245,245,244,0.85) 50%, rgba(231,229,228,0.8) 100%)',
          }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <SectionTitle number="08" title="Visual spec" light />
            <p className="text-stone-600 max-w-xl mb-12 text-[15px] font-normal">
              Wireframe and outline view with glass effect parameters. The images carry the full specification.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <ImageCard
                src={images.wireframeOutline}
                alt="Wireframe and outline mode — all layers"
                className="w-full border-stone-200/60 shadow-premium-light"
                light
              />
              <ImageCard
                src={images.glassEffect}
                alt="Glass effect parameters"
                className="w-full border-stone-200/60 shadow-premium-light"
                light
              />
            </div>
          </div>
        </section>

        {/* Engineering Mastery — elegant single card + copy */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: '#0a0a0c' }}
        >
          <div className="max-w-[1400px] mx-auto">
            <SectionTitle number="09" title="Engineering mastery" />
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5 space-y-6">
                <p className="text-stone-400 text-[15px] leading-relaxed font-normal">
                  The micro-interaction was refined in code with Cursor: translating the visual spec into React and Tailwind CSS so that gradients, blur, shadows, and motion match the design. Implementation focuses on layered shadows and backdrop-filter for the liquid glass effect, consistent component and icon naming for predictable animations, and accessible focus and hover states to preserve affordance.
                </p>
                <p className="text-stone-500 text-sm font-normal">
                  This case study page is built with React and Tailwind, using a 1400px content width and section backgrounds that mirror the Bright, Dark, and Mixed treatments—demonstrating how the same design language extends from the button to the surrounding layout.
                </p>
              </div>
              <div className="md:col-span-7 md:pl-8">
                <ImageCard
                  src={images.lightButton}
                  alt="Final Light button implementation reference"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-16 text-center text-stone-500 text-sm font-normal border-t border-white/5"
          style={{ background: '#0a0a0c' }}
        >
          <p>Liquid Glass Button — Micro-Interaction Case Study</p>
          <p className="mt-1">1400px · React + Tailwind CSS</p>
        </footer>
      </main>
    </div>
  );
}
