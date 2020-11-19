import { MenuGroup, Section, ButtonItem } from "@atlaskit/menu";
import { Link } from "react-router-dom";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";
import PersonIcon from "@atlaskit/icon/glyph/person";

const NavigationMenu = () => {
  return (
    <MenuGroup>
      <Section title="Main menu">
        <Link to="/user">
          <ButtonItem iconBefore={<PersonIcon />}>User Profile</ButtonItem>
        </Link>
      </Section>
      <Section hasSeparator>
        <Link to="/form">
          <ButtonItem iconBefore={<EditFilledIcon />}>User Form</ButtonItem>
        </Link>
      </Section>
    </MenuGroup>
  );
};

export default NavigationMenu;
