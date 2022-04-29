import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
   public contadorClique: number =0;
   public nome:string ="";

   public urlImagem: string = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
 
   addClique(){
     this.contadorClique++;
   }

   zerarContador(){
     this.contadorClique = 0;
   }

   KeyUp(event: any){
      this.nome = event.target.value;
   }
}
