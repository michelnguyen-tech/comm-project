import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  faTimes = faTimes;
  toggleNavsubscription: Subscription;
  toggleNav: boolean = false;

  @ViewChild('container')
  container!: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2, private elem: ElementRef, private router:Router, private navToggleService: NavbarToggleService) {
    this.toggleNavsubscription = this.navToggleService.getClickEvent().subscribe((value) => {
      this.handleNavToggle(value);
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.toggleNavsubscription.unsubscribe();
  }

  selectedChat(event: MouseEvent) {

    var elements = this.elem.nativeElement.querySelectorAll('.accordion-button');
    for(let i=0;i<elements.length;i++) {
      elements[i].classList.remove('list-active');
    }
    const eventTarget: Element = event.target as Element;
    this.renderer.addClass(eventTarget, "list-active");
    console.log(eventTarget);
  }

  navigateToRoom(id: number) {
    this.router.navigate(['/home', 'chat', id])
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
