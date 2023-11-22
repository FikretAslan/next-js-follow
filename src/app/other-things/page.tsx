import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border-red-500 bg-cyan-500">
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "32px",
        }}
      >
        Back to home
      </Link>
      <h2>Fikret 'Figo' Aslan</h2>
      <h2>Next and Tailwind is wild</h2>
      <h2>I guess we will persevere</h2>
      <h2>
        About me: I had a busy weekend but had the nicest slow-cooked lamb of my
        life.
      </h2>
      <h2>I'm 32 years of age but definetly do not act it.</h2>
      <h2>Ah, I spelt definitely wrong, corrected it here.</h2>
      <h2>
        I support Spurs but it stresses me out talking about them so please
        don't.
      </h2>
      <h2>
        I'll add a a picture or two when I feel brave enough to move away from
        h2 tags.
      </h2>
      <h2>I have an insanely, other-worldly steady hand.</h2>
      <h2> I cook the nicest home-made KFC.</h2>
    </main>
  );
}
