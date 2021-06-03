import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
  
})
export class SideNavComponent implements AfterViewInit {
  title = 'udon-front-sidenav';

  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('sideNav') sideNav!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  ngAfterViewInit() {
    let menuBtn = this.menuBtn.nativeElement;
    let sideNav = this.sideNav.nativeElement;
    let menu = this.menu.nativeElement;

    sideNav.style.right = "-250px";
    menuBtn.onclick = () => {
      if(sideNav.style.right == "-250px"){
          sideNav.style.right = "0";
          menu.src = "assets/images/close.png";
      } else {
          sideNav.style.right = "-250px";
          menu.src = "assets/images/menu.png";
      }
    }
  }
}