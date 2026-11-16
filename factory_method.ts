
interface IEquipo {
  tipo: string;
  modelo: string;
  ram: string;
  procesador: string;
}

type props = Omit<IEquipo, "tipo">;

abstract class Equipo {
  abstract detalles():void
}

class EquipoFactory {

  crearEquipo(tipo: string, options: props) {
    switch (tipo) {
      case "Notebook":
        return new Notebook(tipo, options);
      default:
        throw new Error('Tipo de dispositivo no contemplado');
    }
  }
}

class Notebook extends Equipo{
  tipo: string;
  modelo: string;
  ram: string;
  procesador: string

  constructor(tipo:string, options: props) {
    super();
    this.tipo = tipo;
    this.modelo = options.modelo;
    this.ram = options.ram
    this.procesador = options.procesador;
  }

  detalles(): void {
    console.log(`Tipo: ${this.tipo}, ${this.modelo}, ${this.ram}, ${this.procesador} `)
  }
}

const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", {modelo:"Dell XPS", ram:"16GB", procesador: "i7"});
notebook.detalles();
const netbook = factory.crearEquipo("Notebook", {modelo: "Lenovo IdeaPad", ram:"8GB", procesador:"i5"})
netbook.detalles();
