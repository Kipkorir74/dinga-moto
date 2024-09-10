"use client"

import SearchManufacturer from "./SearchManufacturer"
import { useState } from 'react'
import Image from 'next/image'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src='/magnifying-glass.svg ' alt='magnifying glass' width={40} height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const handleSeacrh = () => { }

  return (
    <form className='searchbar' onSubmit={handleSeacrh}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image src='/model-icon.png' alt='model-icon'
          width={25} height={25} className='absolute w-[20px] h-[20px] ml-4'
        />
        <input type='text'
          name='model'
          value={model}
          className='searchbar__input' 
          onChange={(e)=>setModel(e.target.value)}
          placeholder="Tiguan"
          />
          <SearchButton otherClasses="sm:hidden" />
          <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  )
}

export default SearchBar
