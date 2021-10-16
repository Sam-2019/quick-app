import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import RegisterForm from "./pages/Forms/Member/index";
import NoPageRoute from "./pages/404/index";
import ScrollToTop from "./components/ScrollToTop";

export default function Main() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Layout>
          <Switch>
            <Route exact path="/">
              <RegisterForm />
            </Route>

            <Route>
              <NoPageRoute />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}
