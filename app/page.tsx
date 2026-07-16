import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import SocialProof from "@/app/components/SocialProof";
import Pricing from "@/app/components/Pricing";
import WaitlistForm from "@/app/components/WaitlistForm";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Pricing />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
