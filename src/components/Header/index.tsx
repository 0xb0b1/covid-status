import { Search } from "./Search";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export const Header = () => {
  return (
    <header className="bg-gray-700 w-default pt-2 pb-4 ">
      <div className="flex items-center mx-24">
        <div className="flex gap-14">
          <HiOutlineChevronLeft size={32} color="white" />
          <HiOutlineChevronRight size={32} color="white" />
        </div>
        <Search />
      </div>
    </header>
  );
};
