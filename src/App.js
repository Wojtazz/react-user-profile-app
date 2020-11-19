import "./App.css";
import UserProfileView from "./views/user/UserProfileView";
import UserFormView from "./views/user/UserFormView";
import PageHeader from "@atlaskit/page-header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AtlassianLogo } from "@atlaskit/logo";
import NavigationMenu from "./navigation/NavigationMenu";
import {
  Content,
  LeftSidebar,
  Main,
  PageLayout,
  TopNavigation,
} from "@atlaskit/page-layout";

function App() {
  return (
    <div className="App">
      <PageLayout>
        <TopNavigation
          id="product-navigation"
          height={55}
          isFixed={false}
        >
          <PageHeader>
            <AtlassianLogo className="App-logo" />
          </PageHeader>
        </TopNavigation>
        <Router>
          <Content testId="content">
            <LeftSidebar
              id="space-navigation"
              isFixed={true}
              width={125}
            >
              <NavigationMenu />
            </LeftSidebar>
            <Main
              id="main"
              isFixed={false}
            >
              <Switch>
                <Route exact path="/user" component={UserProfileView}></Route>
                <Route exact path="/form" component={UserFormView}></Route>
              </Switch>
            </Main>
          </Content>
        </Router>
      </PageLayout>
    </div>
  );
}

export default App;
