import doneImg from '../images/Done_round.svg'
import closeImg from '../images/Close_round.svg'
import { ModalTaskDetailsContext } from '../context/ModalTaskDetailsContext.jsx'
import { useContext, useState } from 'react'
import Tag from './Tag.jsx'
import statesJSON from '../data/states.json'
import tagsJSON from '../data/tags.json'
import {getUniqueId} from '../services/getUniqueID.js'
import { ImgBackground } from './ImgBackground.jsx'
import { ShowTasksBoardByIdContext } from '../context/ShowTasksBoardByIdContext.jsx'


export function TaskDetails({ task = { id: "", title: "Add a feature to sort task by priority", state: "Backlog", src: "", tags: tagsJSON.tags } }){

    const {boardId}  = useContext(ShowTasksBoardByIdContext)

    const color =   task.state === 'Backlog' ?  "#5aafed" : 
                    task.state === 'In progress' ? "#edcd5a" : 
                    task.state === 'In review' ? '#d852e7' :'#52eb55'

    const {toggleShowTaskDetails} = useContext(ModalTaskDetailsContext)
    const [showButtons, setShowButtons ] = useState(false)
    
    const [titleTask, setTitleTask] = useState(task.title)
    const [imgUrl, setImgUrl] = useState(task.src)
    const [searchPhoto, setSearchPhoto] = useState(false)
    //Status
    const [showStatus, setShowStatus] = useState(false)
    const [statusValue, setStatusValue] = useState(task.state)
    const [statusColor, setStatusColor] = useState(color)
    //Tags
    const [showTags, setShowTags] = useState(false)
    const [tagsSelected, setTagsSelected] = useState(task.tags)

    
    const saveTaskDetails = () => {

        const id = task.id === "" ? getUniqueId() : task.id
        const newTask = {
            "id": id,
            "title": titleTask, 
            "state": statusValue, 
            "src": imgUrl,
            "tags": tagsSelected ,
            "type": 'task',
            "board": boardId,  
            "date": task.date === "" ? Date() : task.date    
         }
         localStorage.setItem(id, JSON.stringify(newTask))
         toggleShowTaskDetails()
    }

    const showStatusDropMenu = () => {
        setShowStatus(!showStatus)
        setShowTags(false)
    }

    const showTagsDropMenu = () => {
        setShowTags(!showTags)
        setShowStatus(false)
    }
    const handleChange = (event) => setTitleTask(event.target.value) 

    const selectSatus = (title, color) => {
        setStatusValue(title)
        setStatusColor(color)
        showStatusDropMenu()
    }

    const selectTag = (title) => {
        //CHATGPT 
        // Check if the tag with the specified title already exists in the array
        const tagIndex = tagsSelected.findIndex(tag => tag.title === title);

        if (tagIndex !== -1) {
            // If the tag exists, remove it from the array
            setTagsSelected(prevTags => prevTags.filter(tag => tag.title !== title));
        } else {
            // If the tag doesn't exist, add it to the array
            const tagToAdd = tagsJSON.tags.find(tag => tag.title === title);
            if (tagToAdd) {
            setTagsSelected(prevTags => [...prevTags, tagToAdd]);
            }
        }
    }
    
    const getRandomPhoto = () => {
        setSearchPhoto(true)
      }

        
    const removePhoto = () => {
        setImgUrl("")
    }

    const showButtonsHandler = () => {
        setShowButtons(!showButtons)
    }

    return (
        <section className="absolute  inset-0 flex justify-center items-center opacity-100">
            <div className="w-[550px] bg-[#2A2D32] p-[32px] rounded-xl flex flex-col gap-[24px]">
                <div className='flex justify-between'> 
                    <h1 className="text-[20px] font-semibold">Task Details</h1>
                    <button
                        onClick={toggleShowTaskDetails}
                    >
                        <img src={closeImg}></img>
                    </button>
                </div>
                <div 
                    className="relative bg-[#3A3E44] rounded-xl h-[140px] flex justify-center items-center overflow-hidden	"
                    onMouseEnter={showButtonsHandler}
                    onMouseLeave={showButtonsHandler}
                >
                {   
                    searchPhoto === true ?  <ImgBackground onReceivePhoto={(photoUrl) => setImgUrl(photoUrl)}/> :
                    imgUrl !== "" && searchPhoto === false  ?  <img src={imgUrl}></img> 
                    : <span className='text-[#7E878D] font-semibold text-[20px]'>No cover photo</span>

                }
                <div className={`${showButtons ? 'block' : 'hidden'}  absolute flex flex-row gap-[8px]`}>
                    <button 
                        className='flex rounded-3xl font-semibold justify-between text-[#DEE9FC] bg-[#3662E3] px-[24px] py-[8px]'
                        onClick={getRandomPhoto}
                    >Random Cover</button>
                    <button 
                        className='flex rounded-3xl font-semibold justify-between text-[#DEE9FC] bg-[#AA2E26] px-[24px] py-[8px]'
                        onClick={removePhoto}
                    >Remove</button>
                </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <span className='text-[#7E878D] text-[12px]'>Task name</span>
                    <input 
                        id='task-name'
                        className='px-[12px] py-[8px] w-full h-[40px] rounded-xl border-[2px] border-[#3A3E44] bg-[#2A2D32]'
                        defaultValue={titleTask}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className=" flex flex-col gap-[12px]">
                    <span className='text-[#7E878D] text-[12px]'>Status</span>
                    <button 
                        className='flex gap-[8px] items-center px-[12px] py-[8px] w-full h-[40px] rounded-xl border-[2px] text-[#FEF7EE] border-[#3A3E44] bg-[#2A2D32]'
                        style={showStatus ? { border: `1px solid ${statusColor}` } : {}}
                        onClick={showStatusDropMenu}
                    > 
                     <span style={{ backgroundColor: `${statusColor}`}} className='rounded-full  size-[8px]'></span>

                    <span>{statusValue}</span>                
                    </button>
                    <div className='relative'>    
                    <div className={`${showStatus ? 'block' : 'hidden'} absolute  w-full rounded-xl border-[2px] border-[#3A3E44] bg-[#191B1F]`}>
                        {statesJSON.columns.map((column, index) => 
                        <button 
                            className='rounded-xl bg-[#191B1F] flex items-center gap-[8px] px-[12px] py-[8px] ' 
                            key={index}
                            onClick={() => selectSatus(column.title, column.color)}
                        >
                            <span style={{ backgroundColor: `${column.color}`}} className='rounded-full  size-[8px]'></span>
                            <span>{column.title}</span>
                        </button> 
                    )}
                    </div>
                    </div>
                </div>

                <div className=" flex flex-col gap-[12px]">
                    <span className='text-[#7E878D] text-[12px]'>Tags</span>
                    <button 
                        className='flex items-center px-[12px] py-[8px] w-full h-[40px] rounded-xl border-[2px] text-[#FEF7EE] border-[#3A3E44] bg-[#2A2D32]'
                        style={showTags ? { border: "2px solid #3662E3" } : {}}
                        onClick={showTagsDropMenu}
                    > 
                    <div className='flex gap-[8px]'>{tagsSelected.map((tag,index) => <Tag tag={tag} key={index}/>)}</div>                
                    </button>
                    <div className='relative'>    
                        <div className={`${showTags ? 'block' : 'hidden'} absolute px-[8px] py-[6px] flex flex-col gap-[6px] w-full rounded-xl border-[2px] border-[#3A3E44] bg-[#191B1F]`}>
                            {tagsJSON.tags.map((tag, index) => 
                            <button 
                                className='w-full rounded bg-[#191B1F] flex items-center  px-[12px] py-[4px] ' 
                                style={{backgroundColor: `${tag.colorBg}`}}
                                key={index}
                                onClick={() => selectTag(tag.title)}
                            >
                                <span
                                    className='font-bold text-[16px]' 
                                    style={{ color: `${tag.colorFont}`}}>{tag.title}
                                </span>
                            </button> 
                            )}
                        </div>
                    </div>

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