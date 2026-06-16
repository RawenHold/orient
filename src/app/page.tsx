import { Footer } from "@/components/Footer";
import { InvestorLanding } from "@/components/InvestorLanding";
import { TopNav } from "@/components/TopNav";

export default function Home() {
  return (
    <main>
      <TopNav active="investor" />
      <InvestorLanding />
      <Footer />
    </main>
  );
}
