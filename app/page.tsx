import { appendBaseURL } from "@/lib/utils"
import WordGrid from "@/components/word-grid"

async function getWords() {
  const wordListFile = await fetch(appendBaseURL('/word-list-eng.txt'))
  const wordList = await wordListFile.text()
  const words = wordList.split('\n')
  return words
}

export default async function Home() {
  const words = await getWords();
  // select 25 random words
  const randomWords = words.sort(() => 0.5 - Math.random()).slice(0, 25)

  return (
    <main className="flex h-[100vh] h-[100svh] flex-col items-center justify-between p-24 ">
      {/* make a div for hero content */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">Welcome to Codename</h1>
        <p className="text-2xl">Let&apos;s get started!</p>
      </div>

      {/* make backgroud div */}
      <div
        className="
          absolute 
          h-[100vh] 
          h-[100svh] 
          w-full 
          flex 
          flex-1 
          items-center 
          justify-center 
          top-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            h-[100vh] 
            h-[100svh] 
            w-full 
            top-[30%]
            left-[40%]
          "
          style={{
            maskImage: "linear-gradient(to left top, rgba(0,0,0,1) 0% 5%, rgba(0,0,0,0))",
            maskRepeat: "no-repeat",
            maskSize: `50% 100%`
          }}
        >
          <WordGrid words={randomWords} timerTokens={new Map()} />
        </div>
      </div>
    </main>
  )
}
