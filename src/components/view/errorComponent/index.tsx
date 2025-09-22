import { IconX } from "@tabler/icons-react";
import React from "react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void; // قابلیت تلاش مجدد
  onClose?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  onClose,
}) => {
  return (
    <div className="error-container">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="error-header">
              <IconX className="m-2" onClick={onClose}/>
          </div>
         <div className="modal-body">
            <div className="wrapper-xs py-3 text-center">
         <span className="lead">{message}</span>
          {onRetry && (
            <button className="btn btn-primary my-3 mx-auto" onClick={onRetry}>
              تلاش مجدد
            </button>
          )}
         </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
