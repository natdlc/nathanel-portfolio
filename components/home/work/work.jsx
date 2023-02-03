import { getWorkItems } from "@/lib/work";
import WorkItem from "./work-item/work-item";

const items = getWorkItems();

export default function Work() {
  return (
    <section
      id="work"
      style={{ display: "flex", flexDirection: "column", gap: "50vh" }}
    >
      {items.map((item) => (
        <WorkItem key={item.id} item={item} />
      ))}
    </section>
  );
}
