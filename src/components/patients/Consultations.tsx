import { useTranslation } from "react-i18next";
import { IPatient, IPatientConsultation } from "../../interfaces";
import { Input, Space, Table, TableProps, Typography } from "antd";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import ActionButton from "../ui/ActionButton";
import Filter from "../../assets/icons/filter-lines.svg?react";
import Search from "../../assets/icons/search.svg?react";
import Eye from "../../assets/icons/eye.svg?react";
import Camera from "../../assets/icons/video-camera.svg?react";
import Communication from "../../assets/icons/users-communication.svg?react";
import Hospital from "../../assets/icons/hospital.svg?react";
import AppButton from "../ui/AppButton";
import { ACTION_COLORS } from "../../config/constants";

const { Text } = Typography;


export default function Consultation({ data }: { data: IPatient }) {
  const { t } = useTranslation();

  const columns: TableProps<IPatientConsultation>["columns"] = [
    {
      title: t("patient.tabs.consultations.table.date"),
      render: (item: any) => format(new Date(item.date), 'dd/MM/yyyy')
    },
    {
      title: t("patient.tabs.consultations.table.doctor"),
      render: (item: any) => (
        <>
          <Space>
            <Text>
              {item.doctor}
            </Text>
            {item.hospital && <Hospital />}
          </Space>
        </>
      )
    },
    {
      title: t("patient.tabs.consultations.table.doctor"),
      key: 'service',
      dataIndex: 'service'
    },
    {
      title: t("patient.tabs.consultations.table.type"),
      render: (item: any) => item.type === 'Online' ? <Camera /> : <Communication />
    },
    {
      title: t("patient.tabs.consultations.table.diagnostic"),
      key: 'diagnostic',
      dataIndex: 'diagnostic'
    },
    {
      title: t("patient.tabs.consultations.table.actions"),
      render: (data, mainObj) => {
        return (
          <Space>
            <ActionButton
              background={ACTION_COLORS.VIEW}
              icon={<Eye />}
              onClick={() => console.log(data)}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <div className="content-wrapper">
      <div className="bg-white p-5 rounded-md space-y-5">
        <div className="header flex flex-row justify-between items-center">
          <Input
            prefix={<Search />}
            placeholder={t('patient.tabs.consultations.search')}
            style={{ maxWidth: "300px" }}
          />
          <AppButton size="small" icon={<Filter />}>
            {t('patient.tabs.consultations.filters')}
          </AppButton>
        </div>
      </div>
      <Table columns={columns} dataSource={data.consultations} />
    </div>
  )
}