import { Injectable } from '@angular/core';

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    department: string;
    joinDate: string;
    status: 'active' | 'inactive';
}

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    description: string;
}

@Injectable({
    providedIn: 'root',
})
export class MockDataService {
    private users: User[] = [];
    private products: Product[] = [];

    constructor() {
        this.generateMockData();
    }

    getUsers(): User[] {
        return [...this.users];
    }

    getProducts(): Product[] {
        return [...this.products];
    }

    getUsersPage(pageIndex: number, pageSize: number): User[] {
        const startIndex = pageIndex * pageSize;
        const endIndex = startIndex + pageSize;
        return this.users.slice(startIndex, endIndex);
    }

    getProductsPage(pageIndex: number, pageSize: number): Product[] {
        const startIndex = pageIndex * pageSize;
        const endIndex = startIndex + pageSize;
        return this.products.slice(startIndex, endIndex);
    }

    getTotalUsers(): number {
        return this.users.length;
    }

    getTotalProducts(): number {
        return this.products.length;
    }

    private generateMockData() {
        // Generate users
        const roles = ['Admin', 'Manager', 'Developer', 'Designer', 'Analyst'];
        const departments = [
            'Engineering',
            'Marketing',
            'Sales',
            'HR',
            'Finance',
        ];
        const statuses: ('active' | 'inactive')[] = ['active', 'inactive'];

        for (let i = 1; i <= 150; i++) {
            this.users.push({
                id: i,
                name: `User ${i}`,
                email: `user${i}@company.com`,
                role: roles[Math.floor(Math.random() * roles.length)],
                department:
                    departments[Math.floor(Math.random() * departments.length)],
                joinDate: new Date(
                    2020 + Math.floor(Math.random() * 4),
                    Math.floor(Math.random() * 12),
                    Math.floor(Math.random() * 28) + 1
                )
                    .toISOString()
                    .split('T')[0],
                status: statuses[Math.floor(Math.random() * statuses.length)],
            });
        }

        // Generate products
        const categories = [
            'Electronics',
            'Clothing',
            'Books',
            'Home & Garden',
            'Sports',
        ];
        const productNames = [
            'Smartphone',
            'Laptop',
            'Headphones',
            'T-Shirt',
            'Jeans',
            'Book',
            'Garden Tool',
            'Soccer Ball',
        ];

        for (let i = 1; i <= 120; i++) {
            this.products.push({
                id: i,
                name: `${
                    productNames[
                        Math.floor(Math.random() * productNames.length)
                    ]
                } ${i}`,
                category:
                    categories[Math.floor(Math.random() * categories.length)],
                price: Math.floor(Math.random() * 500) + 10,
                stock: Math.floor(Math.random() * 100),
                rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
                description: `High-quality ${productNames[
                    Math.floor(Math.random() * productNames.length)
                ].toLowerCase()} with excellent features.`,
            });
        }
    }
}
