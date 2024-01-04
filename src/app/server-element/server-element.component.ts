import {
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef , ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  @Input('srvElement') element: {type:string, name:string, content:string} = { type: '', name: '', content: '' };
  @Input() name: string;
  @ViewChild('heading') header!: ElementRef
  @ContentChild('contentParagraph') paragraph!: ElementRef
  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called!')
    console.log('text cont' +  this.header.nativeElement.textContent);
    console.log('text cont of paragraph ' +  this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
    console.log('text cont of paragraph ' +  this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
    console.log('text content ' +  this.header.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!')
  }

}
