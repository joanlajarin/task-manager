import { Board } from './Board.jsx'
import { TaskDetails } from './TaskDetails.jsx'
import { ModalTaskDetailsContext } from '../context/ModalTaskDetailsContext.jsx'
import { ToggleSection } from './ToggleSection.jsx'
import { useContext } from 'react'
import { Menu } from './Menu.jsx'

export function TaskManagerApp() {

  const {showTaskDetails, toggleShowTaskDetails, taskData } = useContext(ModalTaskDetailsContext)

  return (

    <>
      <div className={`p-[12px] flex gap-[12px] h-full ${showTaskDetails ? "opacity-10" : "opacity-100" }`}  >
          <Menu/>
          <Board/>
      </div> 
      {showTaskDetails && <TaskDetails task={taskData} />}
    </>
  )
}

