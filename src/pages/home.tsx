import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 justify-center items-center h-dvh gap-20 px-14">
      <div>
        <img src="src/assets/electric-car.png" alt="" />
      </div>
      <div className="flex flex-col justify-between items-center h-[430px]">
        <h1 className="text-3xl">
          Bem-vindo(a) à{" "}
          <span className="text-emerald-700 font-semibold">EcoMove</span>!
        </h1>
        <div className="space-y-2 text-center text-slate-700 text-xl leading-6">
          <p>
            Aqui, conectamos você a pontos de carregamento acessíveis e
            ecologicamente responsáveis, facilitando a jornada rumo a um futuro
            com zero emissões.
          </p>
          <p>
            Encontre estações próximas, carregue seu veículo de forma prática e
            contribua para a mobilidade sustentável com tecnologia e inovação.
          </p>
          <p>
            Clique abaixo e deixe que Lumi, nossa assistente virtual, encontre o
            posto de recarga mais próximo para você!
          </p>
        </div>
        <div>
          <Button
            onClick={() => navigate("/chatbot")}
            className="bg-emerald-600 text-white font-bold text-xl rounded hover:bg-emerald-700"
          >
            Falar com a Lumi
          </Button>
        </div>
      </div>
    </div>
  );
}
