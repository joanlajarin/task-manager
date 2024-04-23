import './App.css'
import { DarkModeProvider } from './components/DarkModeContext.jsx'
import { ToggleSection } from './components/ToggleSection.jsx'

function App() {


  const changeDarkMode = () => {
     console.log(darkMode)
  }

  return (
    <DarkModeProvider>
    <section className=''>
      <a>X</a>
      <div>
        Default Board
      </div>
      <div>
        Add new board
      </div>
      <ToggleSection/>
    </section>
    <section>
      <div>
        Backlog(1)
      </div>
      <div>
        In progress(0)
      </div>
      <div>
        In progress(0)
      </div>
      <div>
        In review(0)
      </div>
      <div>
        Completed(0)
      </div>
    </section>
    </DarkModeProvider>
  )
}

export default App
