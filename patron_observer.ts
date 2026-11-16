interface IObservador {
  notificar(nombre: string, nuevoEstado:string):void
}

class Soporte implements IObservador{
  notificar(nombre: string, nuevoEstado: string): void {
    console.log(`${nombre} ha cambiado de estado a ${nuevoEstado}`)
  }
}

class Equipo {
  nombre: string;
  tipo: string;
  estado: string;
  soportes: IObservador[] = [];

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }
  agregarObservador(soporte: Soporte) {
    this.soportes.push(soporte);
  }
  cambiarEstado(nuevoEstado: string) {
    this.estado = nuevoEstado;
    this.soportes.forEach((soporte) => {
      soporte.notificar(this.nombre, nuevoEstado)
    });
    console.log(`Soporte notificado: ${this.nombre} ha cambiado a ${nuevoEstado}`)
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
