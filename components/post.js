import Link from "next/link";
import Image from "next/image";
import LifelineCover from "../public/LifelineCover.png";

export default function HeroPost({}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Image alt="Lifeline Cover" src={LifelineCover} layout="responsive" />
        <h3 className="mt-6 text-4xl font-bold tracking-tight leading-tight text-center md:text-left">
          Lifeline: An Healthcare Solution
        </h3>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <div className="md:mb-0 text-lg">
            <h2>
              An application platform which provide hospital booking and other
              healthcare services. Lifeline connects patient and hospital in
              just 30+ seconds (search,book & pay). By using advance serach
              functionality users can search by (disease, symptoms & cause of
              illness).
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
