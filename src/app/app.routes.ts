import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Terms } from './terms/terms';

export const routes: Routes = [
    {
        path: '',
        component: Main,
    },
    {
        path: 'terms',
        component: Terms,
    },
];
