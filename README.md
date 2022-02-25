### Documentation ###
#### Skeleton ####

Para agregar un esqueleto a los elementos, solo basta con utilizar el componente Skeleton.js, ubicado en la carpeta de componentes del proyecto.

Un ejemplo de uso es el siguiente:
~~~
<SkeletonLayout>
    {contenido-para-agregar}
<SkeletonLayout/>
~~~

##### props #####
| Nombre | Tipo | Valor por defecto | Opciones | Obligatorio* |
| children | node | | | true
| animation | string | pulse | wave, false | false