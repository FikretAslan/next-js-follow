import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2 className="text-6xl pt-4 text-white-400">
        WOW SUCH COOL WEBSITE SO GOOD
      </h2>
      <Image
        src="/static/wow-doge.jpg"
        width={400}
        height={400}
        alt="orlylmao"
      />
      <Image
        src="/static/orly_owl.jpg"
        width={400}
        height={400}
        alt="orlylmao"
      />
      <Image
        src="/static/brian.jpg"
        width={400}
        height={400}
        alt="badluckbrian"
      />
      <Image src="/static/elf-meme.jpg" width={400} height={400} alt="elf" />
      <Image
        src="/static/grumpy-cat.jpg"
        width={400}
        height={400}
        alt="grumpy"
      />
      <Image src="/static/rs.jpg" width={400} height={400} alt="rs" />
    </div>
  );
}
