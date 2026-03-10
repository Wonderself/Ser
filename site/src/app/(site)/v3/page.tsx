import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Doces",
    description: "Brownies, cookies, brigadeiros",
    image: "/photos/ser.levemente_1745349010_3616572083368822439_6683801803_1.jpg",
    href: "/cardapio#doces",
  },
  {
    title: "Salgados",
    description: "Quibes, pães, quiches",
    image: "/photos/ser.levemente_1569699713_2143118985558736132_6683801803_7.jpg",
    href: "/cardapio#salgados",
  },
  {
    title: "Pratos",
    description: "Refeições nutritivas",
    image: "/photos/ser.levemente_1561128497_2071218418955904581_6683801803_1.jpg",
    href: "/cardapio#pratos",
  },
  {
    title: "Bolos",
    description: "Ocasiões especiais",
    image: "/photos/ser.levemente_1535555625_1856697615237570673_6683801803_4.jpg",
    href: "/cardapio#bolos",
  },
];

export default function HomeV3() {
  return (
    <>
      {/* Hero - Pistachio bg, text + photo collage */}
      <section className="bg-pistachio-light min-h-[100svh] flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 py-10 md:py-20 w-full">
          <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-10 items-center">
            {/* Text - 2 cols on desktop */}
            <div className="w-full md:col-span-2">
              <span className="inline-block bg-pistachio-deep text-white text-[10px] sm:text-xs tracking-[0.35em] uppercase px-4 py-2 rounded-full mb-5 font-semibold">
                Cozinha Consciente
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-pistachio-deep leading-none mb-1">
                Ser
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light italic text-primary-dark/70 leading-none mb-6">
                Levemente
              </h1>
              <p className="text-foreground/55 text-base sm:text-lg max-w-sm mb-8 leading-relaxed">
                Comida saudável com afeto. Simplificar, trazer comida boa,
                saudável, descomplicada na versão gostosa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cardapio"
                  className="bg-pistachio-deep text-white px-7 py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-pistachio-dark transition-colors shadow-lg shadow-pistachio-deep/25 font-semibold text-center"
                >
                  Cardápio
                </Link>
                <Link
                  href="/contato"
                  className="border-2 border-pistachio-deep text-pistachio-deep px-7 py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-pistachio-deep hover:text-white transition-colors text-center"
                >
                  Encomenda
                </Link>
              </div>
            </div>

            {/* Photo collage - 3 cols on desktop */}
            <div className="w-full md:col-span-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl translate-y-4 md:translate-y-6">
                  <Image
                    src="/photos/ser.levemente_1745349010_3616572083368822439_6683801803_1.jpg"
                    alt="Ser Levemente"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl -translate-y-4 md:-translate-y-6">
                  <Image
                    src="/photos/ser.levemente_1535555625_1856697615237570673_6683801803_4.jpg"
                    alt="Ser Levemente"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Pill badges */}
      <section className="py-5 md:py-6 bg-pistachio/25">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {["Saudável", "Low Carb", "Vegano", "Funcional", "Sem Glúten", "Natural"].map((v) => (
              <span key={v} className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-pistachio-deep bg-white/70 px-4 py-2 rounded-full font-medium">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Cards on pistachio tint */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10 md:mb-16">
            <span className="inline-block bg-pistachio-light text-pistachio-deep text-[10px] sm:text-xs tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-3 font-semibold">
              Explore
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-primary-dark">
              Nosso Cardápio
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-pistachio-light/25 rounded-2xl md:rounded-3xl overflow-hidden hover:bg-pistachio-light/45 transition-all"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 md:p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl text-primary-dark font-medium">{cat.title}</h3>
                    <p className="text-foreground/45 text-sm mt-0.5">{cat.description}</p>
                  </div>
                  <span className="bg-pistachio-deep text-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shrink-0 ml-3">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-16 md:py-28 bg-pistachio-light relative overflow-hidden">
        <div className="absolute top-0 left-4 md:left-8 text-[8rem] md:text-[15rem] leading-none text-pistachio/25 font-serif select-none">
          &ldquo;
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <p className="text-foreground/55 leading-relaxed text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 font-light">
            Somos não só o que comemos, e sim o que somos, o que
            consumimos, o que vestimos, a música que ouvimos, o conteúdo que consumimos
            no dia-a-dia.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl italic text-pistachio-deep font-light">
            &quot;Seja leve me leve&quot;
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10 md:mb-16">
            <span className="inline-block bg-pistachio-light text-pistachio-deep text-[10px] sm:text-xs tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-3 font-semibold">
              Instagram
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-primary-dark">@ser.levemente</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-2">
            {[
              "ser.levemente_1745349010_3616572083368822439_6683801803_1.jpg",
              "ser.levemente_1745346648_3616552271900707356_6683801803_10.jpg",
              "ser.levemente_1535555625_1856697615237570673_6683801803_4.jpg",
              "ser.levemente_1569699713_2143118985558736132_6683801803_7.jpg",
              "ser.levemente_1565651578_2109160769053505539_6683801803_10.jpg",
              "ser.levemente_1561128497_2071218418955904581_6683801803_1.jpg",
              "ser.levemente_1548196844_1962739844117326612_6683801803_6.jpg",
              "ser.levemente_1543222645_1921013244313337774_6683801803_5.jpg",
              "ser.levemente_1542112822_1911703368185536361_6683801803_8.jpg",
              "ser.levemente_1535734059_1858194432412569885_6683801803_2.jpg",
              "ser.levemente_1533559526_1839953124690740115_6683801803_8.jpg",
              "ser.levemente_1531318387_1821153085914835252_6683801803_8.jpg",
            ].map((file, i) => (
              <div key={i} className="aspect-square relative rounded-lg md:rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5">
                <Image
                  src={`/photos/${file}`}
                  alt="Ser Levemente"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-pistachio-deep">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 md:mb-6">Faça sua encomenda</h2>
          <p className="text-white/60 mb-8 md:mb-12 text-sm md:text-lg">
            WhatsApp ou formulário de contato
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://wa.me/3300000000?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20com%20a%20Ser%20Levemente!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pistachio-deep px-9 py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-pistachio-light transition-colors shadow-lg font-semibold"
            >
              WhatsApp
            </a>
            <Link
              href="/contato"
              className="border-2 border-white/40 text-white px-9 py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-pistachio-deep transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
