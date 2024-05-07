import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <main className="flex h-screen flex-row justify-between p-10">
      <div className="basis-1/2">
        <Tabs/>
      </div>
      <div className="basis-1/2">
        test
      </div>
    </main>
  );
}
