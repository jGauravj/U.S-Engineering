"use client";

import React from "react";
import { VscDash } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../productsData";
import { useState } from "react";

interface InformationDetail {
  feature: string;
  detail: string;
}
const info: InformationDetail[] = [
  { feature: "Feature 1", detail: "Detail 1" },
  { feature: "Feature 2", detail: "Detail 2" },
  // Add more items as needed
];

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const product = products.find((p) => p.id === params.id);

  const initialImages = product.productDetail.reduce((acc, curr) => {
    acc[curr.id] = curr.mainImage;
    return acc;
  }, {} as Record<number, StaticImageData | string>);

  const [selectedImage, setSelectedImage] = useState(initialImages);

  if (!product) {
    return notFound();
  }

  const handleThumbnailClick = (
    id: number,
    thumbnail: StaticImageData | string
  ) => {
    setSelectedImage({
      ...selectedImage,
      [id]: thumbnail,
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="lg:mx-36 md:mx-10 mx-5 mt-20 flex flex-col ">
        <div className="py-3 border rounded-lg dark:border-white/10 border-black/10 ">
          <h1 className="text-center text-lg text-zinc-900 dark:text-neutral-100">
            {product.name} Products
          </h1>
        </div>
        {product.productDetail.map((productDet) => (
          <div
            key={productDet.id}
            className="grid sm:grid-cols-1 md:grid-cols-[2fr_3fr] gap-3 border-b py-7"
          >
            <div className="flex flex-col gap-3">
              <div className="sm:max-h-[20rem] sm:min-h-[20rem] min-h-[15rem] max-h-[15rem] rounded-lg overflow-hidden border-1">
                <Image
                  src={selectedImage[productDet.id]}
                  alt={productDet.name}
                  className="rounded-lg object-fill inset-0 w-full h-full transition-all duration-500"
                />
              </div>
              <div className="border p-4 rounded-lg flex justify-between bg-zinc-900">
                {productDet.thumbnails.map((thumbnail, index) => (
                  <div
                    key={index}
                    className="sm:h-[6rem] sm:w-[6rem] h-[3rem] w-[3rem] rounded-xl "
                    onClick={() =>
                      handleThumbnailClick(productDet.id, thumbnail)
                    }
                  >
                    <Image
                      src={thumbnail}
                      alt={productDet.name}
                      className="rounded-lg object-cover inset-0 w-full h-full cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-center border py-2 rounded-lg items-center ring-orange-500 ring-1 hover:ring-2 ">
                <button className="flex items-center gap-2 sm:text-base text-sm ">
                  Info & Catalogue
                  <span>
                    <MdOutlineFileDownload />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 right-div w-full">
              <div className="rounded-lg flex flex-col w-full">
                <div className="border rounded-lg py-3 pl-5">
                  <h1 className="text-base text-zinc-900 dark:text-neutral-100">{productDet.name}</h1>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <h1 className="text-lg text-zinc-900 dark:text-neutral-100">
                    Description
                  </h1>
                  <div className="border rounded-lg py-3 pl-5 pr-3">
                    <ul className="flex flex-col gap-1">
                      {productDet.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-zinc-600 dark:text-neutral-300 sm:text-base text-sm "
                        >
                          <span>
                            <VscDash />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-3 w-full gap-2">
                <h1 className="text-lg text-zinc-900 dark:text-neutral-100">
                  Technical Information
                </h1>
                <div className=" border rounded-lg ">
                  {productDet.information.map((info, index) => (
                    <table key={index} className="w-full table-auto p-3 ">
                      <tbody>
                        <tr
                          className={
                            index === productDet.information.length - 1
                              ? ""
                              : "border-b"
                          }
                        >
                          <td className="w-1/2 border-r sm:text-base text-sm pl-4 text-zinc-600 dark:text-neutral-300 py-2">
                            {info.feature}
                          </td>
                          <td className="pl-4 py-2 text-zinc-600 sm:text-base text-sm dark:text-neutral-300">
                            {info.detail}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
