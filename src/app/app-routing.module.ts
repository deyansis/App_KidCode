import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'presentation',  // Cambia a 'presentation' como ruta predeterminada
    pathMatch: 'full'
  },
  {
    path: 'presentation',
    loadChildren: () => import('src/app/presentacion/presentation.module').then(m => m.PresentationPageModule)

  },
  {
    path: 'login',
    loadChildren: () => import('src/app/home/login.modulo').then(m => m.LoginPageModule) // Asegúrate de que la ruta sea correcta
  },

  {
    path: 'welcome',
    loadChildren: () => import('src/app/welcome/welcome.module').then(m => m.WelcomePageModule) // Asegúrate de que la ruta sea correcta
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) // Carga el módulo de pestañas
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
