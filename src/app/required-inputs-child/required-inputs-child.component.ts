import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-required-inputs-child',
  template: `Task: {{task}}`,
  styleUrls: ['./required-inputs-child.component.scss']
})
export class RequiredInputsChildComponent {

  @Input({ required: true }) task:string;
  //@Input({ required: true }) name: string;

}
