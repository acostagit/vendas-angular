import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { rootRouterConfig } from './app.routes';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ContatoComponent,
    SobreComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
