"use client"

import { useState, useEffect } from "react"
import { Counter } from "./counter"
import { StretchingGIF, StretchingGIFType } from "./strething-gif"
import { cn } from "@/utils"

const stretchPlan = {
  runner1: {
    tip: "Left foot forward, bend forward",
    gif: "runner",
  },
  runner2: {
    tip: "Left foot forward, bend backwards",
    gif: "runner",
  },
  runner3: {
    tip: "Right foot forward, bend forward",
    gif: "runner",
  },
  runner4: {
    tip: "Right foot forward, bend backwards",
    gif: "runner",
  },
  bend1: {
    tip: "Bend forward",
    gif: "fold",
  },
  bend2: {
    tip: "Bend forward again",
    gif: "fold",
  },
  twist1: {
    tip: "Twist left",
    gif: "twist",
  },
  twist2: {
    tip: "Twist right",
    gif: "twist",
  },
  bound: {
    tip: "Sit and bound forward",
    gif: "bound",
  },
  chest: {
    tip: "Hold the door frame and push chest forward",
    gif: "chest",
  },
}
const lastStepOfSection = ["runner4", "bend2", "twist2", "bound"]

type StretchPanelProps = {
  onStateChange: (state: "notStarted" | "started" | "finished") => void
}

export function StretchPanel({ onStateChange }: StretchPanelProps) {
  const [progress, setProgress] = useState<{ [key: string]: number }>(
    Object.keys(stretchPlan).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
  )
  const [active, setActive] = useState(false)
  const [counter, setCounter] = useState(30)
  const [currentStep, setCurrentStep] = useState(Object.keys(stretchPlan)[0])

  useEffect(() => {
    if (!active || !currentStep) return

    onStateChange("started")

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = { ...prevProgress }
        if (newProgress[currentStep] < 100) {
          newProgress[currentStep] += 1 * (100 / 30)
        }
        return newProgress
      })

      setCounter((prevCounter) => {
        if (prevCounter > 1) {
          return prevCounter - 1
        } else {
          const steps = Object.keys(stretchPlan)
          const nextStepIndex = steps.indexOf(currentStep) + 1
          if (nextStepIndex < steps.length) {
            setCurrentStep(steps[nextStepIndex])
            return 30
          } else {
            setActive(false)
            onStateChange("finished")
            return 0
          }
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [active, currentStep, onStateChange])

  const startProgress = () => {
    setProgress(
      Object.keys(stretchPlan).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
    )
    setCounter(30)
    setCurrentStep(Object.keys(stretchPlan)[0])
    setActive(true)
    onStateChange("notStarted")
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {active ? (
        <>
          <StretchingGIF
            type={
              stretchPlan[currentStep as keyof typeof stretchPlan]
                .gif as StretchingGIFType
            }
          />
          <Counter seconds={counter} isActive={active} />
          <div className="flex flex-col items-center justify-center pt-4">
            <span className="text-2xl text-foreground font-bold w-full text-center italic">
              {stretchPlan[currentStep as keyof typeof stretchPlan].tip}
            </span>
            <div className="relative">
              <span className="text-3xl text-foreground font-bold w-full text-center">
                {Object.keys(stretchPlan).findIndex(
                  (key) => key === currentStep
                ) + 1}
              </span>
              <span className="absolute bottom-1 -right-4 flex text-sm text-gray-100 font-bold w-full text-center text-nowrap">
                {`/ ${Object.keys(stretchPlan).length}`}
              </span>
            </div>
          </div>

          <div className="w-full flex gap-2 flex-wrap pt-8">
            {Object.keys(stretchPlan).map((key) => (
              <div
                key={key}
                className={cn(
                  "flex flex-col items-center gap-2 border-r-2 border-transparent pr-2 py-2",
                  lastStepOfSection.includes(key) && "border-foreground"
                )}
              >
                <div key={key} className="w-16 overflow-hidden rounded-full">
                  <div style={{ width: "100%", backgroundColor: "#e0e0e0" }}>
                    <div
                      className="duration-1000"
                      style={{
                        width: `${progress[key]}%`,
                        height: "10px",
                        backgroundColor: "var(--foreground)",
                      }}
                    />
                  </div>
                </div>
                <span className="text-sm text-foreground">{key}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {counter === 0 && (
            <div className="text-4xl text-foreground font-bold">
              Congratulations! You&apos;ve completed the stretch plan.
            </div>
          )}
          <div className="relative">
            <h1 className="text-9xl font-black">Stretch</h1>
            <span className="text-3xl absolute z-40 -bottom-3 right-0 opacity-50 font-bold text-shadow">
              .app
            </span>
          </div>
          <h3 className="text-4xl text-gray-100 font-bold italic">
            Ready for your 5 minute stretching session?
          </h3>
          <button
            onClick={startProgress}
            className="text-4xl bg-gray-100/10 backdrop-blur-sm font-bold px-4 py-2 rounded-md hover:bg-foreground hover:text-background focus:outline-none focus:ring-2 focus:ring-foreground/40 focus:ring-opacity-50 duration-300"
          >
            Start
          </button>
        </>
      )}
    </div>
  )
}
