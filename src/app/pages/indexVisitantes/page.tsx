// pages/config-android.tsx


const indexVisitantes = () => {
    return (
      <div className="flex flex-col min-h-screen">
     
  
        <main className="flex-grow container mx-auto py-10">
          <h1 className="text-4xl font-bold text-center mb-6">Siga as instruções abaixo:</h1>
  
      <br></br>

<div className="space-y-8 max-w-2xl mx-auto">
  {/* Passo 1 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      1
    </div>
    <p className="text-gray-800 text-xl mb-4">Abra o wifi e selecione a rede UFMT</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/visitantespasso1.png" alt="Logo geteduroam" />
  </div>

{/* Passo 2 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      2
    </div>
    <p className="text-gray-800 text-xl mb-4">Selecione para conectar-se a rede e aguarde aparecer a mensagem "entre na rede" ou "ação necessária" e selecione a rede novamente</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/visitantespasso2.png" alt="Logo geteduroam" />
  </div>


{/* Passo 3 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      3
    </div>
    <p className="text-gray-800 text-xl mb-4">Após ser redirecionado para a página, selecione o botão google</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/visitantespasso3.jpeg" alt="Logo geteduroam" />
  </div>

  {/* Passo 4 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      4
    </div>
    <p className="text-gray-800 text-xl mb-4">Insira seu email e senha do Google</p>
    <p className="text-gray-800 text-xl mb-4">obs: o seu email institucional também é um email Google</p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/visitantepasso4.jpeg" alt="Logo geteduroam" />
  </div>

 {/* Passo 5 */}
 <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      5
    </div>
    <p className="text-gray-800 text-xl mb-4">aguarde a finalização </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/visitantespasso5.jpeg" alt="Logo geteduroam" />
  </div>

 {/* Passo 6 */}
 <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      6
    </div>
    <p className="text-gray-800 text-xl mb-4"> Verifique se a conexão foi realizada com sucesso, caso contrário realize a conexão manualmente
    </p>
    <img className="rounded-lg shadow-sm max-w-[250px]" src="/images/visitantespasso6.jpeg" alt="Logo geteduroam" />
  </div>



  
  </div>
        </main>
  
     
      </div>
    );
  };
  
  export default indexVisitantes;
  