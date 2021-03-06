import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';

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

  bucketUrl: string = API_CONFIG.bucketBaseUrl;
  items: CategoriaDTO[];
  
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
      this.items = response;
    },
    error => {});
  }

  showProdutos(categoria_id : string) {
    // Vai chamar uma outra página passando um parâmetro, que é o codigo da categoria
    // Notar que no objeto {} do parâmetro, o primeiro categoria_id é só uma variável, 
    // poderia ter um outro nome, mas o segundo categoria_id é o parâmetro que chega na
    // função showProdutos
    this.navCtrl.push('ProdutosPage', {categoria_id: categoria_id});
  }
}
