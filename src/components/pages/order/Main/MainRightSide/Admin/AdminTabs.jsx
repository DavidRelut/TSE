import styled from "styled-components";
import Tab from "../../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../../theme/themeSystem";
import { useOrderContext } from "../../../../../../context/OrderContext";
import { getTabsConfig } from "./tabsConfig";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useOrderContext();

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); // tu m'ouvres le pannel
    setCurrentTabSelected(tabSelected);
  };

  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      <Tab
        index="chevron"
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          index={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
