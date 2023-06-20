import BlogCard from "./BlogCard";
import { blogData } from "../../data/blog/blog";

export default function Blog({ prevStep }) {
  return (
    <div className="animate__animated animate__fadeInLeft w-full flex flex-col items-center justify-center sm:pb-6">
      <div className="mx-auto max-w-screen-xl py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-1xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]">
            Mon univers
          </h1>
          <p className="mt-2 sm:text-sm text-gray-500 pb-6">
            Vous trouverez des articles sur l'univers qui m'interesse et que
            j'ai envie de partager avec vous.
          </p>
        </div>
        <div
          className="flex flex-wrap gap-10 items-center justify-center"
          style={{ maxHeight: "450px", overflowY: "auto" }}
        >
          {blogData.map(({ picture, titre, subtitle, link }, index) => (
            <BlogCard
              key={index}
              picture={picture}
              titre={titre}
              subtitle={subtitle}
              link={link}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => prevStep()}
        className=" cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]"
      >
        Retour
      </button>
    </div>
  );
}
