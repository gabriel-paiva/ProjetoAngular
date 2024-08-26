import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})



export class HomePage {
  public notaA: number | undefined; // public, para poder ser acessada no index
  public notaB: number | undefined; // a variável pode ser um number ou indefinido
  public media: number | undefined;
  public situacao: string = "";
  calcularMedia() {
    if (this.notaA && this.notaB) {
      this.media = (this.notaA + this.notaB) / 2;
      this.situacao = this.media >= 7 ? 'Aprovado' : 'Reprovado';
    }
  }

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sua situação',
      message: 'Você foi ' + this.situacao,
      buttons: ['Fechar'],
    });

    await alert.present();
  }

  mensagem() {
    this.presentAlert();
  }
}



