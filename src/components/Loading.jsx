import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <PuffLoader size={80} color={"#ab49f7"} loading={true} />
    </div>
  );
};

export default Loading;
