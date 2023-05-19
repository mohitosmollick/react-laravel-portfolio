import React from "react";
import Header from "../Header";
import ProfileIcon from "../ProfileIcon";

const Layout = ({ children, open, setOpen, ...rest }, ref) => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <div className="">
        <ProfileIcon open={open} setOpen={setOpen} />
      </div>
      <Header open={open} setOpen={setOpen} />

      {children}
    </div>
  );
};

export default Layout;
