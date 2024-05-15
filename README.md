# evaluacion



# 2 ¿Como declararias una variable en JavaScript? ¿y una constante?
R: En JavaScript, para declarar variables se utilizan las palabras reservadas "let" y "var" (las palabras reservadas son aquellas utilizadas para funciones especiales dentro de un lenguajes de programacion y no se pueden utilizar como variables).En general utilizamos estas para declarar una variable que posiblemente vaya a cambiar dentro del codigo, pero si buscamos declarar una variable que va a ser constante entonces utilizamos la palabra reservada "const"


# 7 ¿Que es la concatenacion y como se realiza en JavaScript?
R: La concatenacion es un metodo utilizado dentro de la programacion para unir o juntar dos variables o cadenas presentes dentro de un codigo, en Javascript se realiza con el simbolo "+".
La concatenacion nos permite tambien unir, si es necesario,  distintos tipos de variable como un Interger con un String, aunque debemos tener en cuenta que si querenos juntarlos en linea pero que no esten unidos debemos procurar agregar un elemento extra dentro del espacio entre las dos variables.
Tambien podemos utilizar la plantillas literales dentro de nuestro codigo en JavaScript si nos resulta tedioso utilizar el metodo anterior, ademas de ser mas flexible tambien lo hace ver mejor organizado, en estas plantillas se utilizan las comillas invertidas y este comando (${variable}), para separar las variables.

# 10 ¿Como se utilizan los operadores relacionales en JavaScript?
R:Los operadores relacionales son aquellos que utilizamos en un lenguaje para la toma de decisiones dentro de un programa, comparando valores de una variable y comprobando la veracidad de dicha comparacion arrojando si el resultado es falso(False) o verdadero(True).
Los operadores relacionales en JavaScript son:
Igualdad(==): Verifica si los operadores son iguales
Desigualdad(!=): Verifica si los operadoes son diferentes
Mayor que(>): Verifica que el primer operador sea mayor al segundo
Menor que(<): Verifica que el primero operador sea menor al segundo
Mayor o igual que(>=):Verifica que el operador sea mayor o igual al otro
Menor o igual que(<=): Verifica que el operador sea menor o igual al otro

# 11 ¿Como se utilizan los operadores logicos en JavaScript?
R: Los operadores logicos en JavaScript son aquellos que utilizamos para hacer una comparacion entre 2 condiciones dentro del codigo, esta comparacion devuelve valor booleano (True or False) dependiendo de si los como resulte esta comparacion. Ademas estos por lo general se evaluan de izquierda a derecha.

Los operadores logicos son:

&&(AND): Comprueba que ambas condiciones sean verdaderas
||(OR): Confirma si almenos una condicion se cumple
!(NOT): Invierte el valor de la condicion (Por ejemplo si es verdadera, este operador la cambia a falsa)

Se rigen por este orden de prioridades:
!
&&
||