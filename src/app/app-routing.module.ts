import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guard/authGuard.guard';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent,
  },
  {
    path: '', component: WeatherComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
