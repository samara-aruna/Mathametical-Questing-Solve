import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoplanarComponent } from './coplanar/coplanar.component';
import { VelosityComponent } from './velosity/velosity.component';
import { TringleComponent } from './tringle/tringle.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'coplanar',component:CoplanarComponent
  },
  {
    path:'velosity',component:VelosityComponent
  },
  {
    path:'tringle',component:TringleComponent
  },
  {
    path:'component',component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
