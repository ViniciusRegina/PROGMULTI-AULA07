import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { ClienteList, Cliente } from '../../model/cliente';

@Injectable()
export class ClienteProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(cliente: Cliente) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, cliente);
  }

  public update(key: string, cliente: Cliente) {
    return this.save(key, cliente);
  }

  private save(key: string, cliente: Cliente) {
    return this.storage.set(key, cliente);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let clientes: ClienteList[] = [];

    return this.storage.forEach((value: Cliente, key: string, iterationNumber: Number) => {
      let cliente = new ClienteList();
      cliente.key = key;
      cliente.cliente = value;
      clientes.push(cliente);
    })
      .then(() => {
        return Promise.resolve(clientes);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}