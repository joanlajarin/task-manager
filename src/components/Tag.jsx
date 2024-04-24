export default function Tag({tag: {title, color = 'DEE9FC'}}){
    return(
        <span 
            className="rounded py-[2px] px-[4px] w-fit h-fit text-[0.5rem] text-[#3662E3] font-bold" 
            style={{ backgroundColor: `#${color}`}}
        >
           {title}
        </span>
    )
}