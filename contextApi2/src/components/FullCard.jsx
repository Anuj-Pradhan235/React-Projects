import React from "react";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";
function FullCard() {
  return (
    <>
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn />
      </div>

      <div className="w-full max-w-sm mx-auto">
        <Card />
      </div>
    </>
  );
}

export default FullCard;
