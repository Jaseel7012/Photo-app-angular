import { Component } from '@angular/core';
import { ApiPhotoService } from '../api-photo.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent {

constructor(private api:ApiPhotoService){
  api.fetchphoto().subscribe(
    (resp)=>{
      this.data=resp
    }
  )
}

data:any=[]
}
