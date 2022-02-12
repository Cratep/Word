import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { CosmosPollutionComponent } from './info/cosmos-pollution/cosmos-pollution.component';
import { InfoComponent } from './info/info.component';
import { SputnikComponent } from './info/sputnik/sputnik.component';
import { MainComponent } from './main/main.component';
import { UnsafetyComponent } from './info/unsafety/unsafety.component';


const routes: Routes = [
  {path: "feedback",component:FeedbackComponent},
  {path:"",component:MainComponent},
  {path:"info",component:InfoComponent},
  {path:"sputnik",component:SputnikComponent},
  {path:"cosmos-pollution",component:CosmosPollutionComponent},
  {path:"unsafety",component:UnsafetyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
