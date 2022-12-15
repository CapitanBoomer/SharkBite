import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-menu-dueno',
  templateUrl: './menu-dueno.page.html',
  styleUrls: ['./menu-dueno.page.scss'],
})
export class MenuDuenoPage implements OnInit {
puerta: boolean = false;
alarma: boolean = false;
luz: boolean = false;
constructor(private alertController: AlertController) {}

  ngOnInit() {
  }
  puertaabierta(event:Event){
  console.log(this.puerta);
  if(this.puerta== true){this.presentAlert()};
}

async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Aviso',
    subHeader: 'Estado de la puerta',
    message: 'puerta cerrada',
    buttons: ['OK'],
  });



  await alert.present();
}
}
