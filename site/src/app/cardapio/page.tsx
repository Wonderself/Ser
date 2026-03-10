import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

interface Product {
  name: string;
  description: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "doces",
    title: "Doces Saudáveis",
    subtitle: "A arte de fazer vontade em vocês — sem culpa!",
    products: [
      {
        name: "Brownie Sem Glúten",
        description: "Farinha de amêndoas, chocolate 70%, cacau 100%, nozes e amêndoas em lâminas",
        image: "/photos/ser.levemente_1745349010_3616572083368822439_6683801803_1.jpg",
      },
      {
        name: "Cookies Vegan",
        description: "Chocolate e castanha do pará. Caixinha com 6 unidades",
        image: "/photos/ser.levemente_1745346648_3616552271900707356_6683801803_10.jpg",
      },
      {
        name: "Cookies Recheados",
        description: "3 recheios: amêndoas laminadas + matcha, coco queimado + geleia de morango, bala de banana + castanha do pará",
        image: "/photos/ser.levemente_1745346648_3616552271917595464_6683801803_12.jpg",
      },
      {
        name: "Brigadeiro Saudável",
        description: "Feito com muito cacau e carinho. A arte de fazer vontade em vocês",
        image: "/photos/ser.levemente_1535734059_1858194432412569885_6683801803_2.jpg",
      },
      {
        name: "Torta de Limão",
        description: "Base de mandioca com limão, casquinha crocante e merengue suíço com ingredientes não processados",
        image: "/photos/ser.levemente_1533559526_1839953124690740115_6683801803_8.jpg",
      },
      {
        name: "Muffins de Chocolate",
        description: "Com nozes e cacau puro, sem glúten",
        image: "/photos/ser.levemente_1535555625_1856697615237570673_6683801803_4.jpg",
      },
    ],
  },
  {
    id: "salgados",
    title: "Salgados Saudáveis",
    subtitle: "Ah, mas não sou chegada no doce... Não tem problema!",
    products: [
      {
        name: "Quibe de Abóbora",
        description: "Com quinoa, muitas especiarias e hortelã, recheado com carne de soja",
        image: "/photos/ser.levemente_1568567476_2133621091650608014_6683801803_12.jpg",
      },
      {
        name: "Pãozinho de Beterraba",
        description: "Com sementes e alecrim, disponível para vendas e encomendas",
        image: "/photos/ser.levemente_1559781853_2059921948084582377_6683801803_8.jpg",
      },
      {
        name: "Pão Artesanal",
        description: "Com cream cheese de ervas e suco natural",
        image: "/photos/ser.levemente_1569699713_2143118985558736132_6683801803_7.jpg",
      },
      {
        name: "Homus",
        description: "Pasta árabe de grão-de-bico, indispensável em uma dieta vegana e vegetariana",
        image: "/photos/ser.levemente_1519508988_1722088671233852388_6683801803_8.jpg",
      },
      {
        name: "Quiche Funcional",
        description: "Massa artesanal com recheio de legumes frescos",
        image: "/photos/ser.levemente_1548196844_1962739844117326612_6683801803_6.jpg",
      },
    ],
  },
  {
    id: "pratos",
    title: "Pratos Principais",
    subtitle: "Refeições completas, nutritivas e deliciosas",
    products: [
      {
        name: "PadThai Vegetariano",
        description: "Explosão de sabores e ingredientes que juntos se potencializam",
        image: "/photos/ser.levemente_1561128497_2071218418955904581_6683801803_1.jpg",
      },
      {
        name: "Marmitas Saudáveis",
        description: "Pratos principais com ingredientes frescos e gratinados",
        image: "/photos/ser.levemente_1555069958_2020395708588218435_6683801803_4.jpg",
      },
      {
        name: "Arroz Integral Vegan",
        description: "Com ervilha, abobrinha, cenoura e especiarias com couve refogadinha. Prático, fácil, leve e nutritivo",
        image: "/photos/ser.levemente_1525532567_1772618114137056438_6683801803_10.jpg",
      },
    ],
  },
  {
    id: "bolos",
    title: "Bolos & Tortas Especiais",
    subtitle: "Para momentos que merecem algo especial",
    products: [
      {
        name: "Bolo Primavera",
        description: "Massa de chocolate e raspas de laranja, sem glúten, sem gordura, molhadinho com calda de maçã",
        image: "/photos/ser.levemente_1565651578_2109160769053505539_6683801803_10.jpg",
      },
      {
        name: "Bolo de Chocolate com Coco",
        description: "Cobertura de chocolate com copeaux de coco tostado",
        image: "/photos/ser.levemente_1555252604_2021927849780141228_6683801803_3.jpg",
      },
      {
        name: "Ovo de Colher",
        description: "Brownie diet, pistache, vegano cookies — para a Páscoa com consciência",
        image: "/photos/ser.levemente_1745349010_3616572083092053460_6683801803_4.jpg",
      },
    ],
  },
];

export default function Cardapio() {
  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <section className="py-12 bg-cream">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-primary-dark mb-4">
            Cardápio
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Todos os nossos produtos são feitos com ingredientes naturais, sem conservantes
            artificiais. Alimentos saudáveis e não fit — entender o que se come é
            fundamental para uma boa saúde a longo prazo.
          </p>

          {/* Category links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-5 py-2 rounded-full border border-primary/30 text-sm text-primary-dark hover:bg-primary-dark hover:text-cream transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title={category.title} subtitle={category.subtitle} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-primary-dark text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {product.description}
                    </p>
                    <a
                      href="https://wa.me/3300000000?text=Ol%C3%A1!%20Gostaria%20de%20encomendar%20o%20produto%20seguinte%3A%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-primary-dark hover:text-primary transition-colors font-medium"
                    >
                      Encomendar →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Note */}
      <section className="py-12 bg-sage-light/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-foreground/70 leading-relaxed">
            Não precisa ser vegano para comer um prato vegano! É uma explosão de sabores
            toda experiência de comer um prato desses. A consciência é de cada um, e cada
            um no seu tempo e processo.
          </p>
          <p className="text-primary-dark mt-4 italic">
            Sabedoria nas escolhas sempre vai ser o melhor caminho.
          </p>
        </div>
      </section>
    </div>
  );
}
