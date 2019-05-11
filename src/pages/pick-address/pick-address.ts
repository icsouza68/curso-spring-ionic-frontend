import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Flores",
        numero: "300",
        complemento: "Apto 203",
        bairro: "Jardim",
        cep: "38220634",
        cidade: {
            id: "1",
            nome: "Uberlândia",
            estado: {
                id: "1",
                nome: "Minas Gerais"
            }
        }
      },
      {
        id: "2",
        logradouro: "Avenida Matos",
        numero: "105",
        complemento: "Sala 3B",
        bairro: "Centro",
        cep: "38772235",
        cidade: {
            id: "2",
            nome: "São Paulo",
            estado: {
                id: "2",
                nome: "São Paulo"
            }
        }
      }
    ]
  }
}
