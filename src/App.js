import React from "react";
import {Login} from "./Login";
import {Register} from "./Register";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {Dashboard} from "./Dashboard";


function App() {
    const auth = localStorage.getItem('AUTH');

    return (
        <div>
            <h2>
                My App
            </h2>
            <Router>
                {!auth && <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Redirect to="/login"/>
                </Switch>}
                {!!auth && <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Redirect to="/"/>
                </Switch>}
            </Router>
        </div>
    );
}

export default App;
