"use client"

import { useState, Fragment } from 'react';
import Image from 'next/image';
import router, { useRouter } from 'next/router';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';
import { updateSearchParams } from '@/utils';


const CustomFilter = ({ title, options }: CustomFilterProps) => {

  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e:{title:string, value:string}) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    
    router.push(newPathName);
  }
  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange = {(e)=> { 
          console.log(e);
          setSelected(e);
          
        }}
        
      >
        <div className='relative w-fit z-10'>
          <ListboxButton className="custom-filter__btn">
            <span>{selected.title}</span>

            <Image src='/chevron-up-down.svg'
              alt='chevron up down'
              width={20}
              height={20}
              className='ml-4 object-contain'
            />

          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >

            <ListboxOptions className=" bg-blue-100 shadow-md -lg p-2" anchor="bottom">
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  className={({ focus }) => `relative cursor-default select-none py-2 px-4 
                  ${focus ? 'bg-primary-blue text-white' : 'text-grey-900'}`}
                 
                  value={option}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                      }`}>

                      {option.title}
                    </span>
                  )} 
                  
                </ListboxOption>

              ))}
            </ListboxOptions>

          </Transition>

        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
