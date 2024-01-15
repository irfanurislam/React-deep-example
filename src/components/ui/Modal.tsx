import {
  ChangeEvent,
  Children,
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import Cn from "../../utils/Cn";
import { createPortal } from "react-dom";

const ModalContext = createContext<TModalContext | null> (null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={Cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md p-6 "
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: any) => {
  const { onClose } = useContext(ModalContext);
  return (
    <button className="ml-auto" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-6 h-6 size-6 bg-red-500 rounded-md text-white p-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};
const Header = ({ children }: any) => {
  return (
    <div className="flex w-full justify-between items-center mb-3">
      {children}
    </div>
  );
};
Modal.Header = Header;
Modal.CloseButton = CloseButton;
export default Modal;
