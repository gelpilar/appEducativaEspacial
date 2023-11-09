import { ChangeDetectorRef, Component } from '@angular/core';
import { FlexAlignDirective } from '@angular/flex-layout';

@Component({
  selector: 'app-vista-calendario',
  templateUrl: './vista-calendario.component.html',
  styleUrls: ['./vista-calendario.component.css']
})
export class VistaCalendarioComponent {
  flag:boolean=false;
 
  constructor(private cd: ChangeDetectorRef)
  {
    this.flag=false;
  }



 estado() {
    if(this.flag)
    {
      this.flag=false;
      
    }else
    {
      this.flag=true;
    }
    this.cd.detectChanges();
  }

}
