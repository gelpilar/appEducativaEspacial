import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor() { }
  

  async query(data: {[key: string]: string}): Promise<Object| undefined>{
    const response = await fetch(
    "https://www.stack-inference.com/run_deployed_flow?flow_id=654a902e60e1fbea0c972a44&org=7d6145a3-484b-4ecc-86c8-3831fd810b66",
    {
        headers: {'Authorization':
   'Bearer 2b867137-2e42-4401-aaed-be1c6330c14f',
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


