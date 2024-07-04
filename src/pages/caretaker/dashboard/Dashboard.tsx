import {
  Card,
  Col,
  Row,
  Avatar,
  Typography,
  Dropdown,
  Space,
} from "antd";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";
import VideoCamera from "../../../assets/icons/video-camera.svg?react";
import Clock from "../../../assets/icons/clock.svg?react";
import AppButton from "../../../components/ui/AppButton";
import { ACTION_COLORS } from "../../../config/constants";
import { appointmentsDashboard, appointmentsStatsData, appointmentsStatsDropdownItems, appointmentsStatsOptions, publicationsDashoard } from "../../../data";

const { Title, Text } = Typography;
const Dashboard = () => {
  const { t } = useTranslation();
  const menuProps: any = {
    items:appointmentsStatsDropdownItems(t),
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log("click left button", e);
    },
  };
  return (
    <div>
      <div className="mb-8">
        <Title level={2} className="!m-0">
          {t("dashboard.title", { name: "Daniel Sullivan" })}
        </Title>
        <Text className="!m-0">{t("dashboard.subTitle")}</Text>
      </div>
      <Row gutter={16}>
        <Col lg={16} xs={24}>
          <Card>
            <div className="header flex flex-row justify-between items-center">
              <Title level={3} className="m-0" >
                {t("dashboard.appointmentsStats")}
              </Title>
              <Dropdown menu={menuProps}>
                <AppButton type="primary">
                  <Space>
                    {t("dashboard.statsView")}
                    <DownOutlined />
                  </Space>
                </AppButton>
              </Dropdown>
            </div>
            <div style={{ height: 400 }}>
              <Bar data={appointmentsStatsData(t)} options={appointmentsStatsOptions} />
            </div>
          </Card>
          <div className="mt-8">
          <Title level={3} className="m-0">
            {t("dashboard.publications")}
          </Title>
          {publicationsDashoard?.map((item) => (
            <div className="mb-4" key={item?.title}>
              <Card bordered={false}>
                <Row gutter={16} >
                  <Col className="flex items-center" lg={12} xs={24}>
                    <Avatar size={55} src="https://i.pravatar.cc/300">
                      {item?.title?.split(" ")[0]?.charAt(0)}
                      {item?.title?.split(" ")[1]?.charAt(0)}
                    </Avatar>
                    <div className="ml-3">
                      <Title level={5} className="m-0 !mb-0">
                        {item?.title}
                      </Title>
                    </div>
                  </Col>
                  <Col
                  lg={12}
                  xs={24}
                    className="flex items-center justify-start"
                  >
                    <Text className="!mb-0 whitespace-nowrap !mr-2 text-slate-500">
                      {t("dashboard.facility")}:
                    </Text>
                    <Title level={5} className="!m-0">
                        {item?.title}
                      </Title>
                  </Col>
                </Row>
              </Card>
            </div>
          ))}
        </div>
        </Col>
        <Col lg={8} xs={24}>
          <Title level={3} className="m-0">
            {t("dashboard.upcomingAppointments")}
          </Title>
          {appointmentsDashboard?.map((item) => (
            <div className="mb-4" key={item?.doctor}>
              <Card bordered={false}>
                <div className="flex justify-between ">
                  <div className="flex items-center">
                    <Avatar size={55} src="https://i.pravatar.cc/300">
                      {item?.doctor.split(" ")[0]?.charAt(0)}
                      {item?.doctor.split(" ")[1]?.charAt(0)}
                    </Avatar>
                    <div className="ml-3">
                      <Title level={5} className="m-0 !mb-0">
                        {item?.doctor}
                      </Title>
                      <Text className="m-0">{item?.type}</Text>
                    </div>
                  </div>
                  <div
                    className="flex w-10 h-10 items-center justify-center hover:cursor-pointer rounded-full"
                    style={{ backgroundColor: ACTION_COLORS.VIEW }}
                  >
                    <VideoCamera />
                  </div>
                </div>
                <div className="mt-4 flex flex-row justify-center p-2 items-center gap-2 hover:cursor-pointer rounded-md bg-slate-100">
                  <Clock />
                  <Text className="!mt-1">{item?.time}</Text>
                </div>
              </Card>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
