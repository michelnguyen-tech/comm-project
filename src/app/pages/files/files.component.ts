import { Component, OnInit } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  faEllipsisH = faEllipsisH;
  toggleNavsubscription: Subscription;
  toggleNav: boolean = false;
  
  constructor(private navToggleService: NavbarToggleService) {
    this.toggleNavsubscription = this.navToggleService.getClickEvent().subscribe((value) => {
      this.handleNavToggle(value);
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.toggleNavsubscription.unsubscribe();
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
