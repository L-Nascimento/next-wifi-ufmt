'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function indexEduroam() {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="flex-grow px-4 py-10 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Selecione seu Dispositivo
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Escolha abaixo o tipo de dispositivo para ver as instruções específicas de configuração
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Dispositivo Android */}
          <DeviceCard
            imageSrc="/images/android.svg"
            title="Android"
            description="Smartphones e tablets com sistema operacional Android"
            linkHref="/pages/config-android"



          />

          {/* Dispositivo Apple */}
          <DeviceCard
            imageSrc="/images/apple.svg"
            title="Apple"
            description="iPhones, iPads e outros dispositivos Apple"
            linkHref="/pages/config-ios"
          />

          {/* Dispositivo Windows */}
          <DeviceCard
            imageSrc="/images/windows.svg"
            title="Windows"
            description="Notebooks e desktops com Windows"
            linkHref="/pages/config-windows"
          />

          {/* Dispositivo Linux */}
          <DeviceCard
            imageSrc="/images/linux.svg"
            title="Linux"
            description="Dispositivos com sistemas baseados em Linux"
            linkHref="/pages/config-linux"
          />
        </div>
      </div>
    </main>
  );
}

type DeviceCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  linkHref: string;
};

function DeviceCard({ imageSrc, title, description, linkHref }: DeviceCardProps) {
  return (
    <article
      tabIndex={0}
      className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center justify-between hover:shadow-lg transition-all focus:outline-4 focus:outline-orange-500"
    >
      <Image
        src={imageSrc}
        alt={`Ícone do ${title}`}
        width={100}
        height={100}
        className="mb-4 object-contain"
      />
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-500 flex-grow">{description}</p>
      <Link
        href={linkHref}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        aria-label={`Configurar no ${title}`}
      >
        Configurar
      </Link>
    </article>
  );
}
