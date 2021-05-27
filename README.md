# M7.2-TypeScript-Rockets

M071_02: cohetes TypeScript
Descripción
Queremos hacer un software de carreras de cohetes.

Un cohete está identificado por un código de 8 caracteres y un número de propulsores. Realiza los siguientes pasos: (Intenta seguir el esquema de MVC, separando en diferentes directorios lo que es la vista del modelo y el controlador). El código deberá estar preparado para aceptar 2 cohetes o 99999999 cohetes (debe ser escalabre utilizando funciones genéricas)
nivel 1
1) Creamos dos cohetes con los códigos "32WESSDS" y "LDSFJA32". El primer cohete tendrá 3 propulsores (potencia máxima: 10,30,80) y el segundo 6 propulsores (potencia máxima: 30,40,50,50,30,10).
2) Ver tamaño el código de los cohetes y el número de propulsores que tiene.
3) Haz una función que calcule la potencia máxima del cohete (será el sumatorio de las potencias máximas de los propulsores)
4) El cohete tendrá dos métodos, acelerar o frenar y aumentará o se reducirá de 10 en 10 la potencia del propulsor. El cohete tendrá una potencia actual.

Ejemplo Rocket con potencias de 10,30,80 . Al crear el cohete la potencia actual será 0.
Incremento 1º Golpe: 10 + 10 + 10 = 30 potencia actual
Incremento 2º Golpe: 0 + 10 + 10 = 30 + 20 potencia actual
Incremento 3º Golpe: 0 + 10 + 10 = 50+ 20 potencia actual
Incremento 4º Golpe: 0 + 0 + 10 = 70 + 10 potencia actual
Incremento 5e Golpe: 0 + 0 + 10 = 80 + 10 potencia actual
.... hasta llegar a la potencia máxima que  será 120 
5) Añadir a la vista botones para permitir a un usuario crear, acelerar, frenar y ver la información de los cohetes. Algo parecido a la imagen de abajo

nivel 2
Mejora la interfaz gráfica, y el tema de las validaciones. Convertir esta aplicación en un juego, decide las normas ti mismo / a
nivel 3
Haz que los cohetes tengan algún tipo de animación css en función de la potencia actual
