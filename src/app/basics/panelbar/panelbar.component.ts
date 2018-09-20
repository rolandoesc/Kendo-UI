import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-panelbar',
  templateUrl: './panelbar.component.html',
  styleUrls: ['./panelbar.component.css']
})
export class PanelbarComponent implements OnInit {
  users: User[];
  private baseImageUrl: string = "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

  private imageUrl(imageName: string) :string {
      return this.baseImageUrl + imageName + ".jpg";
  }
  public onTabSelect(e) {
    console.log(e);
  }
  constructor(private service: DataService) {
    this.service.getUsers().subscribe(
      (data: any) => this.users = data,
      (error: any) => console.log(error)
    );
   }

  ngOnInit() {
  }
  

}
