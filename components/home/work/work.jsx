import { getWorkItems } from "@/lib/work";
import WorkItem from "./work-item/work-item";

const items = getWorkItems();

export default function Work() {
  return (
    <section id="work">
      {items.map((item) => (
        <WorkItem key={item.id} item={item} />
      ))}
    </section>
  );
}
