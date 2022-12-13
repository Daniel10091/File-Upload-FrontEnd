import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  uploadedFiles: any[] = [];
  disabled: Boolean = false;

  name?: string; 

  ngOnInit(): void {
  }

  constructor() { }

  upload() {
    let input = document.createElement('input');

    input.type = 'file';
    input.accept = "image/png, image/jpg, .doc, .docx, .pdf, .zip, .rar";
    input.style.display = 'none';

    document.body.appendChild(input);

    input.click();

    input.onchange = ( e: any ) => {
      this.uploadedFiles.push( e.target.files[0] );
      this.name = e.target.files[0].name;
      console.log(this.uploadedFiles);
    };

    input.remove();

  }
  
  enviar() {
    
  }

}
