import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {

  @Input()
  name: string;

  @Input()
  loading: boolean;

}
