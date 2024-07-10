import React from "react";
import { Modal, Typography, Avatar } from "antd";
import { useTranslation } from "react-i18next";
import { INewAppointmentModalProps } from "../../../interfaces";
import AppButton from "../../../components/ui/AppButton";

const { Title, Text } = Typography;

const AppointmentDetailsModal: React.FC<INewAppointmentModalProps> = ({
  visible,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      className="appointment-details-modal"
      centered
    >
      <Title className="!m-0 !mb-3" level={4}>
        {t("agenda.details.title")}
      </Title>
      <Title level={5}>{t("agenda.details.patientInfoTitle")}</Title>
      <div className="mb-4 p-4 bg-blue-50 rounded-lg">
        <div>
          <Avatar src="https://i.pravatar.cc/300" size={50}>
            {"item?.doctor".split(" ")[0]?.charAt(0)}
            {"item?.doctor".split(" ")[1]?.charAt(0)}
          </Avatar>
        </div>
        <div className="flex flex-wrap gap-4 mt-3">
          <div>
            <Text className="block text-gray-800 text-[12px]">ID</Text>
            <Text strong>123456</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.firstName")}</Text>
            <Text strong>John</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.lastName")}</Text>
            <Text strong>Doe</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.dateOfBirth")}</Text>
            <Text strong>6/03/2024</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.phoneNumber")}</Text>
            <Text strong>772618212</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.email")}</Text>
            <Text strong>johndoe@example.com</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.address")}</Text>
            <Text strong>123 Main Street</Text>
          </div>
        </div>
      </div>

        <Title level={5} className="!m-0 !mb-3">{t("agenda.details.appointmentInfoTitle")}</Title>
      <div className="mb-4 p-4 bg-blue-50 rounded-lg">
        <div className="flex flex-wrap gap-4">
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.doctor")}</Text>
            <Text strong>Dr. Smith</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.appointmentType")}</Text>
            <Text strong>Check-up</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">
              {t("agenda.details.appointmentReason")}
            </Text>
            <Text strong>Routine check-up</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.date")}</Text>
            <Text strong>6/03/2024</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.time")}</Text>
            <Text strong>10:00 AM</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.phoneNumber")}</Text>
            <Text strong>772618212</Text>
          </div>
          <div>
            <Text className="block text-gray-800 text-[12px]">{t("agenda.details.address")}</Text>
            <Text strong>123 Main Street</Text>
          </div>
        </div>
      </div>

        <Title level={5} className="!m-0 !mb-3">{t("agenda.details.preInfoTitle")}</Title>
      <div className="mb-4 p-4 bg-blue-50 rounded-lg">
        <Text>{t("agenda.details.preInfoText")}</Text>
      </div>

      <div className="flex justify-end space-x-4">
        <AppButton onClick={onClose}>{t("agenda.details.cancel")}</AppButton>
        <AppButton type="primary" success>{t("agenda.details.modify")}</AppButton>
        <AppButton type="primary">
          {t("agenda.details.start")}
        </AppButton>
      </div>
    </Modal>
  );
};

export default AppointmentDetailsModal;
