import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import NotFoundPage from '../NotFoundPage';
import ChildrenDetails from '../ChildrenDetails';
import ParentDetails from '../ParentDetails';
import Approved from '../Approved';
import Header from '../Header';
import Login from '../admin pages/Login';
import DownloadReport from '../admin pages/DownloadReport';
import Steps from '../Steps'
import Approval from '../approval'
const AppRouter = () => (
    <BrowserRouter>
        <div className="container-fullPage">
            <Header />
            <Switch>
                <Route path="/" component={WelcomePage} exact={true} />
                <Route path="/main" component={Steps} />
                <Route path="/admin" component={Login} />
                <Route path="/approval/:id" component={Approval} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
 );

export default AppRouter;