# React-Ej6: Administrar Colores

Este proyecto es una aplicación de React que permite a los usuarios agregar colores a una lista, almacenarlos en el **LocalStorage**, y visualizarlos en tarjetas. También permite eliminar colores de la lista.

## Descripción

La aplicación cuenta con un formulario donde los usuarios pueden ingresar el nombre de un color o un valor hexadecimal. El color ingresado se muestra en un recuadro y se puede agregar a una lista de colores que se almacena en el **LocalStorage**. La lista de colores se mantiene incluso al recargar la página. Los usuarios también pueden eliminar colores de la lista.

## Comportamiento

1. El usuario ingresa un color en el input de texto.
2. El color se muestra dinámicamente en un recuadro.
3. Al hacer clic en el botón **Guardar**, el color se agrega a la lista de colores y se almacena en el **LocalStorage**.
4. Los colores guardados se muestran en tarjetas, cada una con un recuadro que muestra el color.
5. Los usuarios pueden eliminar cualquier color de la lista, lo que también lo eliminará del **LocalStorage**.

## Uso del proyecto

### Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/santinohamada/React-Ej6.git
   ```
2. Entra en el directorio del proyecto:
   ```bash
   cd React-Ej6
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

### Ejecución

1. Inicia la aplicación:
   ```bash
   npm start
   ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Funcionalidades

- **Agregar colores**: Ingresa un nombre o valor hexadecimal de un color en el input y guárdalo en la lista.
- **Eliminar colores**: Cada tarjeta de color tiene un botón "Borrar" para eliminar ese color de la lista y del **LocalStorage**.

## Tecnologías utilizadas

- **React**
- **React-Bootstrap**
- **LocalStorage**

## Futuras mejoras

- Añadir validación para asegurar que los colores ingresados sean válidos.
- Permitir editar los colores existentes.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar o añadir nuevas características, no dudes en enviar un **pull request**.

## Autor

Creado por [santinohamada](https://github.com/santinohamada).
