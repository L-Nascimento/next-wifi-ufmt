// pages/config-android.tsx


const ConfigLinux = () => {
    return (
      <div className="flex flex-col min-h-screen">
     
  
        <main className="flex-grow container mx-auto py-10">
          <h1 className="text-4xl font-bold text-center mb-6">Configuração da Eduroam em sistemas Linux</h1>
  
          <h2 className="text-2xl font-semibold mb-4">Utilizando o Gerenciador de redes</h2>
  
          
  


<div className="space-y-8 max-w-2xl mx-auto">
  {/* Passo 1 */}
  <div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      1
    </div>
    <p className="text-gray-800 text-xl mb-4"> Faça o download do certificado</p>
    
    <a href="https://ufmt.br/wifi/GlobalSignRootCA-R3.crt" target="_blank" rel="noopener noreferrer">
              <img className="max-w-[200px] mx-auto" src="/images/iconeCertificado.png" alt="Logo app store" />
        </a>
    
  </div>

{/* Passo 2 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      2
    </div>
    <p className="text-gray-800 text-xl mb-4">Conecte-se à rede “eduroam”, e preencha os campos conforme a fig. abaixo:</p>
    <img
  className="rounded-lg shadow-sm max-w-[800px] mb-8"
  src="/images/configLinux.png"
  alt="Logo geteduroam"
/>
    <div className="text-gray-800 text-xl mb-6 text-left">
      <ul className="list-disc list-inside space-y-4">
        <li>TTLS (ou TLS encapsulado) em “Método EAP” ou “AUTENTICAÇÃO”;</li>
        <li>PAP em “Autenticação da fase 2” ou “Autenticação interna”;</li>
        <li>No “Certificado CA”, selecione o arquivo do certificado;</li>
        <li>“Nome do usuário” ou “Identidade” é seu endereço de e-mail da UFMT;</li>
        <li>Deixe em branco o campo “Identidade anônima”;</li>
        <li>“Senha” é a senha do e-mail da UFMT.</li>
      </ul>
    </div>
  </div>


{/* Passo 3 */}
<div className="bg-white border border-blue-700 shadow-md rounded-xl p-6 flex flex-col items-center text-center">
    <div className="text-white bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4">
      3
    </div>
    <p className="text-gray-800 text-xl mb-4">Clique em conectar</p>
    <img className="rounded-lg shadow-sm max-w-[800px]" src="/images/conectarLinux.png" alt="Logo geteduroam" />
  </div>

  
  
  </div>
        </main>
  
     
      </div>
    );
  };
  
  export default ConfigLinux;
  