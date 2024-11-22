"use client"

//import { useState } from "react"
// import ParticlesBg, { TypeProp } from "particles-bg"
import { StretchPanel } from "./stretch-panel"

/* const animations: Record<string, TypeProp> = {
  notStarted: "cobweb",
  started: "lines",
  finished: "polygon",
}

type AnimationType = keyof typeof animations */

export function StretchSession() {
  /*   const [animationType, setAnimationType] =
    useState<AnimationType>("notStarted") */

  /*   const handleStateChange = (state: "notStarted" | "started" | "finished") => {
    switch (state) {
      case "notStarted":
        setAnimationType("notStarted")
        break
      case "started":
        setAnimationType("started")
        break
      case "finished":
        setAnimationType("finished")
        break
    }
  } */

  return (
    <div className="p-8">
      {/*       <ParticlesBg type={animations[animationType] as TypeProp} bg={true} />
       */}{" "}
      <main className="flex flex-col gap-8 items-center relative min-h-[90vh] justify-center text-foreground">
        <StretchPanel onStateChange={() => {}} />
      </main>
    </div>
  )
}
