import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  from = '';
  to = '';
  date = '';
  passengers = '';
  menuOpen = false;

  get allFilled(): boolean {
    return (
      this.from.trim() !== '' &&
      this.to.trim() !== '' &&
      this.date.trim() !== '' &&
      this.passengers.trim() !== ''
    );
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
