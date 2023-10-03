import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequiredInputsParentComponent } from './required-inputs-parent/required-inputs-parent.component';
import { RequiredInputsChildComponent } from './required-inputs-child/required-inputs-child.component';
import { TakeUntilComponent } from './take-until/take-until.component';

@NgModule({
  declarations: [
    AppComponent,
    RequiredInputsParentComponent,
    RequiredInputsChildComponent,
    TakeUntilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
