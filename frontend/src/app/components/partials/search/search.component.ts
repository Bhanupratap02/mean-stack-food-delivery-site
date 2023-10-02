import { Component } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm = '';
constructor(activatedRoute:ActivatedRoute,private router:Router){
activatedRoute.params.subscribe(param => {
  if(param.searchTerm) this.searchTerm = param.searchTerm
})
}

search(term:string) :void{
  if(term) this.router.navigateByUrl('/search/'+term);
}
}
