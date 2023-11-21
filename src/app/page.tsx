import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2 className="text-6xl pt-4 text-red-400">
        WOW SUCH COOL WEBSITE SO GOOD
      </h2>
      <Image
        src="/static/wow-doge.jpg"
        width={500}
        height={500}
        alt="orlylmao"
      />
      <Image
        src="/static/orly_owl.jpg"
        width={500}
        height={500}
        alt="orlylmao"
      />
    </div>
  );
}
