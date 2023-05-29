import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center bg-neutral-1 ">
      <div className="grid max-w-xs gap-4 rounded-lg bg-neutral-2 p-4 shadow-2xl">
        <div className="relative">
          <Image
            src={"/images/image-equilibrium.jpg"}
            alt=""
            width={604}
            height={604}
            className="rounded-lg"
          />
          <div className="absolute top-0 grid aspect-square w-full cursor-pointer place-content-center bg-primary-2/0 opacity-0 hover:bg-primary-2/30 hover:opacity-100">
            <Image
              src={"/images/icon-view.svg"}
              alt=""
              width={43}
              height={43}
              className="rounded-lg"
            />
          </div>
        </div>

        <a href="#" className="text-lg text-white hover:text-primary-2">
          Equilibrium #3429
        </a>
        <p className="text-sm text-primary-1">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 text-sm text-primary-2">
            <Image
              src={"/images/icon-ethereum.svg"}
              alt=""
              width={11}
              height={18}
              className="aspect-square rounded-lg"
            />
            0.041 ETH
          </p>
          <p className="text-sm text-primary-1">3 days left</p>
        </div>
        <div className="flex items-center gap-2 border-t-[1px] border-t-neutral-3 py-4">
          <Image
            src={"/images/image-avatar.png"}
            alt=""
            width={32}
            height={32}
            className="rounded-full border-[1px] border-white/60 "
          />
          <p className="text-xs text-primary-1">
            Creation of{" "}
            <a href="#" className="text-white/90 hover:text-primary-2">
              Jules Wyvern
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
