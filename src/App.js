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
import logo from "./ReactLogo.png";
import PageHeader from "@atlaskit/page-header";

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
            <img src={logo} className="App-logo" alt="logo" />
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
                <Section title="Starred">
                  <Link to="/user">
                    <ButtonItem>User Profile</ButtonItem>
                  </Link>
                </Section>
                ,
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
                <Route path="/user">
                  <UserProfileView />
                </Route>
                <Route path="/form">
                  <UserFormView />
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
