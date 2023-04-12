import { Component } from '@angular/core';

interface Destination {
  title: string;
  description: string;
  imageSrc: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  featuredDestinations: Destination[] = [
    {
      title: 'Paris, France',
      description: 'Experience the romance of the City of Love with its iconic landmarks, exquisite cuisine and cultural charm.',
      imageSrc: '../../assets/images/paris.jpeg'
    },
    {
      title: 'Tokyo, Japan',
      description: 'Immerse yourself in the bustling metropolis of Tokyo with its unique blend of traditional and modern culture.',
      imageSrc: '../../assets/images/tokyo.jpeg'
    },
    {
      title: 'Sydney, Australia',
      description: 'Discover the beauty of the Harbour City with its stunning beaches, vibrant arts scene, and iconic landmarks.',
      imageSrc: '../../assets/images/sydney.jpeg'
    }
  ];

}
