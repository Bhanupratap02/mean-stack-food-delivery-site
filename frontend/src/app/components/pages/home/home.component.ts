import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    let foodObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((param) => {
      if (param.searchTerm)
        foodObservable = this.foodService.getAllFoodsBySearchTerm(
          param.searchTerm
        );
      else if (param.tag)
        foodObservable = foodService.getAllFoodsByTag(param.tag);
      else foodObservable = foodService.getAll();

      foodObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }
  toastFc() {
    this.toastr.success('Got it', 'got it');
  }
}
