import { Tabs, TabsContent } from "@/components/ui/tabs";

interface IDynamicTabsContent {
  tabs: {
    value: string;
    content:JSX.Element
  }[];
  currentTabValue: string;
}
const DynamicTabsContent = ({tabs,currentTabValue}:IDynamicTabsContent) => {
  return (
    <Tabs value={currentTabValue} className="">
      {tabs.map((el) => (
        <TabsContent key={el.value} value={el.value}>
          {el.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DynamicTabsContent;
