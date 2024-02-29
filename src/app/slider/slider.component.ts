import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  imageSrc: string[] = ["assets/Images/pexels-belle-co-783682.jpg","assets/Images/pexels-david-jia-945615.jpg","assets/Images/pexels-faruk-tokluoğlu-20336663.jpg"];
  currentImageSrc: string = this.imageSrc[0];
  counter: number = 0;
  interval: any;

  prev() {
     this.counter--;
     if (this.counter < 0) this.counter = this.imageSrc.length - 1;
     this.currentImageSrc = this.imageSrc[this.counter % this.imageSrc.length];
  }
  next() {
     console.log(this.imageSrc);
     this.currentImageSrc = this.imageSrc[++this.counter % this.imageSrc.length];
  }
  play() {
     this.interval = setInterval(() => this.next(), 1000);
  }
  stop() {
     clearInterval(this.interval);
  }
}
