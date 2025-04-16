// pages/config-android.tsx


const ConfigWindows = () => {
    return (
      <div className="flex flex-col min-h-screen">
     
  
        <main className="flex-grow container mx-auto py-10">
          <h1 className="text-4xl font-bold text-center mb-6">Configuração da Eduroam em sistemas windows</h1>
  
          <h2 className="text-2xl font-semibold mb-4">Utilizando o aplicativo Eduroam</h2>
  
          <div className="text-center mb-6">
            <a href="https://geteduroam.app/app/geteduroam.exe" target="_blank" rel="noopener noreferrer">
              <img className="max-w-[700px] mx-auto" src="/images/iconeDownload.png" alt="Logo app store" />
            </a>
          </div>
  

  
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Após realizar o download e abrir o aplicativo, siga os passos abaixo:
          </h3>

<div className="space-y-8 max-w-2xl mx-auto">
  {/* Passo 1 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      1
    </div>
    <p className="text-gray-800 text-xl mb-4">Abra o aplicativo Eduroam e clique em Connect to Eduroam.</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/geteduroam.png" alt="Logo geteduroam" />
  </div>

{/* Passo 2 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      2
    </div>
    <p className="text-gray-800 text-xl mb-4">Abra o aplicativo Eduroam.</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/passo2windows.png" alt="Logo geteduroam" />
  </div>


{/* Passo 3 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      3
    </div>
    <p className="text-gray-800 text-xl mb-4">Pesquise por UFMT na caixa de texto</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/passo3windows.png" alt="Logo geteduroam" />
  </div>

  {/* Passo 4 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      4
    </div>
    <p className="text-gray-800 text-xl mb-4">Clique em NEXT</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/passo4windows.png" alt="Logo geteduroam" />
  </div>

 {/* Passo 5 */}
 <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      5
    </div>
    <p className="text-gray-800 text-xl mb-4">Insira as credenciais, que são o seu email institucional e a senha </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/passo5windows.png" alt="Logo geteduroam" />
  </div>

 {/* Passo 6 */}
 <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      6
    </div>
    <p className="text-gray-800 text-xl mb-4">Será exibido a mensagem “You are now connected to eduroam” indicando que o computador/notebook está conectado a rede Eduroam
    </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/passo6windows.png" alt="Logo geteduroam" />
  </div>


  {/* Passo 6 */}
 <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      7
    </div>
    <p className="text-gray-800 text-xl mb-4">Verifique se a conexão foi realizada com sucesso, caso contrário realize a conexão manualmente
    </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/passo7windows.png" alt="Logo geteduroam" />
  </div>

  
  </div>
        </main>
  
     
      </div>
    );
  };
  
  export default ConfigWindows;
  