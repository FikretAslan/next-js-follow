import Link from "next/link";

type gamesParam = { params: { games: string } };

export function generateMetadata({ params }: gamesParam) {
  const modTitle = params.games[0].toUpperCase() + params.games.slice(1);
  return {
    title: `Fikret's games - ${modTitle}`,
    description: `Fikret's games - fun facts about ${params.games}`,
  };
}

export default function Page({ params }: gamesParam) {
  return (
    <div>
      <h3>Games: {params.games}</h3>
      <Link href="/about-me">{`Go back`}</Link>
    </div>
  );
}
