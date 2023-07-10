import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";

import { Article } from "./Article";

const listArticles = [
  {
    srcImage: img1,
    number: "01",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
  },
  {
    srcImage: img2,
    number: "02",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
  },
  {
    srcImage: img3,
    number: "03",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
  },
];

export const ArticlesContainer = () => {
  return (
    <section className="mb-16 mt-14 tracking-wide xl:mb-0 xl:mt-4 xl:grid xl:grid-cols-3 xl:gap-9">
      {listArticles.map(({ srcImage, number, title, text }, idx) => (
        <Article
          key={idx}
          srcImage={srcImage}
          number={number}
          title={title}
          text={text}
        />
      ))}
    </section>
  );
};
