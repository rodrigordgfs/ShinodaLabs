import Background from "../components/Background";
import Menu from "../components/Menu";
import Feed from "../components/Feed";
import FeedHeader from "../components/FeedHeader";
import FeedProjects from "../components/FeedProjects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col min-w-full items-center bg-zinc-50">
      <Background />
      <Menu />
      <div className="relative px-3 w-full max-w-full flex flex-col items-center">
        <Feed>
          <FeedHeader />
          <FeedProjects />
        </Feed>
      </div>
    </main>
  );
}
