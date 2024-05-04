export function BoardMenu({title, logo, compressMenu}) {

    
    return(
        <button className="flex rounded-xl p-[8px] gap-[8px] items-center">
            <img src={logo}></img>
            {
                !compressMenu && <span className="text-[#FEF7EE] text-[14px] font-medium">{title}</span>    

            }
        </button>)
}
