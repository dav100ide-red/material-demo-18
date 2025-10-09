import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatPaginatorModule,
    MatPaginator,
    PageEvent,
} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MockDataService, Product } from '../../../services/mock-data.service';

@Component({
    selector: 'app-card-pagination',
    standalone: true,
    imports: [CommonModule, MatPaginatorModule, MatCardModule],
    templateUrl: './card-pagination.component.html',
    styleUrl: './card-pagination.component.scss',
})
export default class CardPaginationComponent implements OnInit {
    @ViewChild('paginator') paginator!: MatPaginator;

    dataSource: Product[] = [];
    pageSize = 6;
    currentPage = 0;
    totalItems = 0;

    constructor(private mockDataService: MockDataService) {}

    ngOnInit() {
        this.totalItems = this.mockDataService.getTotalProducts();
        this.updatePage();
    }

    onPageChange(event: PageEvent) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.updatePage();
    }

    private updatePage() {
        this.dataSource = this.mockDataService.getProductsPage(
            this.currentPage,
            this.pageSize
        );
    }

    getStockStatus(stock: number): string {
        if (stock === 0) return 'out-of-stock';
        if (stock < 10) return 'low-stock';
        return 'in-stock';
    }
}
