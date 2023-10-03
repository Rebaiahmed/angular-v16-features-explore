import { Component } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent {

  destroy$: Subject<void> = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit() {          
    this.http.get<any>('https://jsonplaceholder.org/posts')
    .pipe(takeUntilDestroyed())
    .subscribe(data => {
       
    })
}


}



/*  this.http.get<any>('https://jsonplaceholder.org/posts')
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {



      ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
       
    }) */