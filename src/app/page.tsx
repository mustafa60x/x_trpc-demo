import TrpcDemo from "../components/TrpcDemo";

export default async function Home() {

  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div>
        <TrpcDemo />
      </div>
    </div>
  );
}