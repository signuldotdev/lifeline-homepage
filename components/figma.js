import Link from "next/link";
import Image from "next/image";
import Figma from "../public/figma.png";

export default function figma() {
  return (
    <div>
      <div className="mb-5">
        <Image alt="Lifeline Cover" src={Figma} title="Lifeline" />
      </div>

      <div className="text-3xl mb-4">
        <h1 className="mb-4">Lifeline - Ui build + Prototype</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
        <a
          href="https://www.figma.com/community/file/1104722212846323572"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          Watch Community Build
        </a>
      </div>
    </div>
  );
}
