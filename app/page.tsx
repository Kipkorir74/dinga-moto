"use client";

import Image from "next/image";
import { CustomFilter, Hero, SearchBar, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { yearsOfProduction, fuels } from "@/constants/constants";
import { useEffect, useState } from "react";

export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //filter states
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");

  //pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || ""
      });
      setAllCars(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [manufacturer, model, year, fuel, limit]);


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y 
      max-width id='discover'">
        <div className="home__text-container">
          <h1 className="text-4xl
          font-extrabold">
            Car Catalogue
          </h1>
          <p className="text-lg mt-4">
            Find the best car for your needs.</p>
        </div>
        <div className="home__filters">
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />



          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
          </div>


        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              )}

            <ShowMore
              pageNumber={limit / 10}
              isNextPage={(limit || 10) > allCars.length}
              setLimit={setLimit}
            />

          </section>
        ) : (
          <div className="home_error-container">
            <h2 className="text-black text-xl fon-bold">Salaale, No results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
