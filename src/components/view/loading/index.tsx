import { Spiner } from "@/components/common";
import React from "react";

interface LoadingProps {
}

const Loading: React.FC<LoadingProps> = ({
}) => {
  return (
    <div className="error-container">
      <div className="modal-dialog">
        <div className="modal-content">
         <div className="modal-body">
          لطفا منتظر بمانید... <Spiner borderTop="2px solid black" width={"50px"} height={"50px"}/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
