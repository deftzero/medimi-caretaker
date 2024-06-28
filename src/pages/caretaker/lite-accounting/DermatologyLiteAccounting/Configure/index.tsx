import { Typography, Row, Col, Card, Space, Button } from "antd";
import { useTranslation } from "react-i18next";
import AppButton from "../../../../../components/ui/AppButton";
import { StatisticsWithTitle } from "../../StatisticsWithTitle";
import { PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
export const Configure = ({setConfigure}:any) => {
  const { t } = useTranslation();
  return (
    <>
      <Row gutter={16}>
        <Col span={12} className="flex">
          <Card className="w-full h-[380px]" bodyStyle={{ height: "100%" }}>
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <StatisticsWithTitle
                  title={t(
                    "liteAccounting.dermatology.configureForm.assets.title"
                  )}
                  amount={"35,000"}
                />
                <StatisticsWithTitle
                  title={t(
                    "liteAccounting.dermatology.configureForm.assets.ownConsultations"
                  )}
                  amount={"5,000"}
                />
              </div>
              <div className="flex gap-8 items-center mt-4">
                <Space>
                  <AppButton type="primary" icon={<PlusOutlined />} />
                  <Title level={5} className="!m-0">
                    {t(
                      "liteAccounting.dermatology.configureForm.buttons.recursive"
                    )}
                  </Title>
                </Space>
                <Space>
                  <AppButton type="primary" icon={<PlusOutlined />} />
                  <Title level={5} className="!m-0">
                    {t(
                      "liteAccounting.dermatology.configureForm.buttons.punctual"
                    )}
                  </Title>
                </Space>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={12} className="flex">
          <Card className="w-full h-full" bodyStyle={{ height: "100%" }}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="space-y-4">
                  <StatisticsWithTitle
                    title={t(
                      "liteAccounting.dermatology.configureForm.liabilities.title"
                    )}
                    amount={"5,000"}
                  />
                  <StatisticsWithTitle
                    title={t(
                      "liteAccounting.dermatology.configureForm.liabilities.transportWeekly"
                    )}
                    amount={"5,000"}
                  />
                  <div className="mt-4 flex flex-row justify-between p-2 items-center gap-2 hover:cursor-pointer rounded-md bg-slate-100">
                    <Text className="font-bold ml-9">
                      {t(
                        "liteAccounting.dermatology.configureForm.liabilities.totalFixedIncome"
                      )}
                    </Text>
                    <Text>40,000</Text>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 items-center mt-4">
                <Space>
                  <AppButton type="primary" icon={<PlusOutlined />} />
                  <Title level={5} className="!m-0">
                    {t(
                      "liteAccounting.dermatology.configureForm.buttons.recursive"
                    )}
                  </Title>
                </Space>
                <Space>
                  <AppButton type="primary" icon={<PlusOutlined />} />
                  <Title level={5} className="!m-0">
                    {t(
                      "liteAccounting.dermatology.configureForm.buttons.punctual"
                    )}
                  </Title>
                </Space>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={24} className="flex justify-end items-end h-[200px]">
          <div className="flex gap-4">
            <Button className="w-[100px]" type="default" style={{ boxShadow: 'unset' }} onClick={()=> setConfigure(false)}>
              {t("liteAccounting.dermatology.configureForm.actions.cancel")}
            </Button>
            <Button className="w-[100px]" type="primary" style={{ boxShadow: 'unset' }} onClick={()=> setConfigure(false)}>
              {t("liteAccounting.dermatology.configureForm.actions.save")}
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
