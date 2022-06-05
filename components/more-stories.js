import YouTube from "./youtube";
import Figma from "./figma";

export default function MoreStories() {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Info
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        <YouTube />
        <Figma />
      </div>
    </section>
  );
}
