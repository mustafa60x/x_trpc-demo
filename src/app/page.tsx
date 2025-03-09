import Counter from "./components/counter";

export default async function Home() {

  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div>
        <Counter />
      </div>
    </div>
  );
}