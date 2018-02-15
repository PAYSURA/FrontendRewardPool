import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Product } from '../app/product/product.model';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    products = [
                new Product( 'produkt1', "lorem ipsum", 'img/test.png' ),
                new Product( 'produkt2', "lorem ipsum", 'img/test.png' ),
                new Product( 'produkt3', "lorem ipsum", 'img/test.png' ),
                new Product( 'produkt4', "lorem ipsum", 'img/test.png' ),
                new Product( 'produkt5', "lorem ipsum", 'img/test.png' ),
            ];
    
}
