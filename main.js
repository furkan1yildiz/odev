function tasarım(){
document.getElementsByTagName('body')[0].innerHTML = '<div class="buyukdiv">\
<input id="arama" type="text" value=""\>\
<button onclick="temizle()" class="butonlarilk"> ON-C \
<button onclick="temizle()" class="butonlar"> CE \
<button class="butonlar"> MR \
<button class="butonlar"> M-\
<button class="butonlar"> M+\
<button onclick="yaz7()" class="butonlarilk"> 7 \
<button onclick="yaz8()" class="butonlar"> 8 \
<button onclick="yaz9()" class="butonlar"> 9\
<button onclick="yuzde()" class="butonlar"> %\
<button onclick="kok()" class="butonlar"> KOK \
<button onclick="yaz4()" class="butonlarilk"> 4 \
<button onclick="yaz5()" class="butonlar"> 5 \
<button onclick="yaz6()" class="butonlar">6 \
<button onclick="carpma()" class="butonlar">X\
<button onclick="bolme()" class="butonlar">/\
<button onclick="yaz1()" class="butonlarilk">1  \
<button onclick="yaz2()" class="butonlar">  2\
<button onclick="yaz3()" class="butonlar"> 3\
<button onclick="cıkarma()" class="butonlar">-\
<button onclick="hesapla()" class="butonlarenter"> =\
<button onclick="yaz0()" class="altbutonlarilk">0  \
<button class="altbutonlar"> . \
<button onclick="toplama()" class="altbutonlar"> +  \
<button onclick="areks()" class="altbutonlar"> +/-  \
<\div>'}
function yaz1(){
   document.getElementById('arama').value=document.getElementById('arama').value+1;
}

function yaz2(){
  document.getElementById('arama').value=document.getElementById('arama').value+2;
}
function yaz3(){
  document.getElementById('arama').value=document.getElementById('arama').value+3;
}
function yaz4(){
  document.getElementById('arama').value=document.getElementById('arama').value+4;
}
function yaz5(){
  document.getElementById('arama').value=document.getElementById('arama').value+5;
}
function yaz6(){
  document.getElementById('arama').value=document.getElementById('arama').value+6;
}
function yaz7(){
  document.getElementById('arama').value=document.getElementById('arama').value+7;
}
function yaz8(){
  document.getElementById('arama').value=document.getElementById('arama').value+8;
}
function yaz9(){
  document.getElementById('arama').value=document.getElementById('arama').value+9;
}
function yaz0(){
  document.getElementById('arama').value=document.getElementById('arama').value+0;
}

var sayı1=0;
var sayı2 =0;
var sayac=0;
var toplam=0;
var a;
function toplama(deger1,deger2){
  if(sayac==0){
  sayı1=document.getElementById('arama').value;
  sayac=sayac+1;
  document.getElementById('arama').value=null;
deger1=sayı1;
}
else if(sayac==1){
sayı2=document.getElementById('arama').value;
sayac=0;
toplam=parseInt(sayı1) +parseInt(sayı2);
document.getElementById('arama').value=toplam;
deger2=sayı2;
}
 



}
function cıkarma(){
    if(sayac==0){
    sayı1=document.getElementById('arama').value;
    sayac=sayac+1;
    document.getElementById('arama').value=null;
   }
  else if(sayac==1){
  sayı2=document.getElementById('arama').value;
  sayac=0;
  toplam=parseInt(sayı1) - parseInt(sayı2);
  document.getElementById('arama').value=toplam;
   }
    
}
function carpma(){
  if(sayac==0){
    sayı1=document.getElementById('arama').value;
    sayac=sayac+1;
    document.getElementById('arama').value=null;
   }
  else if(sayac==1){
  sayı2=document.getElementById('arama').value;
  sayac=0;
  toplam=parseInt(sayı1) * parseInt(sayı2);
  document.getElementById('arama').value=toplam;
   }
   
}function bolme(){
  if(sayac==0){
    sayı1=document.getElementById('arama').value;
    sayac=sayac+1;
    document.getElementById('arama').value=null;
   }
  else if(sayac==1){
  sayı2=document.getElementById('arama').value;
  sayac=0;
  toplam=parseInt(sayı1) / parseInt(sayı2);
  document.getElementById('arama').value=toplam;
   }
  
}
function temizle(){
  document.getElementById("arama").value=null;
}
function yuzde(){
  sayı1=document.getElementById('arama').value;
  toplam=parseInt(sayı1)/100;
  document.getElementById('arama').value=toplam;
}
function kok(){
  sayı1=document.getElementById('arama').value;
  toplam=Math.sqrt(sayı1);
  document.getElementById('arama').value=toplam;

}
function areks(){

  sayı1=document.getElementById('arama').value;
  if(sayı1>0){
    toplam=sayı1*-1;
    document.getElementById('arama').value=toplam;
  }
  else if(sayı1<0){
    toplam=sayı1*-1;
    document.getElementById('arama').value=toplam;

  }
  
}
function hesapla(){
 
  alert(deger1);
 

}


