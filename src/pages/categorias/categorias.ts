import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    /** 
     * como o http é assíncrono, o método subscribe é necessário para que a aplicação aguarde o 
     * resposta do que foi chamado
     * 
     * response => {console.log(response)} é uma função anônima, onde response é o tipo do retorno
     * e console.log é a função a ser executada. Ela será executada em caso de sucesso da resposta
     * 
     * error => será executado em caso de resposta com erro
     * 
     */
    this.categoriaService.findAll().subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
    
  }

}
