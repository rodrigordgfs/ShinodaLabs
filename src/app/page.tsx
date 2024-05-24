import Background from "../components/Background";
import Menu from "../components/Menu";
import Feed from "../components/Feed";
import FeedHeader from "../components/FeedHeader";
import FeedProjects from "../components/FeedProjects";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";

export interface TabsProps {
  label: string;
  content: JSX.Element;
}

export default function Home() {
  const tabs: TabsProps[] = [
    {
      label: "Projetos",
      content: <FeedProjects />,
    },
    {
      label: "Carreira",
      content: <div>Em breve ...</div>,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col min-w-full items-center bg-zinc-50">
      <Background />
      <Menu />
      <div className="relative px-3 w-full max-w-full flex flex-col items-center">
        <Feed>
          <FeedHeader />
          <Tabs tabs={tabs} />
        </Feed>
      </div>
      <Footer />
    </main>
  );
}
