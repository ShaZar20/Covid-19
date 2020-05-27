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

const AppRouter = () => (
    <BrowserRouter>
        <div className="container-fullPage">
            <Header />
            <Switch>
                <Route path="/" component={WelcomePage} exact={true} />
                <Route path="/ChildrenDetails" component={ChildrenDetails} />
                <Route path="/ParentDetails" component={ParentDetails} />
                <Route path="/Approved" component={Approved} />
                <Route path="/Login" component={Login} />
                <Route path="/DownloadReport" component={DownloadReport} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
 );

export default AppRouter;