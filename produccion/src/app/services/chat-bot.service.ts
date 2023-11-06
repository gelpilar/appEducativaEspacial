import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor() { }
  

  async query(data: {[key: string]: string}): Promise<Object| undefined>{
    const response = await fetch(
    "https://www.stack-inference.com/run_deployed_flow?flow_id=65244c05f1588e6ae1ccf906&org=2efb3209-830d-447f-8266-f1743f098b89",
    {
        headers: {'Authorization':
   'Bearer adf5cc2d-7cfd-4078-b4d5-ef814f09d500',
   'Content-Type': 'application/json'
},
        method: "POST",
        body: JSON.stringify(data),
    }
    );
    const result = await response.json();
    
    return result;
  }

}


