"use client"

type CounterProps = {
  seconds: number
  isActive: boolean
}

export function Counter({ seconds, isActive }: CounterProps) {
  return (
    <div className="flex flex-col items-center justify-center md:p-4 bg-blue-100/10 rounded-lg shadow-md w-48 backdrop-blur-sm">
      <div className="text-4xl font-bold text-gray-100">{seconds}s</div>
      {!isActive && (
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Start Countdown
        </button>
      )}
    </div>
  )
}
