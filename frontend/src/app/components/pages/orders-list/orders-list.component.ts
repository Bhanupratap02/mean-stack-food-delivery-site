import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  constructor(
    private orderService: OrderService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.orderService.getAllOrdersOfTheUser().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (error) => {
        this.toastrService.error('Eror in Fetching Orders', 'Orders');
        console.error('Error fetching orders:', error);
      },
    });
  }

}
