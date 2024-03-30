//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "Unit2.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TForm2 *Form2;
//---------------------------------------------------------------------------
__fastcall TForm2::TForm2(TComponent* Owner)
	: TForm(Owner)
{
}
//---------------------------------------------------------------------------
//sumas los digitos de un vector
//brian nahuel zalazar villca
//219060193
int sumarV(TStringGrid *v,Byte n){
int s;
	if (n==0){ //caso base
		s=0;
	}else{//caso general
		s=sumarV(v,n-1);
		s=s+StrToInt(v->Cells[n-1][0]);
	}
	return s;
}
void __fastcall TForm2::sumardigitos1Click(TObject *Sender)
{
	   Edit2->Text=sumarV(StringGrid1,StrToInt(Edit1->Text));
}
//---------------------------------------------------------------------------
//cantidad de numeros pares del vector
byte cantPar(TStringGrid *v,byte n){
byte c;
if (n==0)
	c=0;
else{
	byte d=StrToInt(v->Cells[n-1][0]);
	c=cantPar(v,n-1);
	if (d%2==0)
		  c++;
}
return c;
}

void __fastcall TForm2::cantidadnumerospares1Click(TObject *Sender)
{
		byte n=StringGrid1->ColCount;
		Edit3->Text=StrToInt(cantPar(StringGrid1,n));
}
//---------------------------------------------------------------------------
//eliminar un numero
//552654     5
//264
void Recorrer(TStringGrid *v,byte a,byte b){
byte n=b-a+1;
if (n>0){
	v->Cells[a][0]= v->Cells[a+1][0];
	Recorrer(v,a+1,b);
}
}
void EliminarX(TStringGrid *v,byte a,byte b,byte x){
byte n=b-a+1;
if (n>0){
	byte d=StrToInt(v->Cells[a][0]);
	EliminarX(v,a+1,b,x);
	if (d==x){
		Recorrer(v,a,b);
		v->ColCount --;
	}
}
}
void __fastcall TForm2::eliminarx1Click(TObject *Sender)
{
   Recorrer(StringGrid1,StrToInt(Edit1->Text),StrToInt(Edit2->Text));
}
void __fastcall TForm2::eliminarunnumero1Click(TObject *Sender)
{
   byte b=StringGrid1->ColCount-1;
   EliminarX(StringGrid1,0,b,StrToInt(Edit1->Text));
}
//---------------------------------------------------------------------------
// 125450
// 12545 0
// 1254 0 5
 void burbojear(TStringGrid *v,byte n){
 if (n>1){ //caso general
	int m=StrToInt(v->Cells[n-1][0]);
	burbojear(v,n-1);
	if (m < (StrToInt(v->Cells[n-2][0])) ){
				String aux=v->Cells[n-1][0];
				v->Cells[n-1][0]=v->Cells[n-2][0];
				v->Cells[n-2][0]=aux;
	}
 }
 }
void __fastcall TForm2::moveralfinal1Click(TObject *Sender)
{
   burbojear(StringGrid1,StrToInt(Edit1->Text));
}
//---------------------------------------------------------------------------
//ordenar un vector
void ordenar(TStringGrid *v,byte n){
  if (n>1) {
		 burbojear(v,n);
		 ordenar(v,n-1);
  }
}
void __fastcall TForm2::ordenar1Click(TObject *Sender)
{
	  ordenar(StringGrid1,StrToInt(Edit1->Text));
}
//---------------------------------------------------------------------------
void cargarRND(TStringGrid *v,byte n){
if (n>0) {
		cargarRND(v,n-1);
		v->Cells[n-1][0]=Random(10);
}
}

void __fastcall TForm2::Button1Click(TObject *Sender)
{
	   cargarRND(StringGrid1,StrToInt(Edit1->Text));
	   StringGrid1->ColCount = StrToInt(Edit1->Text);
}
void __fastcall TForm2::cargarRND1Click(TObject *Sender)
{
		 cargarRND(StringGrid1,StrToInt(Edit1->Text));
		 StringGrid1->ColCount = StrToInt(Edit1->Text);
}
//---------------------------------------------------------------------------
//invertir un vector
// 124 5 484
// 123 456
void invertir(TStringGrid *v,byte a,byte b){
byte n=b-a+1;
 if (n>0) {
		if ((a!=b)&&(a<b)){
		invertir(v,a+1,b-1);
				String aux=v->Cells[a][0];
				v->Cells[a][0]=v->Cells[b][0];
				v->Cells[b][0]=aux;
	  }
 }
}
void __fastcall TForm2::invertir1Click(TObject *Sender)
{  byte a=(StrToInt(Edit1->Text));
   byte b=(StrToInt(Edit2->Text));
   invertir(StringGrid1,a,b);
}
//---------------------------------------------------------------------------



void __fastcall TForm2::recorrer1Click(TObject *Sender)
{
		//StringGrid1->ColCount=StrToInt(Edit2->Text);
	//   recorrer(StringGrid1,StrToInt(Edit1->Text));
}
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------

//------------------------------------------------------------------------------
//cargar serie
//7 12 20 31 45
//0 5  8  11 14
byte serie(byte n,byte &k){
byte s;
   if (n==1) {
	   s=7;
   }else{
	   s=serie(n-1,k);
	   k=k+3;
	   s=s+k;
   }
   return s;
}
void cargarVEC(TStringGrid *v,byte n){
byte k=2;
   if (n>0) {
		  cargarVEC(v,n-1);
		  byte d=serie(n,k);
		  v->Cells[n-1][0]=d;
   }
}
void __fastcall TForm2::cargarserie1Click(TObject *Sender)
{
	 cargarVEC(StringGrid1,StrToInt(Edit1->Text));
}
//---------------------------------------------------------------------------
//dado 2 vectores ordenarlos en otro vector
void unir2VEc(TStringGrid *v,TStringGrid *v3,byte n,byte &n3){
 if (n>0) {
		unir2VEc(v,v3,n-1,n3);
		n3++;
		v3->Cells[n3-1][0]=v->Cells[n-1][0];
 }
}
void ordenar2VEC(TStringGrid *v3,byte n){
  if (n>1) {
	   burbojear(v3,n);
	   ordenar2VEC(v3,n-1);
  }
}

void __fastcall TForm2::ordenar2vec1Click(TObject *Sender)
{
   byte n3=0;
   unir2VEc(StringGrid1,StringGrid3,(StrToInt(Edit1->Text)),n3);
   unir2VEc(StringGrid2,StringGrid3,(StrToInt(Edit2->Text)),n3);
   StringGrid3->ColCount=n3;
   ordenar(StringGrid3,StringGrid3->ColCount);

}
//---------------------------------------------------------------------------
//verificar si un vector es palindromo
bool palindromo(TStringGrid *v,byte a,byte b,byte n){
 bool p=true;
 if (a<=(n/2)) {
	p= palindromo(v,a+1,b-1,n);
	if (p!=false) {
			if ((v->Cells[a][0])==(v->Cells[b][0])){
			  p=true;
			}else{
			  p=false;
			}
}
 }
 return p;
}

void __fastcall TForm2::verifpalindormo1Click(TObject *Sender)
{
	Edit3->Text=BoolToStr(palindromo(StringGrid1,0,(StrToInt(Edit1->Text))-1,StrToInt(Edit1->Text)));
}
//---------------------------------------------------------------------------
//calculas el factorial de un vector
int factorial(byte n){
  int f;
   if (n==0)
		f=1;
   else
	   f=n*factorial(n-1);
   return f;
}

void factorialvector(TStringGrid *v,byte n){
 if (n>0){
	 int d=factorial(StrToInt(v->Cells[n-1][0]));
	 v->Cells[n-1][0]=d;
	 factorialvector(v,n-1);
 }
}
void __fastcall TForm2::factorial1Click(TObject *Sender)
{
	  factorialvector(StringGrid1,(StrToInt(Edit1->Text)));
	 // Edit2->Text= StrToInt(factorial(StrToInt(Edit1->Text)));
}
//---------------------------------------------------------------------------
//colocar una cadena en vectores
bool verifVOl(char x){
	String z="aeiouAEIOU";
	return z.Pos(x)>0;
}
void eliminarvocal(String &s){
if (s=="") {
   s=s ;
}else{
	  byte p=s.Length();
	  char z=s[p];
	  s.Delete(p,1);
	  eliminarvocal(s);
	  if (verifVOl(z)==false) {
	   s=s+z;
	  }
  }
}
//brian nahuel zalazar villca
//registro 219060193
void InvertirString(String &x){  //como funcion
byte l=x.Length();
String s;
   if (l<2) {
	s=x;
   }
	   else{
	   char z=x[1];
	   x.Delete(1,1);
	   InvertirString(x);
	   x=x+z;
	   }
}
bool veriflet(char x){
	String z="qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
	return z.Pos(x)>0;
}
void insertarcad(TStringGrid *v,String &s,byte n,byte t,byte r){
if (t >= n){
		   char z=s[1];
		   if (veriflet(z)==true) {
				v->Cells[r][0]=z;
				r++;
		   }
		   s.Delete(1,1);
		   insertarcad(v,s,n+1,t,r);
}
}

void __fastcall TForm2::cadenaenbec1Click(TObject *Sender)
{
  String s=Edit1->Text;
  InvertirString(s);
  StringGrid1->ColCount=s.Length();
  insertarcad(StringGrid1,s,1,s.Length(),0);

}
//--------------------------------------------------------------------------
//cantidad de digitos
byte cant(int n){
byte c;
if (n==0)
	   c=0;
else{
   n=n/10;
   c=cant(n);
   c++;
}
	return c;
}
//-----------------------------------------------------------------------------
void invertir(int &n){
 if (n>0){
   byte d=n%10;
   n=n/10;
   invertir(n);
   n=n*10+d ;
}
}
void  insertvec(TStringGrid *v,byte n,int k){
	 if (k!=0) {
			byte d=k%100;
			k=k/100;
			v->Cells[n][0]=d;
			insertvec(v,n+1,k);
	 }
}

void __fastcall TForm2::vectoracad1Click(TObject *Sender)
{
	int k=StrToInt(Edit1->Text);//numero
   //	insertvec(StringGrid1,0,k);
	invertir(k);
	Edit2->Text=StrToInt(k);
}
//---------------------------------------------------------------------------
//brian nahuel zalazar villca
//registro=219060193
// de cadena a vector
void cadavec(TStringGrid *v,byte n,AnsiString x){
byte c=x.Length();
if (x>0) {
	  char z=x[c];
	  x.Delete(c,1);
	  cadavec(v,n,x);
	  v->Cells[c-1][0]=z;
}
}
void __fastcall TForm2::decadavecotr1Click(TObject *Sender)
{
  AnsiString m=Edit1->Text;
  byte c=m.Length();
  cadavec(StringGrid1,c,m);
  StringGrid1->ColCount=m.Length();
}
//---------------------------------------------------------------------------
//metodo de margesort
void Burbojear(TStringGrid *v,byte a,byte b){
byte n=b-a+1 ;
 if (n>1){ //caso general
	byte m=StrToInt(v->Cells[n-1][0]);
	Burbojear(v,a,b-1);
	if (m < (StrToInt(v->Cells[n-2][0])) ){
				String aux=v->Cells[n-1][0];
				v->Cells[n-1][0]=v->Cells[n-2][0];
				v->Cells[n-2][0]=aux;
	}
 }
 }
void Ordenar(TStringGrid *v,byte a,byte b){
byte n=b-a+1;
if (n>0){
	Burbojear(v,a,b);
	Ordenar(v,a,b-1);
}
}
void margesort(TStringGrid *v,byte n){
if (n>0){
	margesort(v,n/2);
	Ordenar(v,0,n/2);
	Ordenar(v,n/2,n);
    }
}
void __fastcall TForm2::margesort1Click(TObject *Sender)
{
  margesort(StringGrid1,StringGrid1->ColCount-1);
}

void __fastcall TForm2::BUrbojear1Click(TObject *Sender)
{
 Burbojear(StringGrid1,0,StringGrid1->ColCount-1);
}

void __fastcall TForm2::ordenar2Click(TObject *Sender)
{
 Ordenar(StringGrid1,0,StringGrid1->ColCount-1);
}
//---------------------------------------------------------------------------
void Recorrer1(TStringGrid *v,byte a,byte b,byte d){
byte n=b-a+1;
if (n>0){
	  v->Cells [a+1][0]=v->Cells[a][0];
	  Recorrer1(v,a+1,b,d);
}
}
void Insertion2(TStringGrid *v,byte a,byte b,byte &d){
byte n=b-a+1;
if (n>0) {
	   byte z=StrToInt(v->Cells[a][0]);
	   Insertion2(v,a+1,b,d);
	   if (z<d){
			Recorrer1(v,a,b,d);
			v->Cells[b+1][0]=StrToInt(d);
			 d=0;
	   }
}
}

void insertionsort(TStringGrid *v,byte a,byte b){
byte n=b-a+1;
if (n>0){
	byte d=StrToInt(v->Cells[n-1][0]);
	insertionsort(v,a+1,b);
	Insertion2(v,a,b,d);
}
}
void __fastcall TForm2::insertionSort1Click(TObject *Sender)
{
 byte m=StringGrid1->ColCount-1;
 insertionsort(StringGrid1,0,m);
}
//---------------------------------------------------------------------------
//insertar x en una posicion
//65515   x=9 p=2
//65 2515
void anadir(TStringGrid *v,byte p,byte nu){
if (nu>p) {
  v->Cells[nu][0]=v->Cells[nu-1][0];
  anadir(v,p,nu-1);
}

}
void insertarx(TStringGrid *v,byte n,byte x,byte p,byte nu){
  if (n>0) {
	   if (n-1==p) {
				anadir(v,p,nu);
				v->Cells[p][0]=StrToInt(x);
	   }
	   insertarx(v,n-1,x,p,nu);
  }

}

void __fastcall TForm2::insertarXenunaposicion1Click(TObject *Sender)
{
  byte n=StrToInt(Edit1->Text);
  byte x=StrToInt(Edit2->Text);
  byte p=StrToInt(Edit3->Text);
  insertarx(StringGrid1,n,x,p,n);
   //	anadir(StringGrid1,n,x);
}
