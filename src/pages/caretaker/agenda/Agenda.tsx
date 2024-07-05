import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Select, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { eventsData, motivesStatusOptions, serviceOptions } from "../../../data";
import AppButton from "../../../components/ui/AppButton";
import Clear from "../../../assets/icons/close.svg?react";
import TeamMeeting from "../../../assets/icons/video-camera.svg?react";
import Plus from "../../../assets/icons/plus.svg?react";
import ActionButton from "../../../components/ui/ActionButton";
import {
  LeftOutlined,
  RightOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { ACTION_COLORS } from "../../../config/constants";

const { Text,Title } = Typography;

const Agenda = () => {
  const { t } = useTranslation();
  const [currentView, setCurrentView] = useState("dayGridMonth");

  const handleViewChange = (view: any) => {
    setCurrentView(view);
  };

  return (
    <div className="p-4">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className="mt-3">
        {t("agenda.title")}
        </Title>
          <AppButton type="primary" size="small" icon={<Plus />} >
          {t("agenda.newAppointment")}
          </AppButton>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Space>
          <Select placeholder={t("agenda.service")} className="w-32">
            {serviceOptions.map((item: any) => (
              <Select.Option key={item.id} value={item.name}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
          <Select placeholder={t("agenda.doctor")} className="w-32">
            {motivesStatusOptions.map((item) => (
              <Select.Option key={item.id} value={item.name}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
          <AppButton icon={<Clear />} type="link" className="!text-slate-500">
            {t("motives.clearFilters")}
          </AppButton>
        </Space>
      </div>
      <div className="content-wrapper">
        <div className="bg-white py-5 rounded-md space-y-5">
          <div className="flex justify-between items-center mb-5 px-5">
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
            <Space>
              <ActionButton
                background={ACTION_COLORS.VIEW}
                onClick={() => handleViewChange("dayGridMonth")}
                icon={
                  <div className="p-1 flex justify-center items-center gap-2">
                    <AppstoreOutlined style={{ fontSize: 16 }} />
                    {t("agenda.month")}
                  </div>
                }
              />
              <ActionButton
                background={ACTION_COLORS.VIEW}
                onClick={() => handleViewChange("dayGridMonth")}
                icon={
                  <div className="p-1 flex justify-center items-center gap-2">
                    <UnorderedListOutlined style={{ fontSize: 16 }} />
                    {t("agenda.week")}
                  </div>
                }
              />
              <ActionButton
                background={ACTION_COLORS.VIEW}
                onClick={() => handleViewChange("dayGridMonth")}
                icon={
                  <div className="p-1 flex justify-center items-center gap-2">
                    <MenuOutlined style={{ fontSize: 16 }} />
                    {t("agenda.day")}
                  </div>
                }
              />
            </Space>
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={currentView}
            // headerToolbar={{
            //   left: "prev,next today",
            //   center: "title",
            //   right: "dayGridMonth,timeGridWeek,timeGridDay",
            // }}
            headerToolbar={false}
            events={eventsData}
            dayMaxEventRows={true}
            height="auto"
            dayCellContent={(cellInfo: any) => {
              const eventsForDay = cellInfo.view.calendar
                .getEvents()
                .filter((event: any) => {
                  const eventStart = new Date(event.start).setHours(0, 0, 0, 0);
                  const cellDate = new Date(cellInfo.date).setHours(0, 0, 0, 0);
                  return eventStart === cellDate;
                });
              return eventsForDay.length === 0 ? cellInfo?.dayNumberText : null;
            }}
            eventContent={(eventInfo:any) => {
              const start = new Date(eventInfo.event.start);
              const end = new Date(eventInfo.event.end);

              return (
                <div
                  className={`${
                    eventInfo.event.extendedProps?.video
                      ? "bg-primary"
                      : "bg-green-300"
                  } flex justify-between p-2 h-full border-0 !border-l-4 border-primary border-solid`}
                >
                  <div>
                    <div className="font-bold text-white">
                      {eventInfo?.event?.title}
                    </div>
                    <div className="text-white">
                    {start.getHours()}:
                      {start.getMinutes().toString().padStart(2, "0")} - 
                      {end.getHours()}:
                      {end.getMinutes().toString().padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-white/55 text-gray-800 rounded-full">
                    <TeamMeeting />
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Agenda;
