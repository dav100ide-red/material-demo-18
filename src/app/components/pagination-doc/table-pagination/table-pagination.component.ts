import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MockDataService, User } from '../../../services/mock-data.service';

@Component({
    selector: 'app-table-pagination',
    standalone: true,
    imports: [CommonModule, MatTableModule, MatPaginatorModule, MatCardModule],
    templateUrl: './table-pagination.component.html',
    styleUrl: './table-pagination.component.scss',
})
export default class TablePaginationComponent implements OnInit {
    @ViewChild('paginator') paginator!: MatPaginator;

    dataSource = new MatTableDataSource<User>([]);
    displayedColumns: string[] = [
        'id',
        'name',
        'email',
        'role',
        'department',
        'joinDate',
        'status',
    ];

    constructor(private mockDataService: MockDataService) {}

    ngOnInit() {
        this.dataSource.data = this.mockDataService.getUsers();
        setTimeout(() => {
            this.dataSource.paginator = this.paginator;
        });
    }

    getStatusColor(status: string): string {
        return status === 'active' ? 'green' : 'red';
    }
}
