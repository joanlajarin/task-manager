import './App.css'
import { TaskManagerApp } from './components/TaskManagerApp.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import { ModalTaskDetailsProvider } from './context/ModalTaskDetailsContext.jsx'

function App() {

  return (
    <DarkModeProvider>
      <ModalTaskDetailsProvider>
          <TaskManagerApp/>
      </ModalTaskDetailsProvider>
    </DarkModeProvider>
  )
}

export default App
