import React from 'react'

interface Props {
    state: boolean;
    setState: (state: boolean) => void;
}

const items = [
    {
        name: 'Github',
        link: '',
    },
    {
        name: 'LinkedIn',
        link: '',
    }
]

function Dropdown({ state=true, setState }: Props) {
  return (
    <aside onMouseLeave={() => setState(false)} className={`${state ? 'block' : 'hidden'} w-32 absolute bottom-14 left-0 bg-neutral-800 rounded-lg`} >
        <ul className=''>
            {items.map((item, index) => (
                <li key={index} className="rounded-md hover:bg-neutral-900 transition-all cursor-pointer h-8 flex justify-start p-2 m-2 items-center">
                    {item.name}
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default Dropdown;