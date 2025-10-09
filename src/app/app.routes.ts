import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
    },
    {
        path: 'welcome',
        loadComponent: () => import('./components/welcome/welcome.component'),
    },
    {
        path: 'dates-form',
        loadComponent: () =>
            import('./components/dates-form/dates-form.component'),
    },
    {
        path: 'pagination',
        loadComponent: () =>
            import('./components/pagination-doc/pagination-doc.component'),
        children: [
            {
                path: 'table',
                loadComponent: () =>
                    import(
                        './components/pagination-doc/table-pagination/table-pagination.component'
                    ),
            },
            {
                path: 'card',
                loadComponent: () =>
                    import(
                        './components/pagination-doc/card-pagination/card-pagination.component'
                    ),
            },
            {
                path: 'server',
                loadComponent: () =>
                    import(
                        './components/pagination-doc/server-pagination/server-pagination.component'
                    ),
            },
            {
                path: 'custom',
                loadComponent: () =>
                    import(
                        './components/pagination-doc/custom-pagination/custom-pagination.component'
                    ),
            },
        ],
    },
];
