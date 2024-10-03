"use client"

import SearchManufacturer from "./SearchManufacturer"
import React, { useState } from 'react'
import Image from 'next/image'
import { Router } from "next/router"
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src='/magnifying-glass.svg ' alt='magnifying glass' width={40} height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar = ({setManufacturer, setModel}) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel==="") {
      return alert('Please fill in the serach bar');
    }

    setModel(searchModel.toLowerCase())
    ,setManufacturer(searchManufacturer.toLowerCase());

  }
  // const updateSearchParams = (model: string, manufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   if (model) {
  //     searchParams.set('model', model);
  //   } else {
  //     searchParams.delete('model');
  //   }
  //   if (manufacturer) {
  //     searchParams.set('manufacturer', manufacturer);
  //   } else {
  //     searchParams.delete('manufacturer');
  //   }

  //   const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  //   router.push(newPathName, { scroll: false });
  // }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image src='/model-icon.png' alt='model-icon'
          width={25} height={25} className='absolute w-[20px] h-[20px] ml-4'
        />
        <input type='text'
          name='model'
          value={searchModel}
          className='searchbar__input'
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
        />
        <SearchButton otherClasses="sm:hidden" />
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  )
}

export default SearchBar
