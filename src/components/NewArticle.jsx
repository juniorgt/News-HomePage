export const NewArticle = ({ title, text }) => {
  return (
    <article className="border-b-2 border-GrayishBlue py-7 last:border-none last:pb-0 xl:py-9">
      <h2 className="cursor-pointer text-base font-black hover:text-SoftOrange xl:text-lg">
        {title}
      </h2>
      <p className="mt-2 text-sm xl:text-base">{text}</p>
    </article>
  );
};
