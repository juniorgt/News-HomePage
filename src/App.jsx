import { ArticlesContainer } from "./components/ArticlesContainer";
import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { MainNew } from "./components/MainNew";

export default function App() {
  return (
    <>
      <Header />
      <main className="px-4 xl:grid xl:grid-cols-3 xl:gap-8 xl:px-36">
        <div className="col-span-2 row-span-2">
          <MainNew />
        </div>
        <div className="row-span-2">
          <Aside />
        </div>
        <div className="col-span-3">
          <ArticlesContainer />
        </div>
      </main>
    </>
  );
}
