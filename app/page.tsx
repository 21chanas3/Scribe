import Tabs from "@/components/Tabs";
import Display from "@/components/Display"

export default function Home() {
  return (
    <main className="flex h-screen max-w-screen flex-row justify-between p-10">
      <div className="basis-1/2">
        <Tabs/>
      </div>
      <div className="basis-1/2 px-5 flex">
        <Display/>
      </div>
    </main>
  );
}
