import { Board } from './Board.jsx'
import { TaskDetails } from './TaskDetails.jsx'
import { BoardDetails } from './BoardDetails.jsx'

import { ModalTaskDetailsContext } from '../context/ModalTaskDetailsContext.jsx'
import { ModalBoardDetailsContext } from '../context/ModalBoardDetailsContext.jsx'

import { useContext } from 'react'
import { Menu } from './Menu.jsx'

export function TaskManagerApp() {

  const {showTaskDetails, taskData } = useContext(ModalTaskDetailsContext)
  const {showBoardDetails, boardData } = useContext(ModalBoardDetailsContext)

  return (

    <>
      <div className={`p-[12px] flex gap-[12px] h-full ${showTaskDetails || showBoardDetails ? "opacity-10" : "opacity-100" }`}  >
          <Menu/>
          <Board/>
      </div> 
      {showTaskDetails && <TaskDetails task={taskData} />}
      {showBoardDetails && <BoardDetails task={boardData} />}
    </>
  )
}

