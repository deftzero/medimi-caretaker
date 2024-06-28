import { Tabs, Typography, } from "antd";
import { useTranslation } from "react-i18next";
import { DermatologyLiteAccounting } from "./DermatologyLiteAccounting";

const { Title } = Typography;
const { TabPane } = Tabs;

const LiteAccounting = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-5 ">
      <Title level={3}>{t("liteAccounting.dermatology.title")}</Title>
      <div className="bg-white p-5 rounded-xl">
        <Tabs defaultActiveKey="2">
          <TabPane tab={t("liteAccounting.dermatology.all")} key="1">
           
          </TabPane>
          <TabPane tab={t("liteAccounting.dermatology.dermatology")} key="2">
            <DermatologyLiteAccounting />
          </TabPane>
          <TabPane tab={t("liteAccounting.dermatology.gynecology")} key="3">
            {/* Add Gynecology content here */}
          </TabPane>
          <TabPane tab={t("liteAccounting.dermatology.psychiatry")} key="4">
            {/* Add Psychiatry content here */}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default LiteAccounting;


