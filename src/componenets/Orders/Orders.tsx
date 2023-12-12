import { Button, Tabs as Tabs } from "@mantine/core";
import { useOrdersStore } from "./OrdersStore";
import { OrderType } from "../../types/types";
import classes from "./Orders.module.less";

import create from "../../res/tabs-pannel/add.svg";
import active from "../../res/tabs-pannel/active.svg";
import background from "../../res/tabs-pannel/background.svg";

const freeTabsValues: string[] = [];

function Orders() {
  const [activeTab, setActiveTab] = useOrdersStore((state) => [
    state.activeTab,
    state.setActiveTab,
  ]);
  const [orders, setOrders] = useOrdersStore((state) => [
    state.orders,
    state.setOrders,
  ]);

  const removeTab = (value: string | null) => {
    value ? freeTabsValues.push(value) : "";
    console.log("removeTab: ", freeTabsValues);
    setOrders(orders.filter((tab: OrderType) => tab.id !== value));
    setActiveTab(String(Number(value) - 1));
  };

  const addTab = () => {
    const freeTabsValue = freeTabsValues.pop();
    console.log("addTab: ", freeTabsValues);
    const title =
      typeof freeTabsValue !== "undefined"
        ? freeTabsValue
        : String(orders.length + 1);
    setOrders([...orders, { id: title, content: `tab ${title}` }]);
    setActiveTab(title);
  };

  const onChangeHandler = (value: string | null) => {
    value === null
      ? ""
      : value === activeTab
      ? removeTab(value)
      : setActiveTab(value);
  };
  return (
    <Tabs
      variant="outline"
      classNames={classes}
      value={activeTab}
      onChange={onChangeHandler}
    >
      <Tabs.List>
        {orders.map((order, id) => (
          <Tabs.Tab
            key={id}
            leftSection={
              <img src={order.id === activeTab ? active : background} />
            }
            value={order.id}
          >
            {order.content}
          </Tabs.Tab>
        ))}
        <Button
          className={classes.createOrder}
          variant="default"
          onClick={addTab}
        >
          <img src={create} />
        </Button>
      </Tabs.List>

      {orders.map((order, id) => (
        <Tabs.Panel key={id} value={order.id}>
          {order.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}

export default Orders;
