import { Typography } from "antd";
import { ACTION_COLORS } from "../../../../config/constants";
import MoneyBag from "../../../../assets/icons/money-bag.svg?react";

const { Text } = Typography;
export const StatisticsWithTitle = ({ title, amount }: any) => (
    <div className="flex justify-between items-center">
      <div className="flex justify-center gap-2 items-center">
        <div
          className="p-1 rounded-md flex justify-center items-center"
          style={{ backgroundColor: ACTION_COLORS?.VIEW }}
        >
          <MoneyBag />
        </div>
        <Text strong>{title}</Text>
      </div>
      <Text>{amount}</Text>
    </div>
  );