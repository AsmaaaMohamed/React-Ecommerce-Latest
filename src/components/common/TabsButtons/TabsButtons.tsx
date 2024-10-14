import { Button } from "@/components/ui/button";

interface ITabsButtons  {
    tabs:{
        text:string;
        value:string;
    }[];
    setTab:(value:string)=> void;
    currentTab:string;
    className:string;
}
const TabsButtons = ({ tabs, setTab, currentTab, className }: ITabsButtons) => {
  const renderedTabs = tabs.map((el) => {
    return (
      <Button
        key={el.value}
        className={`${className} ${el.value === currentTab ? "bg-primary text-white" : ""}`}
        onClick={() => {
          setTab(el.value);
        }}
      >
        {el.text}
      </Button>
    );
  });
  return <>{renderedTabs}</>;
};

export default TabsButtons;