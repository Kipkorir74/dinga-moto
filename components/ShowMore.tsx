"use client"

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const ShowMore = ({pageNumber, isNextPage}:ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {

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
