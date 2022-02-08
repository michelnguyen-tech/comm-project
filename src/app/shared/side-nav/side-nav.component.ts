import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faUsers, faUserFriends, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { DarkAreaService } from 'src/app/services/dark-area.service';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faUsers = faUsers;
  faFriends = faUserFriends;
  faArrowAltCircleRight = faArrowAltCircleRight;
  isCreateGroup = false;
  isToggle = false;
  clickEventsubscription: Subscription;
  toggleNavsubscription: Subscription;
  
  @ViewChild('groups')
  groups!: ElementRef<HTMLInputElement>;

  @ViewChild('chat')
  chat!: ElementRef<HTMLInputElement>;

  @ViewChild('files')
  files!: ElementRef<HTMLInputElement>;

  @ViewChild('groupmenu')
  groupmenu!: ElementRef<HTMLInputElement>;

  @ViewChild('chatmenu')
  chatmenu!: ElementRef<HTMLInputElement>;

  @ViewChild('blocker')
  blocker!: ElementRef<HTMLInputElement>;

  @ViewChild('blockerside')
  blockerside!: ElementRef<HTMLInputElement>;

  @ViewChild('sidenav')
  sidenav!: ElementRef<HTMLInputElement>;

  @ViewChild('groupitem')
  groupitem!: ElementRef<HTMLInputElement>;

  @ViewChild('chatitem')
  chatitem!: ElementRef<HTMLInputElement>;

  @ViewChild('fileitem')
  fileitem!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2, private router: Router, private darkAreaService: DarkAreaService, private navToggleService: NavbarToggleService) { 
    this.clickEventsubscription = this.darkAreaService.getClickEvent().subscribe((value) => {
      this.handleDarkArea(value)}
    )
    this.toggleNavsubscription = this.navToggleService.getClickEvent().subscribe((value) => {
      this.handleNavToggle(value)
    })
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.onActive(this.groups.nativeElement);
  }

  ngOnDestroy() {
    this.toggleNavsubscription.unsubscribe();
  }

  onActive(el: HTMLElement) {
    console.log(el.id);
    this.renderer.removeClass(this.groups.nativeElement, "list-active");
    this.renderer.removeClass(this.chat.nativeElement, "list-active");
    this.renderer.removeClass(this.files.nativeElement, "list-active");
    el.classList.add("list-active");

    if(el.id == "chat") {
      this.router.navigateByUrl('/home/chat');
    }
    if(el.id == "groups") {
      this.router.navigateByUrl('/home/groups');
    }
    if(el.id == "files") {
      this.router.navigateByUrl('/home/files');
    }
  }

  showGroupMenu(el: HTMLElement) {
    el.classList.add("open");
    this.renderer.addClass(this.blocker.nativeElement, "activate");
  }

  hideGroupMenu(el: HTMLElement) {
    el.classList.remove("open");
    this.renderer.removeClass(this.blocker.nativeElement, "activate");
  }

  showCreateGroup(el: HTMLElement, el2: HTMLElement) {
    el.classList.add("open");
    el2.classList.remove("open");
    this.renderer.addClass(this.blocker.nativeElement, "activate-darker");
  }

  hideCreateGroup(el: HTMLElement) {
    el.classList.remove("open");
    this.renderer.removeClass(this.blocker.nativeElement, "activate-darker");
  }

  showChatUser(el: HTMLElement) {
    el.classList.add("open");
    this.renderer.addClass(this.blocker.nativeElement, "activate-darker");
  }

  hideChatUser(el: HTMLElement) {
    el.classList.remove("open");
    this.renderer.removeClass(this.blocker.nativeElement, "activate-darker");
  }

  handleDarkArea(value: string) {
    if (value == "activate") 
      this.renderer.addClass(this.blockerside.nativeElement, "side-activate");
    else if(value == "disactivate")
      this.renderer.removeClass(this.blockerside.nativeElement, "side-activate");
  }

  handleNavToggle(value: string) {
    if (value == "shrink") {
      this.isToggle = true;
      this.renderer.addClass(this.sidenav.nativeElement, "side-shrink");
      this.renderer.addClass(this.groupitem.nativeElement, "side-shrink");
      this.renderer.addClass(this.fileitem.nativeElement, "side-shrink");
      this.renderer.addClass(this.chatitem.nativeElement, "side-shrink");
    }
    else if(value == "increase") {
      this.isToggle = false;
      this.renderer.removeClass(this.sidenav.nativeElement, "side-shrink");
      this.renderer.removeClass(this.groupitem.nativeElement, "side-shrink");
      this.renderer.removeClass(this.fileitem.nativeElement, "side-shrink");
      this.renderer.removeClass(this.chatitem.nativeElement, "side-shrink");
    }
  }
}
