export const Article = ({ srcImage, number, title, text }) => {
  return (
    <article className="mb-7 flex gap-4">
      <div className="w-[100px]  flex-none">
        <img src={srcImage} alt="Retro pc" />
      </div>
      <div className="flex flex-col justify-between">
        <p className=" text-3xl font-bold text-GrayishBlue xl:text-4xl">
          {number}
        </p>
        <h1 className="cursor-pointer  text-sm font-black hover:text-SoftRed xl:text-lg">
          {title}
        </h1>
        <p className="mt-3  text-[14px] text-GrayishBlue xl:text-base">
          {text}
        </p>
      </div>
    </article>
  );
};
// mb-7 flex gap-4  md:w-[343px] md:flex-grow
