import Footer from "./footer";
import GetInTouch from "./get_in_touch";
import Header from "./header";
import Hero from "./hero";
import { MarqueeSection } from "./marquee";
import TeamPrincipals from "./team_principals";


export default function Home() {
  return (
    <>
      <Header />

      <main className="container mx-auto border-x">
        <Hero />

        <MarqueeSection />

        <TeamPrincipals />

        <GetInTouch />
      </main>

      <Footer />
    </>
  );
}
