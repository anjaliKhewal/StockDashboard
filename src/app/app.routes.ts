import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { SummaryComponent} from './components/summary/summary.component'
import { AppComponent } from './app.component';

const routes: Routes = [
    {
    path: '',
    component: SummaryComponent
    },
    {
    path: 'dashboard',
    component: DashboardComponent
    },
    {
    path: 'manage',
    component: ManageComponent
    } ];

export const AppRoutes = RouterModule.forRoot(routes);