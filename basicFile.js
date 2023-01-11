function deleteCookie (nombre){
    setCookie (nombre, "" , 0);
}

function getCookie(nombre){
    var nom = nombre+"=";
    var array = document.cookie.split(";");
    for (var i=0; i<array.length;i++){
        var c= array[i];
        while(c.charAt(0)=""){
            c=c.substring(1);
        }
        if(c.indexOf(nombre)==0)
        return c.substring(nombre.length, c.length)
    }
    return "";
}

function setCookie(nombre,valor,expiracion) {
var d = new Date();
d.setTime(d.getTime()+expiracion*24*60*60*1000);
var expiracion = "expires="+d.toUTCString();
document.cookie = nombre + "=" + valor+ ";" +expiracion+";path=/"; }   

function verTodasCookies() {
    document.write("estas son todas las cookies creadas : " + document.cookie)
}