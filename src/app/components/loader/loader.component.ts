import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface ImageData {
  url: string;
  text: string;
}
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

  loading: boolean = false;
  images: ImageData[] = [
    { url: '../../assets/images/1.jpg', text: 'Fade' },
    { url: '../../assets/images/2.webp', text: 'Kill Joy' },
    { url: '../../assets/images/3.jpeg', text: 'Deadlock' },
    { url: '../../assets/images/4.webp', text: 'Chamber' },
  ];
  currentImage: ImageData = this.images[0];

  constructor(private router: Router) {
    this.startLoader();
    this.startImg();
   }

  startImg() {
    let index = 1;
    const interval = setInterval(() => {
      this.loading = false;
      this.currentImage = this.images[index];
      index++;
      if (index === this.images.length) {
        index = 0;
      }
    }, 4000);
  }

  startLoader() {
    const interval = setInterval(() => {
      this.loading = true;
    }, 2000);
  }
}
