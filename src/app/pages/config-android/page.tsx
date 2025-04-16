// pages/config-android.tsx


const ConfigAndroid = () => {
    return (
      <div className="flex flex-col min-h-screen">
     
  
        <main className="flex-grow container mx-auto py-10">
          <h1 className="text-4xl font-bold text-center mb-6">Configuração da Eduroam em sistemas Android</h1>
  
          <h2 className="text-2xl font-semibold mb-4">Utilizando o aplicativo Eduroam</h2>
  
          <div className="text-center mb-6">
            <a href="https://play.google.com/store/apps/details?id=app.eduroam.geteduroam" target="_blank" rel="noopener noreferrer">
              <img className="max-w-[250px] mx-auto" src="/images/Google-play.png" alt="Logo Google Play" />
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
    <p className="text-gray-800 text-xl mb-4">Abra o aplicativo Eduroam.</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/geteduroam.png" alt="Logo geteduroam" />
  </div>

  {/* Passo 2 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      2
    </div>
    <p className="text-gray-800 text-xl mb-4">Pesquise por “ufmt” e selecione o perfil correspondente.</p>
    <img className="rounded-lg shadow-sm max-w-[300px]" src="/images/passo2eduroam.jpeg" alt="Passo 2" />
  </div>

  {/* Passo 3 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      3
    </div>
    <p className="text-gray-800 text-xl mb-4">Insira as credenciais do e-mail institucional.</p>
    <img className="rounded-lg shadow-sm max-w-[300px]" src="/images/passo3eduroam.jpeg" alt="Passo 3" />
  </div>

  {/* Passo 4 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      4
    </div>
    <p className="text-gray-800 text-xl mb-4">Caso apareça a seguinte mensagem, clique em “Salvar”.</p>
    <img className="rounded-lg shadow-sm max-w-[300px]" src="/images/passo4eduroam.jpeg" alt="Passo 4" />
  </div>

  {/* Passo 5 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      5
    </div>
    <p className="text-gray-800 text-xl mb-4">Clique em “Fechar a aplicação”.</p>
    <img className="rounded-lg shadow-sm max-w-[300px]" src="/images/passo5eduroam.jpeg" alt="Passo 5" />
  </div>

  {/* Passo 6 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      6
    </div>
    <p className="text-gray-800 text-xl mb-4">Caso apareça a seguinte mensagem, clique em “Permitir”.</p>
    <img className="rounded-lg shadow-sm max-w-[300px]" src="/images/passo5eduroam.jpeg" alt="Passo 6" />
  </div>
</div>

<h2 className="text-2xl font-semibold mt-10 mb-4"> Configuração manual</h2>

<div className="space-y-8 max-w-2xl mx-auto">
  {/* Passo 1 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      1
    </div>
    <p className="text-gray-800 text-xl mb-4">Conecte-se à rede “eduroam” e  Preencha os campos conforme a figura abaixo: .  </p>
    <img className="rounded-lg shadow-sm max-w-[300px]" src="/images/android-manual-certificado.png" alt="Logo geteduroam" />
    <br></br>
    <p className="text-gray-800 text-xl mb-4"> após preencher, selecione "conectar" </p>
    
  </div>




  </div>


        </main>
  
     
      </div>
    );
  };
  
  export default ConfigAndroid;
  