import Typewriter from "./components/Typewriter"
import LinkWrapper from "./components/LinkWrapper"
import Profile from "./components/Profile"

function App() {
  return (
    <>
      <main className="flex items-center justify-center flex-col min-h-screen bg-neutral-50">
        <div className="bg-neutral-100 px-16 py-10 rounded-2xl">
          <Profile />
          <Typewriter />
          <LinkWrapper />
        </div>
      </main>
    </>
  )
}

export default App