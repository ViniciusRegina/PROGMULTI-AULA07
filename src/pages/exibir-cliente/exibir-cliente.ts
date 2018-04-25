import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteList } from '../../model/cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';

/**
 * Generated class for the AdicionaClientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibir-cliente',
  templateUrl: 'exibir-cliente.html',
})
export class ExibirClientePage {
  clientes: ClienteList[];

  constructor(public navCtrl: NavController, private clienteProvider: ClienteProvider, private toast: ToastController) { }

  ionViewDidEnter() {
    this.clienteProvider.getAll()
      .then((result) => {
        this.clientes = result;
      });
  }

  addContato() {
    this.navCtrl.push('EditarClientePage');
  }

  editarCliente(item: ClienteList) {
    this.navCtrl.push('EditarClientePage', { key: item.key, cliente: item.cliente });
  }

  removerCliente(item: ClienteList) {
    this.clienteProvider.remove(item.key)
      .then(() => {
        // Removendo do array de items
        var index = this.clientes.indexOf(item);
        this.clientes.splice(index, 1);
        this.toast.create({ message: 'Cliente removido.', duration: 3000, position: 'botton' }).present();
      })
  }

}
