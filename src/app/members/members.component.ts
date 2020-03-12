import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  actualPicture: number = 0;
  @ViewChild('letter', { static: false, read: ElementRef }) letter: ElementRef;
  @ViewChild('info', { static: false, read: ElementRef }) info: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  hovered(imageNum: number) {
    this.letter.nativeElement.style.opacity = '0';
    this.info.nativeElement.style.opacity = '0';
    
    setTimeout(() => {
      this.letter.nativeElement.style.opacity = 1;
      this.info.nativeElement.style.opacity = 1;
      this.actualPicture = imageNum;
    }, 500);
  }

}
