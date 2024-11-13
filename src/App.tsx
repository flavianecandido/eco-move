
import './index.css'

function App() {

  return (
    <>
      <body className="flex justify-around items-center min-w-[320px] min-h-screen m-0 bg-gradient-to-br from-[#bfc8bc] via-[#d0d1bc] to-[#9baea8] text-white font-sans leading-6 font-normal">
        <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="ml-32">
            <img src="src/assets/electric-car.png" alt="" />
          </div>
          <div className="space-y-2 text-center text-slate-700 m-28 text-xl">
            <p className='mb-4'>Bem-vindo(a) à <span className='text-emerald-700 font-semibold'>EcoMove</span>!<br />
              Aqui, conectamos você a pontos de carregamento acessíveis e ecologicamente responsáveis, facilitando a jornada rumo a um futuro com zero emissões. <br />
              Encontre estações próximas, carregue seu veículo de forma prática e contribua para a mobilidade sustentável com tecnologia e inovação. <br />
              Clique abaixo e deixe que Lumi, nossa assistente virtual, encontre o posto de recarga mais próximo para você!</p>          
            <button className="bg-emerald-600 text-white font-bold py-2 px-4 rounded hover:bg-emerald-700">
              Falar com a Lumi
            </button>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
