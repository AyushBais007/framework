import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import MENUS from '../../../../assets/menu.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  public mainmenu: any = [];
  selectedPath: any;
  public role_id: any;
  public emp_name: any;
  public posting_place: any;

  constructor( private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
     this.mainmenu = MENUS[7];
    // this.emp_name = this.auths.currentUser.emp_name;
    // this.role_id = this.auths.currentUser.role_id;
    // if(this.role_id == 5){
    //   this.posting_place = this.auths.currentUser.posting_place;
    // }
  }

///implement for passwordupdate 
  openChangePasswordForm(){  
  }

  toggleSideBar(){
    if(window.innerWidth < 1024){
      this.sidenav.emit();
    }
  }

}
