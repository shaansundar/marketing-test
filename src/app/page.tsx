import Image from "next/image";

export default function Home() {
  return (
    <div className="flex z-10 flex-col items-center justify-center w-screen h-screen">
      <div className="w-5/6 p-8 h-5/6 md:h-1/2 max-w-3xl bg-white/10 rounded-lg backdrop-blur-2xl flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg">How Could You...</h1>
        <h1 className="text-4xl md:text-6xl font-bold">Not Be a Developer?</h1>
        <p className="text-sm mt-4 md:mt-8">Hi! I&apos;m a Frontend developer currently pursuing my MBA. I have no clue how everything I&apos;m taught works in real life. Hence, this stunt is just an attempt to understand the extent of marketing</p>
        <p className="text-sm mt-0">While I learn how this fictional campaign works, you go ahead and play along this carefully curated maze. There&apos;s something nice waiting for you at the end of it.</p>
        </div>
        <a target="_blank" href="https://x.com/0xNotthatsundar" className="text-sm mt-4 w-full max-w-60 h-10 rounded-lg bg-black text-white flex items-center justify-center gap-2">
          <span>
            Continue on
          </span>
          <Image src="/x.svg" alt="X" width={24} height={24} className="size-4" />
        </a>
      </div>
    </div>
  );
}
