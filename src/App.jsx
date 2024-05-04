import './App.css'
import { TaskManagerApp } from './components/TaskManagerApp.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import { ModalTaskDetailsProvider } from './context/ModalTaskDetailsContext.jsx'
import { ModalBoardDetailsProvider } from './context/ModalBoardDetailsContext.jsx'

function App() {

  return (
    <DarkModeProvider>
      <ModalBoardDetailsProvider>
        <ModalTaskDetailsProvider>
            <TaskManagerApp/>
        </ModalTaskDetailsProvider>
      </ModalBoardDetailsProvider>
    </DarkModeProvider>
  )
}

export default App
