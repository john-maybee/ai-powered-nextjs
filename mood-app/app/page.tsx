import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items center">
      <div className="w-full h-full flex justify-center items-center max-w-[600px] mx-auto">
        <div>
          <h1 className="text-6xl text-white/80 mb-6">
            Learn about you: The best journal app for tracking your mood
          </h1>
          <p className="text-xl text-white/60 mb-6">
            This is the best journal app that tracks your mood and helps you understand yourself better.
            Not only that, but it also helps you to be more productive and achieve your goals of being more deliberate
            with imporving your mood and mental health more consistently.
          </p>
          <Link href="/journal">
            <button
              type="button"
              className="rounded-md bg-indigo-500 px-4 py-2 text-xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}