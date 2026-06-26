import React from "react";
import Totalbalance from "./Totalbalance";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title ">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient  ">&nbsp;{user}</span>
        )}
      </h1>
      <span className="header-box-subtext">{subtext}</span>
      <Totalbalance
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1000000}
      />
    </div>
  );
};

export default HeaderBox;
