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
  const size = 360
  return (
    <div className="relative flex justify-center items-center">
      <div
        className={cn(
          "absolute rounded-full overflow-hidden opacity-25",
          "animate-complexGlow",
          "w-[420px] h-[380px]"
        )}
      />
      <div
        className={cn(
          "absolute rounded-full overflow-hidden opacity-25",
          "animate-complexGlowAlt",
          "w-[380px] h-[420px]"
        )}
      />
      <div
        className={cn(
          "relative flex justify-center items-center rounded-full overflow-hidden",
          `w-[${size}px] h-[${size}px]`
        )}
      >
        <Image
          src={stretchingGIF[type]}
          alt={type}
          width={size}
          height={size}
          unoptimized
        />
      </div>
    </div>
  )
}
