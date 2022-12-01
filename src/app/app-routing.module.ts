import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'registro-usuario',
    loadChildren: () => import('./login/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./login/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu-dueno',
    loadChildren: () => import('./menu-dueno/menu-dueno.module').then( m => m.MenuDuenoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
