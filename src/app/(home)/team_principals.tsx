import Image from "next/image";

export default function TeamPrincipals() {
  return (
    <div className="border-b grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 bg-neutral-50/2">
      <div className="rounded w-full border-r border-b border-dashed">
        <div className="p-8">
          <div className="ml-2 flex items-center gap-2">
            <Image src="/ferrari.png" alt="" className="rounded-lg" width={36} height={36} />
            <p className="text-muted-foreground text-bold">Ferrari</p>
          </div>

          <p className="my-6 text-lg">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex soluta reiciendis fugiat laudantium accusantium! Earum optio delectus animi in dolore veniam nam excepturi ut perspiciatis similique, culpa impedit omnis?&quot;</p>

          <div className="flex items-center gap-2 mt-20">
            <Image src="/fred-vasseur.png" alt="" className="rounded-full" width={64} height={64} />
            <div>
              <p className="text-bold">Frederic Vasseur</p>
              <p className="text-muted-foreground">Team Principal</p>
            </div>
          </div>

        </div>
      </div>

      <div className="rounded w-full border-b border-dashed">
        <div className="p-8">
          <div className="ml-2 flex items-center gap-2">
            <Image src="/mclaren.png" alt="" className="rounded-lg" width={36} height={36} />
            <p className="text-muted-foreground text-bold">McLaren</p>
          </div>

          <p className="my-6 text-lg">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex soluta reiciendis fugiat laudantium accusantium! Earum optio delectus animi in dolore veniam nam excepturi ut perspiciatis similique, culpa impedit omnis?&quot;</p>

          <div className="flex items-center gap-2 mt-20">
            <Image src="/andrea-stella.png" alt="" className="rounded-full" width={64} height={64} />
            <div>
              <p className="text-bold">Andrea Stella</p>
              <p className="text-muted-foreground">Team Principal</p>
            </div>
          </div>

        </div>
      </div>

      <div className="rounded w-full">
        <div className="p-8">
          <div className="ml-2 flex items-center gap-2">
            <Image src="/mercedes.png" alt="" className="rounded-lg" width={36} height={36} />
            <p className="text-muted-foreground text-bold">Mercedes</p>
          </div>

          <p className="my-6 text-lg">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex soluta reiciendis fugiat laudantium accusantium! Earum optio delectus animi in dolore veniam nam excepturi ut perspiciatis similique, culpa impedit omnis?&quot;</p>

          <div className="flex items-center gap-2 mt-20">
            <Image src="/toto-wolff.png" alt="" className="rounded-full" width={64} height={64} />
            <div>
              <p className="text-bold">Toto Wolff</p>
              <p className="text-muted-foreground">Team Principal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded w-full border-l border-dashed">
        <div className="p-8">
          <div className="ml-2 flex items-center gap-2">
            <Image src="/red-bull.png" alt="" className="rounded-lg" width={36} height={36} />
            <p className="text-muted-foreground text-bold">Red Bull Racing</p>
          </div>

          <p className="my-6 text-lg">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex soluta reiciendis fugiat laudantium accusantium! Earum optio delectus animi in dolore veniam nam excepturi ut perspiciatis similique, culpa impedit omnis?&quot;</p>

          <div className="flex items-center gap-2 mt-20">
            <Image src="/christian-horner.png" alt="" className="rounded-full" width={64} height={64} />
            <div>
              <p className="text-bold">Christian Horner</p>
              <p className="text-muted-foreground">Team Principal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}