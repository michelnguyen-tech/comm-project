import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faUsers, faUserFriends, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faUsers = faUsers;
  faFriends = faUserFriends;
  faArrowAltCircleRight = faArrowAltCircleRight;
  
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

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
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

  showChatMenu() {
    //el.classList.add("open");
    //this.renderer.addClass(this.blocker.nativeElement, "activate");
  }
}
