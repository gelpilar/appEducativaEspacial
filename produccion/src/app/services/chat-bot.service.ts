import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor() { }

  async query(data: { [key: string]: string }): Promise<Object | undefined> {
    const response = await fetch(
      "https://www.stack-inference.com/run_deployed_flow?flow_id=65574143631c60d57eb0b519&org=26d56bf8-900b-4e4a-9dc9-49475447f3bb",
      {
        headers: {
          'Authorization':
            'Bearer c5e31a97-3122-4221-b708-9c13c9432b6c',
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