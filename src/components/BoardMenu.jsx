export function BoardMenu({title, logo}) {

    return(
        <button className="flex rounded-xl p-[8px] gap-[8px] items-center">
            <img src='src/images/board-logo-01.svg'></img>
            <span className="text-[#FEF7EE] text-[14px] font-medium">Default Board</span>    
        </button>)
}
