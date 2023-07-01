import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { adminGuard } from './gaurds/admin.guard';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"projects",component: ProjectsComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"reviews",component: ReviewsComponent},
  {path:"home/details/:id",component: DetailsComponent},
  {path:"admin",
  canActivate: [adminGuard],
  loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
