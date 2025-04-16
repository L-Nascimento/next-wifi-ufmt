'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Header = () => {
  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();

    router.push('/');

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 shadow-lg relative"
      role="banner"
    >
      <div className="container mx-auto px-4">
        {/* Ícone de casa no canto superior direito */}
        <div className="absolute top-6 right-15 ">
          <button onClick={handleHomeClick} className="cursor-pointer">
            <Image
              src={`${basePath}/images/icon-casa.svg`}
              alt="Voltar para a página inicial"
              width={50}
              height={50}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          </button>
        </div>

        {/* Logo centralizado */}
        <div className="flex justify-center">
          <Image
            src={`${basePath}/images/wifi.UFMT.png`}
            alt="Logo Wi-Fi UFMT - Universidade Federal de Mato Grosso"
            width={400}
            height={100}
            className="brightness-0 invert"
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
