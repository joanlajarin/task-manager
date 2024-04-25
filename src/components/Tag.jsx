export default function Tag({tag: {title, colorBg = '#DEE9FC', colorFont = '#3662E3'}}){

    return(
        <span 
            className="rounded py-[2px] px-[4px] w-fit h-fit text-[0.5rem] font-bold" 
            style={{ backgroundColor: `${colorBg}`,color: `${colorFont}`}}
        >
           {title}
        </span>
    )
}