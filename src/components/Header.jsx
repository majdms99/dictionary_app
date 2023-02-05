import React from "react";
import {
  BiBook,
  BiMoon,
  BiSun,
  BiToggleLeft,
  BiToggleRight,
} from "react-icons/bi";

const Header = ({ dark, setDark }) => {
  return (
    <div className="flex justify-between items-center h-20 ">
      <BiBook size={35} />
      <div className="flex items-center">
        {dark ? (
          <>
            <BiToggleRight
              size={35}
              className=" cursor-pointer"
              onClick={() => setDark(false)}
            />
            <BiSun size={25} className="mx-2 cursor-pointer" />
          </>
        ) : (
          <>
            <BiToggleLeft
              size={35}
              className=" cursor-pointer"
              onClick={() => setDark(true)}
            />
            <BiMoon size={25} className="mx-2 cursor-pointer" />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
