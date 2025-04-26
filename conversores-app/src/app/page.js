export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Conversores App do Caio!!</h1>
      <p className="mb-8 text-lg">Aqui você pode converter moedas, temperaturas e medidas de forma prática e rápida.</p>
      <div className="flex flex-col gap-4">
      <a className="text-blue-500 underline" href="/src/sobre">Sobre</a>
        <a className="text-blue-500 underline" href="/conversor-moeda">Conversor de Moedas de dólar para real e vice-versa</a>
        <a className="text-blue-500 underline" href="/conversor-temperatura">Conversor de Temperatura (entre ºC e ºF, e vice-versa)</a>
        <a className="text-blue-500 underline" href="/conversor-medida">Conversor de Medidas de metros para pés e polegadas e vice-versa</a>
      </div>
    </main>
  );
}
