import { Column } from "./Column"
import statesData from '../data/states.json';

export function Board() {

    // Retrieve all items from localStorage
    const allTaks = Object.values(localStorage);

    // Parse each item string into an object
    const parsedTasks = allTaks.map(item => JSON.parse(item))

    // Filter items based on the state property being "Backlog"
  //  const backlogItems = parsedTasks.filter(item => item.state === "Backlog");


    return(
        <section className="w-full rounded-lg bg-[#2A2D32] px-[12px] py-[16px] grid grid-cols-4 gap-[12px]">
           {statesData.columns.map((column, index) => <Column key={`${column.title}_${index}`} column={column} tasks={parsedTasks.filter(item => item.state === column.title)}/>)}

      </section>
    )
}
