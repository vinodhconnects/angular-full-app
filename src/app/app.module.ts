import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactBoxComponent } from './pages/contacts/contact-box/contact-box.component';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { ReviewBoxComponent } from './pages/reviews/review-box/review-box.component';
import { ServiceDetailDirective } from './directives/service-detail.directive';
import { QuoteitPipe } from './pipes/quoteit.pipe';
import { FormsModule } from '@angular/forms';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { ReviewFormComponent } from './pages/reviews/review-form/review-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    ProjectsComponent,
    ReviewsComponent,
    ContactsComponent,
    ContactBoxComponent,
    ServiceBoxComponent,
    DetailsComponent,
    ReviewBoxComponent,
    ServiceDetailDirective,
    QuoteitPipe,
    TypefilterPipe,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
