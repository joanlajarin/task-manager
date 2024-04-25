import { Board } from './Board.jsx'
import { TaskDetails } from './TaskDetails.jsx'
import { ModalTaskDetailsContext } from './ModalTaskDetailsContext.jsx'
import { ToggleSection } from './ToggleSection.jsx'
import { useContext } from 'react'

export function TaskManagerApp() {

  const {showTaskDetails, toggleShowTaskDetails} = useContext(ModalTaskDetailsContext)

  return (


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
          {showTaskDetails && <TaskDetails />}
      </div> 
  )
}

