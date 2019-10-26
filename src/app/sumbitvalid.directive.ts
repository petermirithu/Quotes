import { Directive, Input, Output,EventEmitter, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appSumbitvalid]'
})
export class SumbitvalidDirective {
@Input('appSumbitvalid')formRef: FormGroup;
@Output() valid = new EventEmitter<void>();
@HostListener("'click")
handleClick() {
  this.markFieldsAsDirty();
  this.emitIfValid();
}
private markFieldsAsDirty(){
  Object.keys(this.formRef.controls)
  .forEach(fieldName =>
    this.formRef.controls[fieldName].markAsDirty());
}
private emitIfValid() {
  if (this.formRef.valid) {
    this.valid.emit();
  }
}
  constructor() { }

}
