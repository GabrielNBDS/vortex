import { CircleArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center mb-10 p-8 pb-0">
      <div>
        <h1 className="leading-14 text-5xl font-bold mb-4">
          Hire the best employees<br />
          <span className="relative">
            <span className="absolute -z-50 -inset-1 block -skew-y-1 mt-auto h-7 bg-red-600" aria-hidden="true"></span>
            <span className="z-50">
              At the speed of F1
            </span>

          </span><br />
          With Vortex
        </h1>

        <div className="space-y-2">
          <p className="text-muted-foreground">
            Vortex is the AI that powers F1.<br />
          </p>
          <p className="text-lg text-muted-foreground">
            Be part of the future with Vortex and accelerate your hiring process.<br />
            Our intelligent platform streamlines hiring, matches top talent with <br /> your needs, and delivers results at lightning speed.<br />
          </p>
          <p className="text-lg text-muted-foreground">
            Join the revolution and unlock your team&apos;s full potential with Vortex.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <p>Scroll to learn more</p>

          <CircleArrowDown />
        </div>
      </div>

      <div className="p-4 hidden md:block bg-neutral-50/5 rounded-xl max-w-max ml-auto">
        <Image src="/i1.png" alt="" className="rounded-lg" width={450} height={300} />
      </div>
    </div>
  )
}