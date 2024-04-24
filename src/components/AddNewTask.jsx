import addTask from '../images/Add_round.svg'

export default function AddNewTask() {
    return(
        <div className="flex rounded-xl justify-between text-[#3662E3] bg-[#DEE9FC] px-[12px] py-[8px]">
            <span className='font-semibold'>Add new task card</span>
            <img src={addTask}></img>
        </div>
    )
}