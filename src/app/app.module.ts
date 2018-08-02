import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { CardValidatorComponent } from './components/card-validator/card-validator.component';
import { CardNumberFormatDirective } from './directives/card-number-format.directive';
import { OnlyNumberDirective } from './directives/only-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardValidatorComponent,
    CardNumberFormatDirective,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
