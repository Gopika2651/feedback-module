import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import from { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
