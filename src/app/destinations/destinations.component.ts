import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {

  destination: string = '';
  category: string = '';
  date: string = '';

  searchDestinations() {
    // Implement your search logic here
    console.log('Destination:', this.destination);
    console.log('Category:', this.category);
    console.log('Date:', this.date);
  }

}
