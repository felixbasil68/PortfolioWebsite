import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 text-center relative z-1 w-full flex justify-center">
      <div className="w-full max-w-6xl px-6 flex flex-col items-center justify-center">
        <p className="text-text-muted text-sm font-mono flex items-center justify-center flex-wrap gap-1">
          <span className="block sm:inline">© {currentYear} All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}