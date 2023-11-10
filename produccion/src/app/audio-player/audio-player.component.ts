import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {
  audio = new Audio('../../assets/sonidos/sonidoPistolita.mp3');
  

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}