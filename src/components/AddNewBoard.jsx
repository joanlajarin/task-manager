import addRoundImg from '../images/Add_round_fill.svg'

export function AddNewBoard () {
    


    return (            
    <button className="flex gap-[8px] p-[8px] mt-[8px] items-center">
        <img src={addRoundImg}></img>
        <span className='text-[14px] font-medium'>Add new board</span>
    </button>
)}