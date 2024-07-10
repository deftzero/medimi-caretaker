import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button, Select, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import {
  eventsData,
  motivesStatusOptions,
  serviceOptions,
} from "../../../data";
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
import NewAppointmentModal from "./CreateAppointment";
import AppointmentDetailsModal from "./AppointmentDetailsModal";
import { format } from "date-fns";

const { Text, Title } = Typography;

const Agenda = () => {
  const { t } = useTranslation();
  const calendarRef = useRef<any>();
  const [currentView, setCurrentView] = useState("dayGridMonth");
  const [date, setDate] = useState("");
  const [newAppointmentModal, setNewAppointmentModal] = useState(false);
  const [appointmentDetailsModal, setAppointmentDetailsModal] = useState(false);

  const handleViewChange = (view: string) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
    console.log(calendarApi.changeView(view));
    setCurrentView(view);
  };
  const handleGetRange = () => {
    const calendarApi = calendarRef.current.getApi();
    const view = calendarApi.view;
    const start = view.activeStart;
    const end = view.activeEnd;
    const formattedStart = format(new Date(start), "dd");
    const formattedEnd = format(new Date(end), "dd MMM yyyy");
    const formattedMonth = format(new Date(start), "MMM");

    // Check if start and end dates are in the same month and year
    if (
      format(new Date(start), "MMM yyyy") === format(new Date(end), "MMM yyyy")
    ) {
      setDate(`${formattedStart} - ${formattedEnd}`)
      return `${formattedStart} - ${formattedEnd}`;
    } else {
      setDate(`${formattedStart} ${formattedMonth} - ${formattedEnd}`)
      return `${formattedStart} ${formattedMonth} - ${formattedEnd}`;
    }
  };
  useEffect(() => {
    handleGetRange();
    }, [])
  
  return (
    <div className="p-4">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className="mt-3">
          {t("agenda.title")}
        </Title>
        <AppButton
          type="primary"
          size="small"
          icon={<Plus />}
          onClick={() => setNewAppointmentModal(true)}
        >
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
              <Text strong>{date}</Text>
              <ActionButton
                background={ACTION_COLORS.VIEW}
                icon={<LeftOutlined />}
                onClick={() => {
                  const api = calendarRef.current.getApi();
                  api.prev();
                  handleGetRange();
                }}
              />
              <ActionButton
                background={ACTION_COLORS.VIEW}
                icon={<RightOutlined />}
                onClick={() => {
                  const api = calendarRef.current.getApi();
                  api.next();
                  handleGetRange();
                }}
              />
            </Space>
            <Space>
              <Button
                onClick={() => handleViewChange("dayGridMonth")}
                className={`${currentView === "dayGridMonth" ? '!text-white !bg-primary' : '!text-black !bg-[#F3F0FE]'} h-7 border-0 rounded-md flex items-center `}
                icon={<AppstoreOutlined style={{ fontSize: 16 }} />}
                >
                {t("agenda.month")}
              </Button>
              <Button
                className={`${currentView === "timeGridWeek" ? '!text-white !bg-primary' : '!text-black !bg-[#F3F0FE]'} h-7 border-0 rounded-md flex items-center `}
                icon={<UnorderedListOutlined style={{ fontSize: 16 }} />}
              onClick={() => handleViewChange("timeGridWeek")}
                >
                {t("agenda.week")}
              </Button>
              <Button
                className={`${currentView === "timeGridDay" ? '!text-white !bg-primary' : '!text-black !bg-[#F3F0FE]'} h-7 border-0 rounded-md flex items-center `}
                icon={<MenuOutlined style={{ fontSize: 16 }} />}
              onClick={() => handleViewChange("timeGridDay")}
                >
                {t("agenda.day")}
              </Button>
            </Space>
          </div>
          <div className={currentView}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={currentView}
            ref={calendarRef}
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
            eventContent={(eventInfo: any) => {
              const start = new Date(eventInfo.event.start);
              const end = new Date(eventInfo.event.end);

              return (
                <div
                  className={`${
                    eventInfo.event.extendedProps?.video
                      ? "bg-primary"
                      : "bg-green-300"
                  } flex justify-between p-2 h-full border-0 !border-l-4 border-primary border-solid`}
                  onClick={() => setAppointmentDetailsModal(true)}
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
      <NewAppointmentModal
        visible={newAppointmentModal}
        onClose={() => setNewAppointmentModal(false)}
      />
      <AppointmentDetailsModal
        visible={appointmentDetailsModal}
        onClose={() => setAppointmentDetailsModal(false)}
      />
    </div>
  );
};

export default Agenda;
