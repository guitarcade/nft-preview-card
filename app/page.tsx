import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center bg-neutral-1">
      <div className="grid max-w-xs gap-4 rounded-lg bg-neutral-2 p-4">
        <Image
          src={"/images/image-equilibrium.jpg"}
          alt=""
          width={604}
          height={604}
          className="aspect-square rounded-lg"
        />
        <h1 className="text-lg text-white">Equilibrium #3429</h1>
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
            Creation of <span className="text-white/90">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </main>
  );
}
