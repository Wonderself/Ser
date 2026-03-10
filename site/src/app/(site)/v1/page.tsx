import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Doces Saudáveis",
    description: "Brownies, cookies, brigadeiros e muito mais",
    image: "/photos/ser.levemente_1745349010_3616572083368822439_6683801803_1.jpg",
    href: "/cardapio#doces",
  },
  {
    title: "Salgados",
    description: "Quibes, pães, quiches e tortas",
    image: "/photos/ser.levemente_1569699713_2143118985558736132_6683801803_7.jpg",
    href: "/cardapio#salgados",
  },
  {
    title: "Pratos Principais",
    description: "Refeições completas e nutritivas",
    image: "/photos/ser.levemente_1561128497_2071218418955904581_6683801803_1.jpg",
    href: "/cardapio#pratos",
  },
  {
    title: "Bolos & Tortas",
    description: "Para ocasiões especiais",
    image: "/photos/ser.levemente_1535555625_1856697615237570673_6683801803_4.jpg",
    href: "/cardapio#bolos",
  },
];

const pillars = [
  { icon: "🌿", title: "Saudável", text: "Ingredientes naturais" },
  { icon: "🍃", title: "Low Carb", text: "Sem perder o sabor" },
  { icon: "🌱", title: "Vegetariana", text: "Plant-based delicioso" },
  { icon: "✨", title: "Funcional", text: "Cada ingrediente importa" },
];

export default function Home() {
  return (
    <>
      {/* Hero - Photo first on mobile, side-by-side on desktop */}
      <section className="bg-sand min-h-[100svh] flex items-center">
        <div className="max-w-6xl mx-auto px-5 py-10 md:py-20 w-full">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Photo - shows first on mobile, right on desktop */}
            <div className="w-full md:order-2">
              <div className="relative aspect-[3/4] md:aspect-auto md:h-[560px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/photos/ser.levemente_1745349010_3616572083368822439_6683801803_1.jpg"
                  alt="Ser Levemente"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:order-1">
              <span className="inline-block bg-coral text-white text-xs tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-5 font-medium shadow-md shadow-coral/20">
                Cozinha Consciente
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-light italic tracking-wide text-primary-dark leading-tight mb-2">
                Leve
              </h1>
              <span className="text-sm sm:text-base tracking-[0.4em] uppercase text-coral font-semibold block mb-6">
                Mente
              </span>
              <p className="text-foreground/70 leading-relaxed mb-8 max-w-md text-base sm:text-lg">
                Comida saudável com afeto desde 2017. Simplificar, trazer comida boa,
                saudável, descomplicada na versão gostosa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cardapio"
                  className="bg-coral text-white px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-coral-dark transition-colors shadow-lg shadow-coral/25 text-center font-medium"
                >
                  Ver Cardápio
                </Link>
                <Link
                  href="/contato"
                  className="border-2 border-primary-dark/80 text-primary-dark px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-primary-dark hover:text-white transition-colors text-center"
                >
                  Fazer Encomenda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="text-center p-5 md:p-6 rounded-2xl bg-sand hover:bg-coral-light/50 transition-colors border border-coral/5">
                <span className="text-2xl md:text-3xl block mb-2">{p.icon}</span>
                <h3 className="font-semibold text-primary-dark mb-0.5 text-sm md:text-base">{p.title}</h3>
                <p className="text-xs text-foreground/55 leading-snug">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 md:py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary-dark">Nosso Cardápio</h2>
            <p className="text-foreground/55 mt-2 text-sm md:text-base">Comida inclusiva com ingredientes naturais</p>
            <div className="w-12 h-0.5 bg-coral mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-medium text-primary-dark mb-1">{cat.title}</h3>
                  <p className="text-sm text-foreground/50">{cat.description}</p>
                  <span className="inline-block mt-3 text-coral text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Explorar &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 md:py-20 bg-coral-light/30">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary-dark mb-6">
            O que nutre sua mente?
          </h2>
          <div className="w-12 h-0.5 bg-coral mx-auto mb-6" />
          <p className="text-foreground/65 leading-relaxed text-base md:text-lg mb-5">
            O levemente é mais que um simples negócio. Trabalhamos com nutrição de uma
            forma geral: porque somos não só o que comemos, e sim o que somos, o que
            consumimos, o que vestimos, a música que ouvimos, o conteúdo que consumimos
            no dia-a-dia.
          </p>
          <p className="text-foreground/65 leading-relaxed text-base md:text-lg mb-8">
            Nutrir nossa mente com equilíbrio e consciência é um convite para uma vida
            mais bem vivida. Estamos aqui para fazer você levar a vida um pouco mais
            leve.
          </p>
          <p className="text-xl md:text-2xl italic text-coral-dark font-light">
            &quot;Seja leve me leve&quot;
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-light text-primary-dark">Do nosso Instagram</h2>
            <p className="text-foreground/50 mt-1 text-sm">@ser.levemente</p>
            <div className="w-12 h-0.5 bg-coral mx-auto mt-4" />
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
              <div key={i} className="aspect-square relative rounded-lg md:rounded-xl overflow-hidden">
                <Image
                  src={`/photos/${file}`}
                  alt="Ser Levemente"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://instagram.com/ser.levemente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-coral text-white px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-coral-dark transition-colors shadow-md shadow-coral/20"
            >
              Siga-nos no Instagram &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-3">Faça sua encomenda</h2>
          <p className="text-white/60 mb-8 text-sm md:text-base">
            Entre em contato pelo WhatsApp ou pelo nosso formulário
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://wa.me/3300000000?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20com%20a%20Ser%20Levemente!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/25 font-medium"
            >
              WhatsApp
            </a>
            <Link
              href="/contato"
              className="border-2 border-white/30 text-white px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-white hover:text-primary-dark transition-colors"
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
