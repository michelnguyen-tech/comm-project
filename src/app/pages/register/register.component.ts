import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { markedTrigger } from './animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    markedTrigger
  ]
})
export class RegisterComponent implements OnInit {
  @ViewChild('month')
  input!: ElementRef<HTMLInputElement>;
  
  years: string[] = ["2021","2020","2019","2018","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2009"];
  days: string[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
  
  constructor(private router: Router, private renderer: Renderer2 ) { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {
    const arr = 
    ["January","February","March","April","May","June","July","August","May","June","july","August","September","October","November","December"];
    //using selectRootElement instead of depreaced invokeElementMethod
    for(var i = 0; i < arr.length; i++) {
      var option = document.createElement("OPTION");
      var txt = document.createTextNode(arr[i]);
      option.appendChild(txt);
      option.setAttribute("value",arr[i]);
      this.renderer.insertBefore(this.input.nativeElement ,option, this.input.nativeElement.lastChild);
    }
   }
   

  loginForm() {
    this.router.navigateByUrl('/login');
  }

}
