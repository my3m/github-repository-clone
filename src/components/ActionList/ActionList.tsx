import React from "react";
import { Code, Issues, PullRequests, Actions, Projects } from "../ActionItem/";

type ActionItemProps = {
  name: string;
  logo: JSX.Element;
  onClick(): void;
  active: boolean;
};

type ActionItemTab =
  | "Issues"
  | "Code"
  | "Pull Requests"
  | "Actions"
  | "Projects";

const ActionItem: React.FC<ActionItemProps> = ({
  name,
  logo,
  onClick,
  active = false
}) => {
  return (
    <li
      onClick={onClick}
      className={`${
        active ? "action-item-active" : ""
      } action-item items-center`}
    >
      <a
        href="./code"
        onClick={(e) => e.preventDefault()}
        className={`${active ? "active" : ""} flex items-center`}
      >
        {logo}
        <span className="">{name}</span>
      </a>
    </li>
  );
};

const ActionList = () => {
  const [activeTab, setActiveTab] = React.useState<ActionItemTab>("Code");

  return (
    <ul
      id="action-list"
      className="flex flex-row"
      style={{ listStyle: "none" }}
    >
      <ActionItem
        onClick={() => setActiveTab("Code")}
        active={activeTab === "Code"}
        name={"Code"}
        logo={<Code />}
      />
      <ActionItem
        onClick={() => setActiveTab("Issues")}
        active={activeTab === "Issues"}
        name={"Issues"}
        logo={<Issues />}
      />
      <ActionItem
        onClick={() => setActiveTab("Pull Requests")}
        active={activeTab === "Pull Requests"}
        name={"Pull Requests"}
        logo={<PullRequests />}
      />
      <ActionItem
        onClick={() => setActiveTab("Actions")}
        active={activeTab === "Actions"}
        name={"Actions"}
        logo={<Actions />}
      />
      <ActionItem
        onClick={() => setActiveTab("Projects")}
        active={activeTab === "Projects"}
        name={"Projects"}
        logo={<Projects />}
      />
    </ul>
  );
};

export default ActionList;
