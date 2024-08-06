import HomeContent from "./components/HomeContent";
import HomeFooter from "./components/HomeFooter";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  return (
    <div className="w-full max-w-full h-screen max-h-screen text-zinc-50 flex flex-col bg-pattern bg-no-repeat bg-center">
      <div className="flex flex-col max-w-6xl w-full h-screen mx-auto px-4">
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
      </div>
    </div>
  );
}
