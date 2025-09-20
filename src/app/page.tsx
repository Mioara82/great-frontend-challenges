import ChallengeForm from "./challenges/form";

export default function Home() {
  return (
    <div className="font-sans items-center max-w-full min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center sm:items-start">
        <h1 className="text-7xl">Great Frontend Challenges</h1>
        <section className="w-3xl max-w-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-1 border-cyan-950/40 rounded-md p-8 mt-10">
          <ChallengeForm />
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
