export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1
        className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8
      "
      >
        Lifeline.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        An Healthcare Application - Case Study || More on{" "}
        <a
          href="https://www.figma.com/community/file/1104722212846323572"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Figma
        </a>
        .
      </h4>
    </section>
  );
}
