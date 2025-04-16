'use client';

import Link from 'next/link';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="py-12 bg-gray-100 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Redes Wi-Fi da UFMT</h1>
          <p className="text-lg text-gray-600 mt-2">
            Conecte-se às redes institucionais da Universidade Federal de Mato Grosso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <section
            tabIndex={0}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400 transition-all duration-300 ease-in-out p-6 flex flex-col text-center focus:outline-orange-500"
          >
            <Image
              src={`${basePath}/images/wifi_adm.png`}
              alt="Rede administrativa"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">UFMT Administrativa</h3>
            <p className="text-gray-600 flex-grow">
              Rede exclusiva para técnicos e professores da UFMT, com acesso a recursos internos da universidade.
            </p>
            <Link href="/pages/IndexAdministrativa" className="mt-4 inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded">
              Veja como conectar
            </Link>
          </section>

          {/* Card 2 */}
          <section
            tabIndex={0}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400 transition-all duration-300 ease-in-out p-6 flex flex-col text-center focus:outline-orange-500"
          >
            <Image
              src={`${basePath}/images/eduroam-icon.png`}
              alt="Rede Eduroam"
              width={130}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">EDUROAM</h3>
            <p className="text-gray-600 flex-grow">
              Rede acadêmica global que permite acesso em diversas instituições de ensino ao redor do mundo.
            </p>
            <Link href="/pages/indexEduroam" className="mt-4 inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded">
              Veja como conectar
            </Link>
          </section>

          {/* Card 3 */}
          <section
            tabIndex={0}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400 transition-all duration-300 ease-in-out p-6 flex flex-col text-center focus:outline-orange-500"
          >
            <Image
              src={`${basePath}/images/wifi_vis.png`}
              alt="Rede Visitantes"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">UFMT Visitantes</h3>
            <p className="text-gray-600 flex-grow">
              Rede para convidados e visitantes da universidade, com acesso limitado à internet.
            </p>
            <Link href="/pages/indexVisitantes" className="mt-4 inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded">
              Veja como conectar
            </Link>
          </section>
        </div>

        <div className="text-center mt-10">
          <a
            href={`${basePath}/manual.pdf`}
            className="inline-flex items-center bg-gray-700 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded"
            download
          >
            <i className="fas fa-download mr-2"></i>
            Baixar manual completo (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}
