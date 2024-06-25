import Link from 'next/link';
import { BsFilePdf } from 'react-icons/bs';

function DocumentPdf({ href, title, date }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="px-2 sm:px-6 py-2 mb:py-4 flex items-center hover:border-l-4 transition-all duration-75 ease-in-out"
    >
      <BsFilePdf className="mr-4 text-4xl lg:text-7xl" />
      <div className="flex flex-col gap-1 lg:gap-2">
        <h4 className="text-base sm:text-2xl lg:text-4xl">{title}</h4>
        <p className="text-sm sm:text-xl lg:text-2xl">{date}</p>
      </div>
    </Link>
  );
}

export default DocumentPdf;
