import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  faUsers = faUsers;
  
  @ViewChild('groups')
  groups!: ElementRef<HTMLInputElement>;

  @ViewChild('chat')
  chat!: ElementRef<HTMLInputElement>;

  @ViewChild('files')
  files!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onActive(el: HTMLElement) {
    this.renderer.removeClass(this.groups.nativeElement, "list-active");
    this.renderer.removeClass(this.chat.nativeElement, "list-active");
    this.renderer.removeClass(this.files.nativeElement, "list-active");
    el.classList.add("list-active");
  }

}
