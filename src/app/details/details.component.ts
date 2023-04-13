import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  // packageId: number;
  // packageDetails: any; // Type and structure of package details may vary based on your data source

  // constructor(private route: ActivatedRoute, private packageService: PackageService) { }

  ngOnInit(): void {
    // // Get the package ID from the route parameter
    // this.route.params.subscribe(params => {
    //   this.packageId = +params['id'];
    // });

    // // Fetch package details using the package ID
    // this.packageService.getPackageDetails(this.packageId).subscribe(details => {
    //   this.packageDetails = details;
    // });
  }
}
