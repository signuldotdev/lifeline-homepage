import PostPreview from "./PostPreview";
import UberThumbnail from "../public/uberthumbnail.png";

export default function MoreStories() {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        <PostPreview title="Lifeline" src={UberThumbnail} />
        <PostPreview title="Lifeline" src={UberThumbnail} />
      </div>
    </section>
  );
}
