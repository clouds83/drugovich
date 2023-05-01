import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientService } from '../shared/services/client.service';
import { Client } from '../shared/models/client-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit, OnDestroy {
  clients?: Client[];
  isLoading = true;
  private subscription!: Subscription;
  showError!: string;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.isLoading = true;

    this.subscription = this.clientService.getClients().subscribe(
      (data) => {
        this.clients = data;
        this.isLoading = false;
      },
      (error) => {
        //this.isLoading = false;
        this.showError = this.clientService.errorMessage;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
