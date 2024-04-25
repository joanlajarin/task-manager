import './App.css'
import { TaskManagerApp } from './components/TaskManagerApp.jsx'
import { DarkModeProvider } from './components/DarkModeContext.jsx'
import { ModalTaskDetailsProvider } from './components/ModalTaskDetailsContext.jsx'

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
