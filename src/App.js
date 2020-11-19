import "./App.css";
import UserProfileView from "./views/UserProfileView";
import UserFormView from "./views/UserFormView";
import {
  Content,
  LeftSidebar,
  Main,
  PageLayout,
  TopNavigation,
} from "@atlaskit/page-layout";
import { MenuGroup, Section, ButtonItem } from "@atlaskit/menu";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PageHeader from "@atlaskit/page-header";
import { AtlassianLogo } from '@atlaskit/logo';
function App() {
  return (
    <div className="App">
      <PageLayout>
        <TopNavigation
          testId="topNavigation"
          id="product-navigation"
          skipLinkTitle="Product Navigation"
          height={55}
          isFixed={false}
        >
          <PageHeader>
            <AtlassianLogo className="App-logo"/>
         </PageHeader>
        </TopNavigation>
        <Router>
          <Content testId="content">
            <LeftSidebar
              testId="leftSidebar"
              id="space-navigation"
              skipLinkTitle="Space Navigation"
              isFixed={true}
              width={125}
            >
              <MenuGroup>
                <Section title="Main menu">
                  <Link to="/user">
                    <ButtonItem>User Profile</ButtonItem>
                  </Link>
                </Section>
                <Section hasSeparator>
                  <Link to="/form">
                    <ButtonItem>User Form</ButtonItem>
                  </Link>
                </Section>
              </MenuGroup>
            </LeftSidebar>
            <Main
              testId="main"
              id="main"
              skipLinkTitle="Main Content"
              isFixed={false}
            >
              <Switch>
                <Route exact path="/user" component={UserProfileView}>
                  
                </Route>
                <Route exact path="/form" component={UserFormView}>
                </Route>
              </Switch>
            </Main>
          </Content>
        </Router>
      </PageLayout>
    </div>
  );
}

export default App;
