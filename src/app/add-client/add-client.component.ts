import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent {
  constructor(private router: Router) {}

  onSubmit() {}

  onCancel() {
    this.router.navigate(['/']);
  }
}
