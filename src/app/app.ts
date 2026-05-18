import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlightSearch } from "./flight-search/flight-search";

@Component({
  selector: 'app-root',
  imports: [FlightSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = ('Flight-App');
}
