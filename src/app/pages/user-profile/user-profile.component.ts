import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor(library: LaIconLibrary) {
    library.addIcons([lasSearch, lasShoppingCart, lasBell, lasUserCircle])
  }
}
