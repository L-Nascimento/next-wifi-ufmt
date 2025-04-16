// pages/config-android.tsx


const indexAdministrativa = () => {
    return (
      <div className="flex flex-col min-h-screen">
     
  
        <main className="flex-grow container mx-auto py-10">
          <h1 className="text-4xl font-bold text-center mb-6">Siga as instruções abaixo:</h1>
          <h2 className="text-2xl font-semibold mb-4">Acessos por dispositivos moveis (celular, tablet, android, etc):</h2>
  
      <br></br>

<div className="space-y-8 max-w-2xl mx-auto">
  {/* Passo 1 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      1
    </div>
    <p className="text-gray-800 text-xl mb-4">selecione a rede UFMT Administrativa e selecione para conectar.  </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/admpasso1.png" alt="Logo geteduroam" />
    <br></br>
    <p className="text-gray-800 text-xl mb-4">Após esses passos a tela mostrada será aberta </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/admpasso12.jpeg" alt="Logo geteduroam" />
  </div>

{/* Passo 2 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      2
    </div>
    <p className="text-gray-800 text-xl mb-4">Em "método EAP" selecione "TTLS" </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/admpasso2.jpg" alt="Logo geteduroam" />
  </div>


{/* Passo 3 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      3
    </div>
    <p className="text-gray-800 text-xl mb-4">Em "identidade" coloque seu CPF (somente números) e em "senha" utilize a mesma senha do portal de sistemas integrados</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/admpasso3.jpg" alt="Logo geteduroam" />
  </div>

  {/* Passo 4 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      4
    </div>
    <p className="text-gray-800 text-xl mb-4">Em "certificado de CA" selecione "usar certificado do sistema"</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/admpasso4.jpg" alt="Logo geteduroam" />
  </div>

 {/* Passo 5 */}
 <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      5
    </div>
    <p className="text-gray-800 text-xl mb-4">Em "domínio" coloque "ufmt.br" </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/admpasso5.jpg" alt="Logo geteduroam" />
  </div>

 {/* Passo 6 */}
 <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      6
    </div>
    <p className="text-gray-800 text-xl mb-4">role a tela até o final e selecione "conectar"
    </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/admpasso6.jpeg" alt="Logo geteduroam" />
  </div>


  {/* Passo 7 */}
 <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      7
    </div>
    <p className="text-gray-800 text-xl mb-4">Verifique se a conexão foi realizada com sucesso, caso contrário realize a conexão manualmente
    </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/admpasso7.jpeg" alt="Logo geteduroam" />
  </div>
  </div>

  
  <h2 className="text-2xl font-semibold mt-8 mb-10">Acessos por Notebooks ou desktops:</h2>

  <div className="space-y-8 max-w-2xl mx-auto">
  {/* Passo 1 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      1
    </div>
    <p className="text-gray-800 text-xl mb-4">selecione a rede UFMT Administrativa e selecione para conectar.  </p>
    <img className="rounded-lg shadow-sm max-w-[300px]" src="/images/admpcpasso1.png" alt="Logo geteduroam" />
    <br></br>
    <p className="text-gray-800 text-xl mb-4"> Insira o seu CPF e a senha do portal de sistemas integrados e clique em "OK" </p>
    <img className="rounded-lg shadow-sm max-w-[400px]" src="/images/admpcpasso2.png" alt="Logo geteduroam" />
  </div>

  </div>
        </main>
  
     
      </div>
    );
  };
  
  export default indexAdministrativa;
  