# Data Lovers

## Índice
* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Primer sketch del proyecto](#3-primer-sketch-del-proyecto)
* [4. Diseño de alta fidelidad](#4-consideraciones-generales)
* [5. Checklist](#9-checklist)

***

## 1. Resumen del proyecto

El público objetivo de nuestro proyecto son los jugadores de pokemon go que desean encontrar una base de datos en la que puedan buscar y ordenar pokemon según sus necesidades, lo cual los ayudará en la captura de pokemons y a completar su pokedex.

El proyecto fue diseñado para una óptima búsqueda de pokemons por generación, tipo, nombre o número. Adicionalmente, muestra cuál es el porcentaje de pokemon que se encuentra dentro de cada tipo. Por último, muestra datos relevantes de cada pokemon, lo cual ayudará al jugador a validar las fortalezas y debilidades de los pokemon seleccionados y tomar mejores decisiones al momento de luchar por gimnasios. 

<img href="https://i.ibb.co/XVc11CP/pokemon-go-2392325.webp">


## 2. Historias de usuario

a- Como jugador de pokemon go:

**quiero** visualizar todos los pokemon en una pantalla
**para** saber cuántos me faltan capturar

- [x] Tener los pokemon impresos en una pantalla
- [x] Cada pokemon debe tener estar en un contenedor
- [x] Debe tener un sentido estético que combine con el fondo

b- Como jugador de pokemon go:

**quiero** ver las estadísticas de un pokemon específico
**para** armar un buen equipo

- [x] Crear el diseño del modal con los elementos establecidos que queremos agregar
- [x] Vincular el modal con un pokemon 
- [x] Replicar el modal con el resto de pokemon
- [x] Que el modal tenga un sentido estético

c- Como jugador de pokemon go:

**quiero** ver filtrar los pokemon por tipo, orden ascendente y descendente y nombre
**para**  ver poder organizar mis capturas de acuerdo a las necesidades del momento

- [x] Crear una función de sort por orden ascendente, descendente
- [x] Crear una función de filter por nombre
- [x] Crear una función de filter por tipo
- [x] Al filtrar los tipos los pokemon deben de ser reorganizados de acuerdo a lo elegido

d- Como jugador de pokemon go:

**quiero** ver el porcentaje de pokemon en cada tipo
**para**  ver qué tantas probabilidades tengo de atraparlos

- [x] Crear una función stats que calcule el porcentaje de pokemon por tipo
- [x] Al filtrar un pokemon por tipo debe de aparecer tal porcentaje

## 3. Primer sketch del proyecto

Realizammos el sketch en hojas, de acuerdo a la organización que le quisimos dar a nuestro proyecto, definimos una vista limpia y bien distribuida, con una barra de búsqueda y una para filtrado.

Vista general de página y distribución de cartas de pokemon

<img src="https://i.ibb.co/dQYnCm6/poke1.jpg">

Vista y distribución del modal

<img src="https://i.ibb.co/zRTCdc0/poke2.jpg">


## 4. Diseño de alta fidelidad 

Realizammos el sketch en hojas, de acuerdo a la organización que le quisimos dar a nuestro proyecto, definimos una vista limpia y bien distribuida, con una barra de búsqueda y una para filtrado.
En cuanto a las paleta de colores, inicialmente decidimos usar tonos pasteles relacionados a pokemon go, que luego fueron cambiados a tonalidades azules, que le dieron un aspecto sobrio y ordenado.

Vista general de la página

<img src="https://i.ibb.co/LQrFJ8P/poke3.jpg" alt="imagen-pagina">

Vista y distribución del modal

<img src="https://i.ibb.co/BLPNr1t/pok4.jpg" alt="imagen-modal">

## 5. Checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
