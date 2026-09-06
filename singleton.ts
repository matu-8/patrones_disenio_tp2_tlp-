// interface Equipo {
//     nombre: string;
//     tipo: string;
//     estado: 'disponible' | 'en reparación';
// }
type Equipo = {
  nombre: string;
  tipo: string;
  estado: "disponible"|"en reparacion";
}

class Inventario  {
  private static instancia: Inventario;
  private equipos: Equipo[]= [] //equipos es un arreglo de objetos de la misma clase. Aprovenchando la instancia unica.
  private constructor() { } //constructor privado para que el codigo cliente no pueda acceder a el y cree mas instancias, asegurando el funcionamiento del patron
  public static obtenerInstancia() {
    if (!Inventario.instancia) { //creacion de la instacia unica
      return Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }
  public agregarEquipo(nombre: string, tipo: string, estado: "disponible"|"en reparacion"): void {
    const equipoNuevo: Equipo = { nombre, tipo, estado }
    this.equipos.push(equipoNuevo)
    }
  public listarEquipos(): Equipo[] {
    return this.equipos;
  }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());
inventario.agregarEquipo('Notebook Lenovo', 'portatil', 'en reparacion')
console.log(inventario.listarEquipos());
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]
