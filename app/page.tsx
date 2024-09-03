
import Image from "next/image";
import { CustomFilter, Hero, SearchBar,CarCard } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const carsCatalogue = await fetchCars();
  const isDataEmpty = !Array.isArray(carsCatalogue) || carsCatalogue.length < 1 || carsCatalogue;

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
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {carsCatalogue?.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>
            
          </section>
        ) : (
          <div className="home_error-container">
            <h2 className="text-black text-xl fon-bold">Salaale, No results</h2>
            <p>{carsCatalogue?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
