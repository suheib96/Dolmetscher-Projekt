import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LanguageComponent } from './language/language.component';
import { ImpressumComponent } from './impressum/impressum.component';


const routes: Routes = [
  { path : '', redirectTo: "home", pathMatch: "full"}, //-gesamte URL-Pfad muss übereinstimmen //Algorithmus wird für Routenabgleich verwendet
  { path : 'home', component: HomeComponent},
  { path : 'language', component: LanguageComponent},
  { path : 'impressum', component: ImpressumComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
