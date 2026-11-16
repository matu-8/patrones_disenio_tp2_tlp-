# TP 2 — Patrones de Diseño

Trabajo práctico sobre **Patrones de Diseño** implementado en **TypeScript**. Los ejercicios abordan un sistema de inventario de equipos informáticos aplicando distintos patrones de Diseño.

## Ejercicios

Los enunciados completos se encuentran en [`actividades.md`](./actividades.md). En este repositorio se desarrollan los siguientes patrones:

1. **Singleton** — Clase `Inventario` que garantiza una única instancia para el inventario de equipos.
2. **Factory Method** — Clase `EquipoFactory` para crear distintos tipos de equipos (`Notebook`, `Desktop`, `Servidor`).
3. **Observer** — Clase `Soporte` que recibe notificaciones cuando un equipo cambia de estado.
4. **Adapter** — `AdaptadorInventario` para integrar la clase antigua `InventarioViejo` con el nuevo sistema.

Además, en la carpeta [`ejemplos/`](./ejemplos) se incluyen archivos de referencia y ejemplos de implementación de los patrones.

## Requisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- TypeScript

## Instalación

> El proyecto está configurado por defecto con **pnpm**. Si no tenés pnpm instalado, podés migrar a npm siguiendo las instrucciones de la siguiente sección.

```bash
# Instalar dependencias con pnpm
pnpm install
```

### Usar npm en lugar de pnpm

Si querés trabajar con **npm** (por ejemplo, por no tener pnpm instalado), eliminá los archivos de configuración de pnpm y ejecutá `npm install`:

```bash
# 1. Eliminar los archivos de configuración de pnpm
rm pnpm-lock.yaml pnpm-workspace.yaml

# 2. Instalar con npm
npm install
```

## Ejecución

Los archivos `.ts` pueden ejecutarse directamente con **tsx**:

```bash
npx tsx singleton.ts
```

O bien, compilar y ejecutar con TypeScript:

```bash
npx tsc
node singleton.js
```

## Estructura del proyecto

```
.
├── actividades.md           # Enunciados de los ejercicios
├── ejemplos/               # Ejemplos y referencias de los patrones
├── singleton.ts            # Ejercicio 1: Patrón Singleton
├── factory_method_prueba.ts# Ejercicio 2: Patrón Factory Method
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Dependencias y scripts
```

## Dependencias

- **typescript** — desarrollo
- **tsx** — ejecución de TypeScript en Node.js
