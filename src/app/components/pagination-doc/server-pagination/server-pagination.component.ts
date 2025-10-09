import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import {
    MatPaginatorModule,
    MatPaginator,
    PageEvent,
} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockDataService, User } from '../../../services/mock-data.service';

@Component({
    selector: 'app-server-pagination',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './server-pagination.component.html',
    styleUrl: './server-pagination.component.scss',
})
export default class ServerPaginationComponent implements OnInit {
    @ViewChild('paginator') paginator!: MatPaginator;

    dataSource = new MatTableDataSource<User>([]);
    displayedColumns: string[] = [
        'id',
        'name',
        'email',
        'role',
        'department',
        'status',
    ];
    pageSize = 10;
    currentPage = 0;
    totalItems = 0;
    loading = false;

    constructor(private mockDataService: MockDataService) {}

    ngOnInit() {
        this.totalItems = this.mockDataService.getTotalUsers();
        this.loadData();
    }

    onPageChange(event: PageEvent) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.loadData();
    }

    private loadData() {
        this.loading = true;

        // Simulate API call delay
        setTimeout(() => {
            const users = this.mockDataService.getUsersPage(
                this.currentPage,
                this.pageSize
            );
            this.dataSource.data = users;
            this.loading = false;
        }, 500);
    }

    getStatusColor(status: string): string {
        return status === 'active' ? 'green' : 'red';
    }
}
