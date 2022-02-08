import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faEllipsisH, faUsers, faUserFriends, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { DarkAreaService } from 'src/app/services/dark-area.service';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  faEllipsisH = faEllipsisH;
  faUsers = faUsers;
  faFriends = faUserFriends;
  faArrowAltCircleRight = faArrowAltCircleRight;
  toggleNavsubscription: Subscription;
  toggleNav: boolean = false;

  @ViewChild('blocker')
  blocker!: ElementRef<HTMLInputElement>;

  @ViewChild('container')
  container!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2, private router: Router, private elem: ElementRef, 
    private darkAreaService: DarkAreaService, private navToggleService: NavbarToggleService) {
    this.toggleNavsubscription = this.navToggleService.getClickEvent().subscribe((value) => {
      this.handleNavToggle(value);
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.toggleNavsubscription.unsubscribe();
  }

  showGroupMenu(menu: HTMLElement, ellipse: HTMLElement) {
    menu.classList.add("open");
    this.renderer.addClass(this.blocker.nativeElement, "activate");
    ellipse.classList.add("clicked");
    console.log(event);

  }

  hideGroupMenu() {
    this.renderer.removeClass(this.blocker.nativeElement, "activate");
    var elements = this.elem.nativeElement.querySelectorAll('.group-menu');
    for(let i=0;i<elements.length;i++) {
      elements[i].classList.remove('open');
    }

    var ellipsis = this.elem.nativeElement.querySelectorAll('.btn-group-item');
    for(let i=0;i<elements.length;i++) {
      ellipsis[i].classList.remove('clicked');
      }
  };

  showAddUser(el: HTMLElement) {
    el.classList.add("open");
    this.renderer.addClass(this.blocker.nativeElement, "activate-darker");
    this.darkAreaService.sendClickEvent("activate");
  }

  hideAddUser(el: HTMLElement) {
    el.classList.remove("open");
    this.renderer.removeClass(this.blocker.nativeElement, "activate-darker");
    this.darkAreaService.sendClickEvent('disactivate');
  }

  navigateToChannel(id: number) {
    this.router.navigate(['/home', 'groups', 'channel', id])
  }

  handleNavToggle(value: string) {
    if (value == "shrink") {
      this.toggleNav = true;
    }
    else if(value == "increase") {
      this.toggleNav = false;
    }
  }
}
