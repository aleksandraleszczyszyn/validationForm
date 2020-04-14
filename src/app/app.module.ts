import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormWithValidationComponent } from './form-with-validation/form-with-validation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatSpinner, MatDialog, MatDialogModule} from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { SpinnerService } from './services/spinner.service';
import { CountriesService } from './services/countries.service';

@NgModule({
  declarations: [
    FormWithValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatDialogModule
  ],
  providers: [SpinnerService, CountriesService],
  bootstrap: [FormWithValidationComponent],
  entryComponents: [MatSpinner]
})
export class AppModule { }
