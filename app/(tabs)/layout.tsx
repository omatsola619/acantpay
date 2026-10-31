import TabBar from "@/components/shell/TabBar";

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <TabBar />
    </div>
  );
}
