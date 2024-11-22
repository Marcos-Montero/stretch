import { cn } from "@/utils"
import Image from "next/image"

const stretchingGIF = {
  runner:
    "https://media.post.rvohealth.io/wp-content/uploads/2023/08/DecisiveGeneralAtlanticridleyturtle-size_restricted.gif",
  fold: "https://media.post.rvohealth.io/wp-content/uploads/2023/08/HelplessDimHeterodontosaurus-size_restricted.gif",
  twist:
    "https://media.post.rvohealth.io/wp-content/uploads/2023/08/JitteryFarflungLacewing-size_restricted.gif",
  bound:
    "https://media.post.rvohealth.io/wp-content/uploads/2023/08/LastPotableAmericanredsquirrel-size_restricted.gif",
  chest:
    "https://media.post.rvohealth.io/wp-content/uploads/2023/08/LawfulScrawnyGraysquirrel-size_restricted.gif",
}
export type StretchingGIFType = keyof typeof stretchingGIF

export const StretchingGIF = ({ type }: { type: StretchingGIFType }) => {
  const size = 240
  return (
    <div className="relative flex justify-center items-center mb-4">
      <div
        className={cn(
          "absolute rounded-full overflow-hidden opacity-25",
          "animate-complexGlow",
          "w-[240px] h-[200px] md:w-[320px] md:h-[280px] lg:w-[420px] lg:h-[380px]"
        )}
      />
      <div
        className={cn(
          "absolute rounded-full overflow-hidden opacity-25",
          "animate-complexGlowAlt",
          "w-[200px] h-[240px] md:w-[280px] md:h-[320px] lg:w-[380px] lg:h-[420px]"
        )}
      />
      <div
        className={cn(
          "relative flex justify-center items-center rounded-full overflow-hidden w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px]"
        )}
      >
        <Image
          src={stretchingGIF[type]}
          alt={type}
          width={size}
          height={size}
          unoptimized
          className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px]"
        />
      </div>
    </div>
  )
}
