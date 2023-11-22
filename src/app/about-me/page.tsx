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
      <h2 className="text-5xl pt-4 text-black-400">This is all about games</h2>
      <p>{searchParams.sortBy}</p>
      <br />
      <br />
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
      <br />
      <br />
      <Link
        href="/about-me"
        style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "32px",
        }}
      >
        Undo sort
      </Link>
      <br />
      <br />
      <Link
        href="/about-me?sortBy=asc"
        style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "32px",
        }}
      >
        Sort by ascending
      </Link>
      <br />
      <br />
      <Link
        href="/about-me?sortBy=desc"
        style={{
          textDecoration: "none",
          color: "blue",
          fontSize: "32px",
        }}
      >
        Sort by descending
      </Link>
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
