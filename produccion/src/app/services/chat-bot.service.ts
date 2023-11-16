import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor() { }

  async query(data: { [key: string]: string }): Promise<Object | undefined> {
    const response = await fetch(
      "https://www.stack-inference.com/run_deployed_flow?flow_id=655230437951a5fbe3954a9c&org=628e7163-e339-486f-bbaa-fd82fe32b126",
      {
        headers: {
          'Authorization':
            'Bearer 3b701380-e3e0-4188-817d-3ee88b363e91',
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