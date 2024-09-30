import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {

  public peso: number | undefined; 
  public altura: number | undefined; 
  public resultImc: number | undefined; 
  public situacao: string = "";

  calcularImc() {
    if (this.altura && this.peso) {
      this.resultImc = this.peso / (this.altura * this.altura);

      if (this.resultImc < 18.5) {
        this.situacao = "Abaixo do peso"
      }
      if (this.resultImc > 18.5 && this.resultImc < 24.9) {
        this.situacao = "Peso normal";
      }
      if (this.resultImc >= 25 && this.resultImc <= 29) {
        this.situacao = "Sobrepeso";
      }
      if (this.resultImc >= 30) {
        this.situacao = "Obesidade";
      }
    }
      
  }

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sua situação',
      message: this.situacao,
      buttons: ['Fechar'],
    });

    await alert.present();
  }

  mensagem() {
    this.presentAlert();
  }
}
  

