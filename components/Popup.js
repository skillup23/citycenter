import React from 'react';
import { VscClose } from 'react-icons/vsc';

function Popup({ children, isOpen, setOpen }) {
  return (
    <div
      onClick={(e) => e.currentTarget === e.target && setOpen(false)}
      className={`fixed w-full min-h-full top-0 left-0 bg-black/[.9] flex items-center justify-center z-[55] ${
        isOpen ? 'block overflow-auto' : 'hidden'
      } `}
    >
      <div className="relative">
        <VscClose
          className="absolute top-1 sm:top-2 right-1 sm:right-2 text-3xl cursor-pointer"
          onClick={() => setOpen(false)}
        />
        {children}
      </div>
    </div>
  );
}

export default Popup;
