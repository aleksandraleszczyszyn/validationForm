import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { SpinnerService } from '../services/spinner.service';
import { Country } from '../models/country';
import { CountriesService } from '../services/countries.service';
import { City } from '../models/City';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-form-with-validation',
  templateUrl: './form-with-validation.component.html',
  styleUrls: ['./form-with-validation.component.css']
})
export class FormWithValidationComponent implements OnInit {

  @ViewChild('dialogRef', null) dialogRef: TemplateRef<any>;

  public form: FormGroup;
  public isLoading: boolean;
  public countries: Country[] = [];
  public cities: City[] = [];

  private readonly startDateLabel = 'startDate';
  private readonly endDateLabel = 'endDate';
  private readonly countryLabel = 'country';
  private readonly cityLabel = 'city';

  constructor(
    private spinnerService: SpinnerService,
    private countriesService: CountriesService,
    private dialog: MatDialog) { }

    get startDate() { return this.form.get(this.startDateLabel); }
    get endDate() { return this.form.get(this.endDateLabel); }
    get country() { return this.form.get(this.countryLabel); }
    get city() { return this.form.get(this.cityLabel); }

  ngOnInit() {
    this.buildForm();
    this.loadCountries();
  }

  private loadCountries(): void {
    this.countries = this.countriesService.getCountries();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl(''),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    });
  }

  public onSubmit(): void {
    this.startLoading();
    setTimeout(_ => {
      this.stopLoading();
      this.openDialog();
    }, 5000);
  }

  private startLoading(): void {
    this.spinnerService.startSpinning();
  }

  private stopLoading(): void {
    this.spinnerService.stopSpinning();
  }

  public onChangeCountry(countryName: string) {
    this.cities = this.countriesService.getCitiesByCountryName(countryName);
  }

  private openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(this.dialogRef, dialogConfig);
  }
}
