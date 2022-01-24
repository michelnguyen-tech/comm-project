import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  faTimes = faTimes;

  constructor(private renderer: Renderer2, private elem: ElementRef, private router:Router) { }

  ngOnInit(): void {
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

}
