import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import { IoIosSearch } from "react-icons/io";
import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      const search =searchQuery.replace(/\s+/g, "")
      navigate(`/searchResult/${search}`);
    }
  };

  return (
    <div className="sticky right-0 top-0 z-10 flex flex-row items-center justify-between py-2 h-16 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-8 items-center pt-1">
        

        <Link to="/" className="flex m-1 h-8 items-center">
          <img
            className="h-full dark:md:block "
            src={ytLogo}
            alt="Youtube"
          />
          {/* <img className="h-full" src={ytLogoMobile} alt="Youtube" /> */}
        </Link>
      </div>
      <div className="group flex items-center pr-4">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border-t-2 border-b-2 border-l-2 border-[#ff2c2c] rounded-l-3xl">
          
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] text-lg"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10  flex items-center justify-center border-t-2 border-b-2 border-r-2 border-[#ff1c1c] rounded-r-3xl bg-black text-lg"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-xl " color="red" />
        </button>
      </div>
      
      
    </div>
  );
};

export default Header;
