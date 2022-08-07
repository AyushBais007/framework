import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  public isShowSidebar: boolean = false;
  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if (event.target.innerWidth < 1024) {
      this.sidenav.close();
    }else{
      this.sidenav.open();
    }
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.isShowSidebar = !this.mobileQuery.matches;
    this.showScroll = false;
  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  showScroll: boolean = false;
  showScrollHeight = 200;
  hideScrollHeight = 50;
  event:any;
  showScrollProgressBar:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event:any=null){
    if(event){
      this.showScroll = false;
      let scrollHeight = event.target.scrollTop || 0;
      this.event = event.target;
      if(scrollHeight > this.showScrollHeight){
        this.showScroll = true;
      }else{
        this.showScroll = false;
      }
      if(scrollHeight > 0){
        this.showScrollProgressBar = true;
        this.getProgressValue(event.target);
      }else{
        this.showScrollProgressBar = false;
      }
    }
  }

  scrollToTop(){
    // this.event.scrollTo(0,0);
    if(this.event){
      this.event.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }else{
      document.querySelector('.layout-content')!.scrollTop = 0;
    }
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
    this.sidenav.close();
    this.showScroll = false;
  }

  progressValue: any;

  getProgressValue(el:any=null) {
    if(el){
      const winScroll = el.scrollTop || 0;
      console.log(el.clientHeight,el.scrollHeight);
      const height = el.scrollHeight - el.clientHeight;
      this.progressValue = Math.round((winScroll / height) * 100);
    }else{
      this.progressValue = 0;
    }
  }
}
