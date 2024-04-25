import { Column } from "./Column"

export function Board() {

    const COLUMNS = [
        {title: 'Backlog', color: '5aafed', tasks: [{title: 'Default task', src: '',tags: [{title: 'Concept', color: 'DEE9FC'}]}]},
        {title: 'In progress', color: 'edcd5a',tasks: []},
        {title: 'In review', color: 'd852e7' ,tasks: []},
        {title: 'Completed', color: '52eb55',tasks: []},
    ]

    const TAGS = [
        {title: "Concept", colorBg: '#F9E3E2', colorFont: '#AA2E26'},
        {title: "Technical", colorBg: '#DEE9FC', colorFont: '#3662E3'},
        {title: "Design", colorBg: '#FDF9C9', colorFont: '#C18D30'},
        {title: "Front-end", colorBg: '#E2FBE8', colorFont: '#4CA154'}
    ]


    return(
        <section className="w-full rounded-lg bg-[#3A3E44] px-[12px] py-[16px] grid grid-cols-4 gap-[12px]">
           {COLUMNS.map((column, index) => <Column key={index} column={column}/>)}

      </section>
    )
}
