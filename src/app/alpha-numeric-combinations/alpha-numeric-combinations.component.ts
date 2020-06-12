import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Page } from '../shared/page.model';
import { AlphaNumericCombinationsService } from '../shared/alphanumeric-combinations.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-alpha-numeric-combinations',
  templateUrl: './alpha-numeric-combinations.component.html',
  styleUrls: ['./alpha-numeric-combinations.component.css']
})
export class AlphaNumericCombinationsComponent implements OnInit, OnChanges {

  page: Page
  pageSize = 3;
  totalItems: number = 0;
  pageOfItems: any[]= [];
  loading: boolean = false;
  error: string;
  
  @Input() phoneNumberInput: string;

  constructor(private alphaNumericCombinationsService: AlphaNumericCombinationsService) { }


  ngOnInit() { }


  ngOnChanges() {
    if(this.phoneNumberInput)
        this.setPage(0);
  }


  setPage(page: number) {
    this.loading = true;
    this.error = null;
    this.pageOfItems = [];
    this.alphaNumericCombinationsService
      .getAlphaNumericCombinations(this.phoneNumberInput, page, this.pageSize)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.totalItems = page.totalItems;
          this.pageOfItems = Array(page.pageItems.length).fill(0).map((x, i) => ({ id: (i + 1), name: page.pageItems[i] }));
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.error = error.error;
          this.loading = false;
        }
      );
  }

  createPaginationRange(totalPages: number) {
    let paginationRange: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationRange.push(i);
    }
    return paginationRange;


  }



}
