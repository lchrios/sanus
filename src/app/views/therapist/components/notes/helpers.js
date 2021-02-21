export default function debounce(a,b,c){
  var d,e;
  return function(){
    function h(){
      d=null;
      c||(e=a.apply(f,g));
    }
    var f=this,g=arguments;
    return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
  }
}


/**
 * *! no mames descubrí que con este comando tambien sale el inicio del codigo HTML ahuevisimo
 * 
 * continuando con el comentario esta función que queria resaltar alv es para eliminar el HTML del preview
 * en la app de notas
 */
export function removeHTMLTags (str) {
  return str.replace(/<[^>]*>?/gm, '');
};

