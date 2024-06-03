import { products } from "./productsData";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const page = () => {
  return (
    <div className="min-h-screen  w-full dark:bg-zinc-950 bg-[#FFFEFB] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-[#FFFEFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="lg:mx-36 md:mx-10 mx-5 w-full mt-20 flex flex-col z-30 ">
        <h1 className="text-5xl text-center">Products</h1>
        <div className="grid gap-7 md:grid-cols-3  place-items-center sm:mt-10 mt-8 mb-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="border dark:border-white/10 border-black/10 rounded-xl p-6 h-full bg-[#FFFEFB] dark:bg-zinc-950 flex flex-col shadow-md"
            >
              <div className="w-full h-[12rem] lg:h-[13rem] md:h-[11rem] rounded-xl object-contain ">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="rounded-xl w-full h-full"
                />
              </div>
              <div className="flex flex-col mt-6 flex-grow gap-3 ">
                <h1 className="text-zinc-900 dark:text-neutral-100 text-lg">
                  {product.name}
                </h1>
                <p className="text-sm text-zinc-600 dark:text-neutral-300">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto group">
                <Link href={`/products/${product.id}`}>
                  <button className="flex items-center text-zinc-600 dark:text-neutral-300 gap-2 mt-5 group-hover:text-zinc-900 dark:group-hover:text-[#FAFAFA]">
                    {product.button}
                    <span className="text-lg group-hover:translate-x-1 group-hover:text-xl transition-all">
                      <MdOutlineArrowRightAlt />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
