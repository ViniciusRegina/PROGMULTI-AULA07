import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExibirClientePage } from './exibir-cliente';

@NgModule({
  declarations: [
    ExibirClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ExibirClientePage),
  ],
})
export class ExibirClientePageModule {}
