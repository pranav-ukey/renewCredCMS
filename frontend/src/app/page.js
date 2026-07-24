import Header from "@/components/layout/Header";
import HeroSection from "@/features/home/HeroSection";
import StandardsList from "@/features/home/StandardsList";
import { getAllStandards } from "@/services/standardService";

export default async function HomePage() {
  const response = await getAllStandards();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StandardsList standards={response.data} />
    </main>
  );
}