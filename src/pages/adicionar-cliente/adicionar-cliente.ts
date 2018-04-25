import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
  selector: 'page-adicionar-cliente',
  templateUrl: 'adicionar-cliente.html',
})
export class AdicionarClientePage {
  model: Cliente;
  key: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clienteProvider: ClienteProvider, private toast: ToastController) {
    if (this.navParams.data.cliente && this.navParams.data.key) {
      this.model = this.navParams.data.cliente;
      this.key =  this.navParams.data.key;
    } else {
      this.model = new Cliente();
    }
  }

  salvar() {
    this.salvarCliente()
      .then(() => {
        this.toast.create({ message: 'Cliente salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o cliente.', duration: 3000, position: 'botton' }).present();
      });
  }

  private salvarCliente() {
    if (this.key) {
      return this.clienteProvider.update(this.key, this.model);
    } else {
      return this.clienteProvider.insert(this.model);
    }
  }

}