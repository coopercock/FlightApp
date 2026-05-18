import { Component, signal } from '@angular/core';
import { Flight, initFlight } from '../data/flight';
import { FormsModule } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-flight-search', // <app-flight-search />
  imports: [FormsModule, JsonPipe, DatePipe],
  templateUrl: './flight-search.html',
  styleUrl: './flight-search.css',
})
export class FlightSearch {
  from = signal('Graz');
  to = signal('Hamburg');

  flights = signal<Flight[]>([]);
  selectedFlight = signal({initFlight});
initFlight: any;

  search(): void {
    this.flights.set( [
      {
        id: 1,
        from: this.from(),
        to: this.to(),
        date: new Date().toISOString()
      },
      {
        id: 2,
        from: this.from(),
        to: this.to(),
        date: new Date().toISOString()
      },
      {
        id: 3,
        from: this.from(),
        to: this.to(),
        date: new Date().toISOString()
      },
    ]);
  }

  selectFlight(flight: Flight): void {
    this.selectedFlight.set({initFlight: flight});
  }
}
