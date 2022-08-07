import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isMenuOpened: boolean = false;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public emp_name: any;
  public role_id: any;
  public posting_place: any;
 // constructor(private auths: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.emp_name = this.auths.currentUser.emp_name;
    // this.role_id = this.auths.currentUser.role_id;
    // if(this.role_id == 5){
    //   this.posting_place = this.auths.currentUser.posting_place;
    // }
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.isShowSidebar.emit(this.isMenuOpened);
  }

  // public signOut(): void {
  //   // this.userService.signOut();

  //   // this.router.navigate([this.routers.LOGIN]);
  // }

  public signOutEmit(): void {
    // this.signOut.emit();
    // this.auths.logout();
  }

  openChangePasswordForm(){
  //   const dialogRef = this.dialog.open(LoginPasswordUpdateComponent, {
  //     disableClose: true,
  //     data: {formType: 'change-password'}
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     location.reload();
  //   });
   }

}
