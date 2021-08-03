# HeroApp

## Aprendiendo un Poco

- Enzyme es una libreria que hace mas facil poder escribir pruebas sobre un componente

- Existen 2 tipos de pruebas: 
- - Unitarias: Se encofa en le funcionamiento de funciones especificas
- - Integración: Se enfoca en el comportamiento grupal de varias funciones

### Es importante conocer

- Shallow: Es una función de enzyme que sirve para hacer pruebas a los componentes de forma aislada.
- wrapper: Es usado como buena practica para nombrar el componente que esta siendo envuelto.
- snapshots: Hace referencia a pruebas instantaneas.
- mount: Es usado para montar o demontar el componente.
- toEqual: Es usado para hacer comparaciones con objetos.
- toMatchSnapshot: Es una captura de solo lectura que se le hace a un componente. ejemplo: .toMatchSnapshot().
- toEstrictEqual: Es usado para hacer comparaciones muy estrictas a objetos tanto los tipos como estructura.

## Resolviendo ejemplos

[Imgur](https://i.imgur.com/GR5Y9h9.png)

En el primer ejemplo se esta haciendo un test unitario a una función "mejorSabor()" que debera devolver el string 'melocotón'
En el segundo ejemplo es similar al primer ejemplo con la unica diferencia que se hace una negación, es decir probar lo contrario

[Imgur](https://i.imgur.com/kToB3Op.png)

Este ejemplo podria parecerte muy complejo pero no lo es. Este hace una prueba de comprobar si existe una etiqueta que contenga la clase '.navBar'. Las constantes contextValue y wrapper trabajan en conjunto para simular un componente, el contextValue le enviaria la entidad y logged al componente montado por la constante wrapper.

