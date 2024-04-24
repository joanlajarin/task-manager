import './App.css'
import { Board } from './components/Board.jsx'
import { DarkModeProvider } from './components/DarkModeContext.jsx'
import { ToggleSection } from './components/ToggleSection.jsx'

function App() {


  const changeDarkMode = () => {
     console.log(darkMode)
  }

  return (
    <DarkModeProvider>
      <div className=' p-[12px] flex gap-[12px]'>
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
          <Board/>
      </div> 
    </DarkModeProvider>
  )
}

export default App
