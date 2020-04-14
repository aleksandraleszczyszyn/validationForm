import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { MatSpinner } from '@angular/material/progress-spinner';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable()
export class SpinnerService {

  private spinnerRef: OverlayRef;

  constructor(private overlay: Overlay) {
      this.spinnerRef = this.cdkSpinnerCreate();
  }

    public startSpinning() {
        this.spinnerRef.attach(new ComponentPortal(MatSpinner));
    }

  private cdkSpinnerCreate() {
    return this.overlay.create({
           hasBackdrop: true,
           backdropClass: 'dark-backdrop',
           positionStrategy: this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically()
           });
 }

    public stopSpinning() {
        this.spinnerRef.detach() ;
    }
}
