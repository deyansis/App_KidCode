import { Component } from '@angular/core';
import { Location } from '@angular/common'; // Importa Location para la navegación
import { NavController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  error: string = '';
  isLoading: boolean = false;

  constructor(private location: Location, private navController: NavController) { }

  handleSubmit() {
    this.error = '';

    if (!this.email || !this.password) {
      this.error = 'Por favor, complete todos los campos.';
      return;
    }

    this.isLoading = true;

    // Simular una llamada de autenticación
    setTimeout(() => {
      this.isLoading = false;
      console.log("Iniciando sesión con:", { email: this.email, password: this.password });
      this.navController.navigateForward('/welcome.page'); // Redirige a la página Welcome
    }, 2000);
  }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }
}
