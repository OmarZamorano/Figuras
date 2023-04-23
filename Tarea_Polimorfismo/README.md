# Tarea Polimorfismo

El programa tiene como objetivo que sea atractivo para el usuiario, haciendo que un círculo en la parte inferior de la pantalla se mueva en el eje x siguiendo la posición del mouse y al momento de hacer click en este, se construyan cuadrados simulando balas, mientras que otros cuadros enemigos caen en dirección opuesta. Todo esto con la posibilidad de disparar y destruir a los cuadrados que caen.  

El código consta de una clase FIGURA la cual cuenta con las propiedades generales que pueden tener los objetos creados a futuro, en este caso solo son dos figuras. Después se presenta la clase ELIPSE y la clase CUADRO donde se aprecia la herencia de los campos de la clase FIGURA.

Cada una de estas dos clases representan las figuras que se construirán en el canva, es por eso su nombre, además que cada una cuenta con su método Draw(), el cual hace que el objeto creado, propio de esta clase se dibuja en la pantalla.

## Variables globales 
+ let mouseX = x (iguala el parámetro de la posición en x de los objetos a la posición en x donde el mouse se encuentre).
+ let Balas = [] (crea un arreglo llamado Balas).
+ let Enemigos = [] (crea un arreglo llamado Enemigos).

## Función mousePresed()
+ Esta función hace que se creen las balas y después se agreguen al arreglo donde se almacenan las balas. (Todo esto cada que se de un click)
+ También crea a los enemigos de tipo Cuadro, y de igual manera los agrega al arreglo donde se alamcenan los enemigos. (Todo esto cada que se de un click.)

## Función setup()
Solo se crea el canva o la pantalla con sus medidad establecidas.

## Función draw()
+ Pirmero se pinta el fondo del canva
+ Luego se crea un objeto tipo Elipse el cual será manipulado por el usuario y se dibuja usando el método Draw().
+ Se crea un ciclo for el cual despliega los objetos (balitas) almacenados en el arreglo (Balas). Primero decrece su posición en el eje "y" para que al dibujarse con el método draw() parezca como si las balas se movieran hacia arriba.
+ Se crea un ciclo for el cual despliega los objetos (enemigos) almacenados en el arreglo (Enemigos). Primero incrementa su posición en el eje "y" para que al dibujarse con el método draw() parezca que los enemigos se movieran hacia abajo.
+ Se crean dos ciclos for, uno dentro de otro. Despues, dentro de estos un if condicionando que si la distancia en X y en Y de los enemigos y las balas es menor a 15, se hace una modificacion en los arreglos Balas y Enemigos para destruir un objeto dentro de estos, todo por medio de la palabra splice.

Splice hace una modificación en los arreglos y acepta 3 parámetros, aunque no son obligatorios los 3. El primer parámetro se especifica el arreglo inicial a ser modificado, en el segundo parámetro se definen los datos a insertarse, y el tercer parámetro es un índice que especifica la posición del arreglo a partir de la que se insertarán los datos. 

Como no necesitamos reincertar un valor tal cual en el arreglo ya que solo queremos eliminar objetos de este, en el primer parámetro de "splice" se ingresa Enemigos.indexOf(enemigos). indexOf retorna la posición donde se encuentre lo ingresado en el parámtro(enemigos) y en el segundo parámetro de "splice" se ingresa "1" indicando que ese será el valor a sustituir, pero como no colocamos nada en el tercer parámetro el cual es la posición en donde se modifica el arreglo, se destruye un objeto "enemigos".

Después se hace lo mismo pero con el arreglo Balas para eliminar la bala que choca con el enemigo, ya que si no se hace solo se destruiria el objeto enemigo y no la bala.

Por último se colocó un un if dentro de un for para condicionar que si los enemigos pasan del alto de la pantalla, se detenga el programa,todo esto con la función noLoop().

### NOTA: el cilco for tambien sirve para escribir código de variables de un arreglo que no existen dentro del draw pero sí en funciones externas. En mi caso realice este último for ya que los objetos enemigos estan declarados en la función mousePressed y no en el draw().
