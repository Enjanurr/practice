import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
// This is the main page
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
    </main>
  );
}
