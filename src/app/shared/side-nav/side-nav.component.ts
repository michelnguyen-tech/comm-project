import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faUsers, faUserFriends, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { DarkAreaService } from 'src/app/services/dark-area.service';

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
  clickEventsubscription:Subscription;
  
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

  constructor(private renderer: Renderer2, private router: Router, private darkAreaService: DarkAreaService) { 
    this.clickEventsubscription = this.darkAreaService.getClickEvent().subscribe((value)=>{
      this.handleDarkArea(value)}
    )}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.onActive(this.groups.nativeElement);
  }

  onActive(el: HTMLElement) {
    console.log(el.children[1].innerHTML);
    this.renderer.removeClass(this.groups.nativeElement, "list-active");
    this.renderer.removeClass(this.chat.nativeElement, "list-active");
    this.renderer.removeClass(this.files.nativeElement, "list-active");
    el.classList.add("list-active");

    if(el.children[1].innerHTML == "Chat") {
      this.router.navigateByUrl('/home/chat');
    }
    if(el.children[1].innerHTML == "Groups") {
      this.router.navigateByUrl('/home/groups');
    }
    if(el.children[1].innerHTML == "Files") {
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

  handleDarkArea(value:string) {
    if (value == "activate") 
      this.renderer.addClass(this.blockerside.nativeElement, "side-activate");
    else if(value =="disactivate")
      this.renderer.removeClass(this.blockerside.nativeElement, "side-activate");
  }
}
