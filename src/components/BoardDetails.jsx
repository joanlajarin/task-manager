import doneImg from '../images/Done_round.svg'
import closeImg from '../images/Close_round.svg'
import { ModalBoardDetailsContext } from '../context/ModalBoardDetailsContext.jsx'
import { ShowTasksBoardByIdContext } from '../context/ShowTasksBoardByIdContext.jsx'
import { useContext, useState } from 'react'
import { getUniqueId } from '../services/getUniqueID.js'

export function BoardDetails({ board = { id: "", title: "", logo: ""} }){
    const {toggleShowBoardDetails} = useContext(ModalBoardDetailsContext)

    const [titleBoard, setTitleBoard] = useState(board.title)
    const [logoBoard, setLogoBoard] = useState(board.logo)

    const {changeBoard}  = useContext(ShowTasksBoardByIdContext)
    
    const imageUrls = []
    // Generate image URLs dynamically (assuming you have a logic for this)
    for (let i = 1; i < 14; i++) {
      imageUrls.push(i < 10 ? `src/images/board-logo-0${i}.svg` : `src/images/board-logo-${i}.svg`);
    }
    //chatgpt
    function getRandomFromArray(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length)
        return arr[randomIndex];
      }
    const handleChange = (event) => setTitleBoard(event.target.value) 

    const saveBoardDetails = () => {

        const id = board.id === "" ? getUniqueId() : board.id
        const newBoard = {
            "id": id,
            "title":titleBoard, 
            "logo": logoBoard !== "" ? logoBoard : getRandomFromArray(imageUrls),
            "type": 'board',
            "date": Date()   
         }
         localStorage.setItem(id, JSON.stringify(newBoard))
         changeBoard(id)
         toggleShowBoardDetails()
    }


    return (
        <section className="absolute  inset-0 flex justify-center items-center opacity-100">
            <div className="w-[550px] bg-[#2A2D32] p-[32px] rounded-xl flex flex-col gap-[24px]">
                <div className='flex justify-between'> 
                        <h1 className="text-[20px] font-semibold">Board Details</h1>
                        <button
                            onClick={toggleShowBoardDetails}
                        >
                            <img src={closeImg}></img>
                        </button>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className='text-[#7E878D] text-[12px]'>Board name</span>
                    <input 
                        id='board-name'
                        className='px-[12px] py-[8px] w-full h-[40px] rounded-xl border-[2px] border-[#3A3E44] bg-[#2A2D32]'
                        defaultValue={titleBoard}
                        placeholder='e.g: Default Board'
                        onChange={handleChange}
                    ></input>   
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className='text-[#7E878D] text-[12px]'>Logo</span>
                    <div className='flex gap-[24px] flex-wrap			'>
                    {
                        imageUrls.map((imageUrl, index) => (
                        <button
                            key={index} 
                            className='flex items-center rounded-full'
                            style={logoBoard === imageUrl ? { border: `3px solid #3662E3`, size: `42px` } : { size: `32px` }}
                            onClick={() => setLogoBoard(imageUrl) }
                        >
                            <img
                                className=' rounded-full'
                                style={logoBoard === imageUrl ? { size: `42px` } : { size: `32px` }}
                                key={index} 
                                src={imageUrl} 
                                alt="Board Logo"
                            >
                            </img>
                        </button> 
                        ))
                    }
                    </div>
                </div>
                <div className='flex gap-[12px]'>
                <button 
                    className="flex gap-[12px] rounded-3xl justify-between text-[#DEE9FC] bg-[#3662E3] px-[24px] py-[8px]"
                    onClick={saveBoardDetails}
                    >
                    <span className='font-semibold'>Save</span>
                    <img src={doneImg}></img>
                </button>
                <button 
                    className="rounded-3xl justify-between border-[2px] border-[#7E878D] text-[#7E878D] bg-[#3A3E44] px-[24px] py-[8px]"
                    onClick={toggleShowBoardDetails}
                    >
                    <span className='font-semibold'>Cancel</span>
                </button>
                </div> 
            </div>
        </section>   
    )
}