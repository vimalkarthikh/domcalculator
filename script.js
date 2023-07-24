var t=document.createElement("h1");t.setAttribute("id","title");t.innerHTML="Calculator";document.body.append(t);
var ip=document.createElement("input");
ip.setAttribute("type","text");ip.setAttribute("id","result");document.body.append(ip);

function bt(cval,idval){
    var b=document.createElement("button");
    b.setAttribute("onclick",cval);
    b.innerHTML=idval;
    return b;
}
function bl(){var b=document.createElement("br");return b;}
var n=bl();var n1=bl();var n2=bl();var n3=bl();var n4=bl();

var clr=bt("clear()","C");var dl=bt("del()","DEL");var div=bt("dsp('/')","/");
var nn=bt("dsp('9')","9");var eg=bt("dsp('8')","8");var sn=bt("dsp('7')","7");
var sx=bt("dsp('6')","6");var fv=bt("dsp('5')","5");var fr=bt("dsp('4')","4");
var th=bt("dsp('3')","3");var tw=bt("dsp('2')","2");var on=bt("dsp('1')","1");
var zr=bt("dsp('0')","0");var dzr=bt("dsp('00')","00");var equ=bt("calcu('=')","=");var dt=bt("dsp('.')",".");
var add=bt("dsp('+')","+");var sub=bt("dsp('-')","-");var mul=bt("dsp('*')","x");

document.body.append(n,nn,eg,sn,add,n1,sx,fv,fr,sub,n2,th,tw,on,div,n3,dzr,zr,mul,equ,n4,clr,dl,dt);

let os=document.getElementById("result");

function dsp(num){
    os.value+=num;
}
function calcu(){
    try{os.value=eval(os.value);}
    catch(err){alert("Invalid Input");}
}
function clear(){
    os.value=" ";
}
function del(){
    os.value=os.value.slice(0,-1);
}
