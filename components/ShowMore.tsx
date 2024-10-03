"use client"

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({pageNumber, isNextPage}:ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams ("limit", `${newLimit}`);

        router.push(newPathName, {scroll:false});
    };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNextPage && (
        <CustomButton
            title="Show More"
            btnType="button"
            containerStyle="bg-primary-blue rounded-full text-white px-6 py-2"
            handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
