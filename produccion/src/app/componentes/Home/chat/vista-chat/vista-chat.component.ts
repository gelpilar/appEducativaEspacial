import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-chat',
  templateUrl: './vista-chat.component.html',
  styleUrls: ['./vista-chat.component.css']
})


export class VistaChatComponent {
  flag:boolean=false;

  abrir()
  {
    if(this.flag)
    {
      this.flag=false;
    }else
    {
      this.flag=true;
    }
  }

  handleChildEvent(eventData: string) {
    this.abrir();
  }
}
