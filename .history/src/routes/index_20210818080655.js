import App from '../pages/App';
import Calendar from '../pages/Calendar';

const Routes = [
  {
    path: '/',
    component: Calendar,
    exact: true
  },
  {
    path: '/info',
    component: App,
    exact: true
  }
];

export default Routes;
