import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

export const MainNew = () => {
  return (
    <section>
      <picture>
        <source media="(max-width: 639px)" srcSet={imageMobile} />
        <source media="(min-width: 640px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Image of the main new" />
      </picture>
      <div className="pt-[23px] xl:flex xl:gap-9">
        <div className="flex-1">
          <h1 className="text-[34px] font-black leading-none xl:text-6xl">
            The Bright Future of Web 3.0?{" "}
          </h1>
        </div>
        <div className="flex-1 xl:relative">
          <p className="mb-6 pt-5 text-[14px] tracking-wide text-DarkGrayishBlue xl:pt-0 xl:text-base">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="bottom-0 flex h-[48px] w-[185px] cursor-pointer items-center justify-center bg-SoftRed hover:bg-VeryDarkBlue xl:absolute">
            <a
              className="font-bold uppercase tracking-widest text-OffWhite"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
