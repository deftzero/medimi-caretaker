import { Line, Doughnut } from "react-chartjs-2";
import {
  Typography,
  Space,
  Tabs,
  Statistic,
  Row,
  Col,
  Select,
} from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "chart.js/auto";
import { ScriptableContext } from "chart.js/auto";
import { evolutionOfPatientFlowOptions, serviceOptions } from "../../../data";
import ActionButton from "../../../components/ui/ActionButton";
import { ACTION_COLORS } from "../../../config/constants";
import Calender from "../../../assets/icons/calendar.svg?react";
import { useState } from "react";
import AppButton from "../../../components/ui/AppButton";
import EvolutionModal from "./EvolutionModal";
const { Title, Text } = Typography;
const { TabPane } = Tabs;

const StatisticsIndicators = () => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const lineData = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: t("statistics.patientFlow"),
        data: [5, 6, 2, 4, 6, 1, 8],
        fill: "start",
        lineTension: 0.8,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgb(106,196,174,1)");
          gradient.addColorStop(1, "rgb(106,196,174,0.1)");
          return gradient;
        },
        borderColor: "rgb(106,196,174)",
      },
    ],
  };

  const doughnutData = {
    labels: [
      t("statistics.flu"),
      t("statistics.malaria"),
      t("statistics.others"),
    ],
    datasets: [
      {
        data: [15, 9, 2],
        backgroundColor: ["#6366F1", "#34D399", "#FBBF24"],
        hoverBackgroundColor: ["#4F46E5", "#10B981", "#F59E0B"],
        borderWidth: 1,
        cutout: "80%",
        circumference: 240,
        rotation: 120,
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
    cutoutPercentage: 80,
  };

  return (
    <div className="space-y-5 p-5 rounded-xl bg-white">
      <Title level={3} className="!m-0">
        {t("statistics.title")}
      </Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab={t("statistics.all")} key="1">
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
                  <span>{t("statistics.dropdown.title")}</span>
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
          <Row gutter={16} className="mt-4">
            <Col span={12}>
              <div className="p-5 bg-white rounded-xl shadow-xl">
                <Title level={5} className="!m-0 !mb-4">
                  {t("statistics.evolutionOfPatientFlow")}
                </Title>
                <div style={{ height: 350 }}>
                  <Line
                    options={evolutionOfPatientFlowOptions}
                    data={lineData}
                  />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="p-5 bg-white rounded-xl shadow-xl">
                <Title level={5} className="!m-0 !mb-4">
                  {t("statistics.distributionOfDiseases")}
                </Title>
                <div style={{ position: "relative", height: "250px" }}>
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                  <div
                    style={{
                      position: "absolute",
                      top: "45%",
                      left: "45%",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                      2,820
                    </div>
                    <div style={{ color: "green", fontSize: "14px" }}>
                      10% ↑
                    </div>
                    <div style={{ fontSize: "12px" }}>401 this month</div>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="list-none !p-0">
                    <li>
                      <div className="flex justify-between items-center">
                        <Text className="font-medium">
                          <span
                            className="text-2xl"
                            style={{ color: "#6366F1" }}
                          >
                            ●
                          </span>{" "}
                          Flu
                        </Text>
                        <Text className="font-medium">15</Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-center">
                        <Text className="font-medium">
                          <span
                            className="text-2xl"
                            style={{ color: "#34D399" }}
                          >
                            ●
                          </span>{" "}
                          Malaria
                        </Text>
                        <Text className="font-medium">9</Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between items-center">
                        <Text className="font-medium">
                          <span
                            className="text-2xl"
                            style={{ color: "#FBBF24" }}
                          >
                            ●
                          </span>{" "}
                          Others
                        </Text>
                        <Text className="font-medium">2</Text>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={16} className="mt-5">
            <Col span={4}>
              <div className="p-5 bg-white rounded-xl text-center shadow-xl">
                <Statistic
                  title={t("statistics.minimum")}
                  className="font-bold text-left"
                  value={23}
                />
              </div>
            </Col>
            <Col span={4}>
              <div className="p-5 bg-white rounded-xl text-center shadow-xl">
                <Statistic
                  title={t("statistics.average")}
                  className="font-bold text-left"
                  value={30}
                />
              </div>
            </Col>
            <Col span={4}>
              <div className="p-5 bg-white rounded-xl text-center shadow-xl">
                <Statistic
                  title={t("statistics.maximum")}
                  className="font-bold text-left"
                  value={43}
                />
              </div>
            </Col>
          </Row>
          <div className="mt-5 flex justify-end">
            <AppButton type="primary" onClick={()=> setModalVisible(true)}>{t("statistics.evolutionButton")}</AppButton>
          </div>
          <EvolutionModal visible={modalVisible} onClose={()=>setModalVisible(false)} />
        </TabPane>
        <TabPane tab={t("statistics.dermatology")} key="2">
          {/* Add Dermatology content here */}
        </TabPane>
        <TabPane tab={t("statistics.gynecology")} key="3">
          {/* Add Gynecology content here */}
        </TabPane>
        <TabPane tab={t("statistics.psychiatry")} key="4">
          {/* Add Psychiatry content here */}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default StatisticsIndicators;
