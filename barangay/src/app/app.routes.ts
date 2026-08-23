import { Routes } from '@angular/router';
import { UserMainLayout } from './layout/user-main-layout/user-main-layout';
import { UserDashboard } from './page/user-dashboard/user-dashboard';
import { BarangayAnnouncement } from './component/announcement/barangay-announcement/barangay-announcement';
import { ResidentConcern } from './component/announcement/resident-concern/resident-concern';
import { SkAnnouncement } from './component/announcement/sk-announcement/sk-announcement';

export const routes: Routes = [
    {
        path: "",
        component: UserMainLayout,
        children: [
            {
                path: "",
                component: UserDashboard,
                children: [
                    {
                        path: "",
                        component: BarangayAnnouncement
                    },
                    {
                        path: "resident-concern",
                        component: ResidentConcern
                    },
                    {
                        path: "sk-announcement",
                        component: SkAnnouncement
                    }
                ]
            }
        ]
    }
];
