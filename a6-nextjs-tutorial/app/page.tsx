import EstadoFactura from "./ui/EstadoFactura";

export default function Home() {
  return (
    <main>
      <div>Hello Iñaki</div>
      <EstadoFactura estado ="pagada" />
      <EstadoFactura estado ="pendiente" />
    </main>
  );
}