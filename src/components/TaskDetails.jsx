import doneImg from '../images/Done_round.svg'
import closeImg from '../images/Close_round.svg'
import { ModalTaskDetailsContext } from './ModalTaskDetailsContext.jsx'
import { useContext } from 'react'
import statesData from '../data/states.json';


export function TaskDetails(){

    const {toggleShowTaskDetails} = useContext(ModalTaskDetailsContext)
    const saveTaskDetails = () => {

    }
    return (
        <section className="absolute  inset-0 flex justify-center items-center">
            <div className="w-[600px] bg-[#3A3E44] p-[32px] rounded-xl flex flex-col gap-[24px]">
                <div className='flex justify-between'> 
                    <h1 className="text-[20px] font-semibold">Task Details</h1>
                    <button
                        onClick={toggleShowTaskDetails}
                    >
                        <img src={closeImg}></img>
                    </button>
                </div>
                <div className="bg-[red] rounded-xl h-[80px]">
                    <img></img>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className='text-[#7E878D] text-[12px]'>Task name</span>
                    <input 
                        className='w-full h-[40px] rounded-xl border border-[#7E878D] bg-[#3A3E44]'
                        placeholder='Add a feature to sort task by priority'
                    ></input>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className='text-[#7E878D] text-[12px]'>Status</span>
                    <select 
                        className='w-full h-[40px] rounded-xl border border-[#7E878D] bg-[#3A3E44]'
                        placeholder='Add a feature to sort task by priority'
                    >
                    {statesData.columns.map(column => <option value={column.title}>{column.title}</option> )}
                       
                    </select>
                </div>
                <div>
                    <span>Task name</span>
                    <div></div>
                </div>
                <div className='flex gap-[12px]'>
                <button 
                    className="flex gap-[12px] rounded-3xl justify-between text-[#DEE9FC] bg-[#3662E3] px-[24px] py-[8px]"
                    onClick={saveTaskDetails}
                    >
                    <span className='font-semibold'>Save</span>
                    <img src={doneImg}></img>
                </button>
                <button 
                    className="rounded-3xl justify-between border-[2px] border-[#7E878D] text-[#7E878D] bg-[#3A3E44] px-[24px] py-[8px]"
                    onClick={toggleShowTaskDetails}
                    >
                    <span className='font-semibold'>Cancel</span>
                </button>
                </div>
            </div>
        </section>
    )
}