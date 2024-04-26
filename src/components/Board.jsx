import { Column } from "./Column"
import statesData from '../data/states.json';

export function Board() {

    return(
        <section className="w-full rounded-lg bg-[#2A2D32] px-[12px] py-[16px] grid grid-cols-4 gap-[12px]">
           {statesData.columns.map((column, index) => <Column key={index} column={column}/>)}

      </section>
    )
}
