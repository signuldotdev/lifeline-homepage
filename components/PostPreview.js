import Link from "next/link";
import Image from "next/image";
import LifelineCover from "../public/LifelineCover.png";

export default function PostPreview() {
  return (
    <div>
      <div className="mb-5">
        <Image alt="Lifeline Cover" src={LifelineCover} title="Lifeline" />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={LifelineCover}>
          <a className="hover:underline" title="Lifeline"></a>
        </Link>
      </h3>
      <div className="text-3xl mb-4">
        <h1 className="mb-4">Lifeline - An healthcare Application</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas
          igitur mutare principia naturae? Ita multo sanguine profuso in
          laetitia et in victoria est mortuus. Omnia contraria, quos etiam
          insanos esse vultis. Hinc ceteri particulas arripere conati suam
          quisque videro voluit afferre sententiam. Quis non odit sordidos,
          vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.
        </p>
      </div>
      <div className="text-lg leading-relaxed mb-4">
        <h1>Github</h1>
      </div>
    </div>
  );
}
