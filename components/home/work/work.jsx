import useScrollIntoView from "@/hooks/useScrollIntoView";
import { getWorkItems } from "@/lib/content/work";
import WorkItem from "./work-item/work-item";

const items = getWorkItems();

export default function Work() {
  const ref = useScrollIntoView("work");
  return (
    <section
      ref={ref}
      id="work"
      style={{ display: "flex", flexDirection: "column", gap: "50vh" }}
    >
      {items.map((item) => (
        <WorkItem key={item.id} item={item} />
      ))}
    </section>
  );
}
