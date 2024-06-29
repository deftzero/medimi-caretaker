import { Typography, Space, Row, Col, Select, Card, Divider } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import ActionButton from "../../../../components/ui/ActionButton";
import { ACTION_COLORS } from "../../../../config/constants";
import { serviceOptions } from "../../../../data";
import Calender from "../../../../assets/icons/calendar.svg?react";
import Assets from "../../../../assets/assets.svg?react";
import Liabilities from "../../../../assets/icons/liabilities.svg?react";
import Eye from "../../../../assets/icons/eye.svg?react";
import Pencil from "../../../../assets/icons/white-pencil.svg?react";
import AppButton from "../../../../components/ui/AppButton";
import { StatisticsWithTitle } from "../StatisticsWithTitle";
import { useState } from "react";
import { Configure } from "./Configure";

const { Title, Text } = Typography;
export const DermatologyLiteAccounting = () => {
  const { t } = useTranslation();
  const [configure, setConfigure] = useState(false);
  return (
    <>
      <div className="bg-white ">
        {
            !configure && <div className="mb-5 p-5 rounded-md bg-blue-50">
            <div className="flex gap-1">
              <Title level={4} className="!m-0">
                {t("liteAccounting.dermatology.totalBalance")}
              </Title>
              <InfoCircleOutlined style={{ fontSize: "18px" }} />
            </div>
            <div className="flex gap-1">
              <Title level={2} className="!m-0 !mt-3">
                60,000
              </Title>
              <div className="mt-3">
                <Eye />
              </div>
            </div>
          </div>
        }
        
        <div className="flex justify-between items-center mb-5">
          <Space>
            <Text strong>08 - 14 Feb 2021</Text>
            <ActionButton
              background={ACTION_COLORS.VIEW}
              icon={<LeftOutlined />}
              onClick={() => {}}
            />
            <ActionButton
              background={ACTION_COLORS.VIEW}
              icon={<RightOutlined />}
              onClick={() => {}}
            />
          </Space>
          <Select
            className="w-32"
            placeholder={
              <div className="flex items-center gap-2">
                <span className="mt-2">
                  <Calender />
                </span>
                <span className="text-slate-600">
                  {t("statistics.dropdown.title")}
                </span>
              </div>
            }
          >
            {serviceOptions.map((item: any) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </div>
        {configure ? <Configure setConfigure={setConfigure} /> : <Row gutter={16}>
          <Col span={12} className="flex">
            <Card className="w-full h-full" bodyStyle={{ height: "100%" }}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-center gap-2 items-center">
                    <Assets />
                    <Title level={4} className="!m-0">
                      {t("liteAccounting.dermatology.assets")}
                    </Title>
                  </div>
                  <div className="space-y-4">
                    <StatisticsWithTitle
                      title={t("liteAccounting.dermatology.ownConsultations")}
                      amount={"35,000"}
                    />
                    <StatisticsWithTitle
                      title={t("liteAccounting.dermatology.punctualIncome")}
                      amount={"5,000"}
                    />
                    <div className="mt-4 flex flex-row justify-between p-2 items-center gap-2 hover:cursor-pointer rounded-md bg-slate-100">
                      <Text className="font-bold ml-9">
                        {t("liteAccounting.dermatology.totalFixedIncome")}
                      </Text>
                      <Text>40,000</Text>
                    </div>
                    <Divider />
                    <StatisticsWithTitle
                      title={t("liteAccounting.dermatology.wages")}
                      amount={"30,000"}
                    />
                    <div className="mt-4 flex flex-row justify-between p-2 items-center gap-2 hover:cursor-pointer rounded-md bg-slate-100">
                      <Text className="font-bold ml-9">
                        {t("liteAccounting.dermatology.totalFixedIncome")}
                      </Text>
                      <Text>35,000</Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Title level={5} type="success" className="!m-0">
                    {t("liteAccounting.dermatology.totalAssets")}
                  </Title>
                  <Title level={5} className="!m-0">
                    75,000
                  </Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={12} className="flex">
            <Card className="w-full h-full" bodyStyle={{ height: "100%" }}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-center gap-2 items-center">
                    <Liabilities />
                    <Title level={4} className="!m-0">
                      {t("liteAccounting.dermatology.liabilities")}
                    </Title>
                  </div>
                  <div className="space-y-4">
                    <StatisticsWithTitle
                      title={t("liteAccounting.dermatology.rentingFees")}
                      amount={"5,000"}
                    />
                    <StatisticsWithTitle
                      title={t("liteAccounting.dermatology.transportWeekly")}
                      amount={"5,000"}
                    />
                    <div className="mt-4 flex flex-row justify-between p-2 items-center gap-2 hover:cursor-pointer rounded-md bg-slate-100">
                      <Text className="font-bold ml-9">
                        {t("liteAccounting.dermatology.totalFixedIncome")}
                      </Text>
                      <Text>40,000</Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Title level={5} type="danger" className="!m-0">
                    {t("liteAccounting.dermatology.totalLiabilities")}
                  </Title>
                  <Title level={5} className="!m-0">
                    6,000
                  </Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={24} className="flex justify-end mt-4">
            <AppButton type="primary" icon={<Pencil />} onClick={()=>setConfigure(true)}>
              {t("liteAccounting.dermatology.configure")}
            </AppButton>
          </Col>
        </Row>}
      </div>
    </>
  );
};
