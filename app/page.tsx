"use client"
import Link from "next/link"
import { StretchPanel } from "../components/stretch-panel"
import { FaGithub } from "react-icons/fa"
import ParticlesBg, { TypeProp } from "particles-bg"
import { useState } from "react"

const animations: Record<string, TypeProp> = {
  notStarted: "cobweb",
  started: "lines",
  finished: "polygon",
}
type AnimationType = keyof typeof animations

export default function Home() {
  const [animationType, setAnimationType] =
    useState<AnimationType>("notStarted")

  const handleStateChange = (state: "notStarted" | "started" | "finished") => {
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
  }

  return (
    <div className="p-8">
      <ParticlesBg type={animations[animationType] as TypeProp} bg={true} />
      <main className="flex flex-col gap-8 items-center py-8 relative min-h-[90vh] justify-center text-foreground ">
        <StretchPanel onStateChange={handleStateChange} />
      </main>
      <footer className="text-xs flex gap-6 flex-wrap items-center justify-center">
        <Link
          href="https://github.com/Marcos-Montero"
          className="flex items-center gap-2 hover:underline"
        >
          <FaGithub /> By Marcos Montero
        </Link>
      </footer>
    </div>
  )
}
