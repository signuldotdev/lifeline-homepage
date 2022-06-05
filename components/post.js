import Link from "next/link";
import Image from "next/image";
import LifelineCover from "../public/LifelineCover.png";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Image alt="Lifeline Cover" src={LifelineCover} layout="responsive" />
        <h3 className="mb-4 text-4xl font-bold tracking-tight leading-tight text-center md:text-left">
          An healthcare application for the digital age - with Next.js{" "}
        </h3>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <div className="mb-4 md:mb-0 text-lg">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc
              ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae
              ratio maxime quidem illis placuit quieta. Duo Reges: constructio
              interrete. Nam quid possumus facere melius?
            </h2>
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            title="Lifeafkjslfaskl"
          />
        </div>
      </div>
    </section>
  );
}
