import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { StretchSession } from "../components/stretch-session"
import { Bg } from "../components/bg"
export default function Home() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Bg />
      <StretchSession />
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
