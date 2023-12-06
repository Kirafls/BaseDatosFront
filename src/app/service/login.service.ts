import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService  implements CanActivate {

  constructor(private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Lógica para determinar si se permite la activación de la ruta
    // Devuelve true si la ruta se puede activar, o false si no se puede y se redirige a otra ruta.
    // Puedes verificar el estado de autenticación aquí.    
    const sesion = localStorage.getItem('sesion');
    
    if (sesion === 'true') {
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
