import Link from "next/link";

type gamesSearchQuery = {
  sortBy: string;
};

type gamesType = {
  name: string;
  id: number;
};

let games: gamesType[] = [
  {
    name: "WoW",
    id: 0,
  },
  {
    name: "LoL",
    id: 1,
  },
  {
    name: "CS2",
    id: 2,
  },
  {
    name: "Rocket League",
    id: 3,
  },
  {
    name: "FIFA",
    id: 4,
  },
  {
    name: "CoD",
    id: 5,
  },
];

function compareGames(a: gamesType, b: gamesType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: gamesSearchQuery;
}) {
  let sortedGames = [...games];

  if (searchParams.sortBy === "asc") {
    sortedGames.sort(compareGames);
  } else if (searchParams.sortBy === "desc") {
    sortedGames.sort(compareGames).reverse();
  }
  return (
    <div>
      <h2>This is all about games</h2>
      <p>{searchParams.sortBy}</p>
      <br />
      <br />
      <Link href="/">Back to home</Link>
      <br />
      <Link href="/about-me">Undo sort</Link>
      <br />
      <Link href="/about-me?sortBy=asc">Sort by ascending</Link>
      <br />
      <br />
      <Link href="/about-me?sortBy=desc">Sort by descending</Link>
      <br />
      <br />

      {sortedGames.map((game) => {
        return (
          <div key={game.id}>
            <Link href={`/about-me/${game.name.toLowerCase()}`}>
              {game.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
