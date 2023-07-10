import { NewArticle } from "./NewArticle";

const news = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means. ",
  },
];

export const Aside = () => {
  return (
    <aside className="mt-11 h-full bg-VeryDarkBlue px-6 py-6 leading-relaxed tracking-wide text-OffWhite xl:mt-0">
      <h1 className="text-3xl font-bold text-SoftOrange xl:text-[38px]">New</h1>
      {news.map(({ title, text }, idx) => (
        <NewArticle key={idx} title={title} text={text} />
      ))}
    </aside>
  );
};
