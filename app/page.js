import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
import Favicon from '/public/logo-1.png';



export const metadata = {
  title: {
    template: '%s | Store',
    default:'Store',
  },
  generator: 'Next.js',
  description: 'My Store by create next app',
  keywords: ['Next.js', 'React', 'JavaScript'],
  creator: 'Ahmed Azouz',
  publisher: 'Ahmed Azouz',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductSection />
    </main>
  );
}
