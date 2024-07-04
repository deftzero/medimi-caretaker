import { Input, Select, Space, Table, TableProps, Typography } from "antd";
import { useTranslation } from "react-i18next";
import Download from "../../../assets/icons/download.svg?react";
import Search from "../../../assets/icons/search.svg?react";
import ArrowRight from "../../../assets/icons/arrow-right.svg?react";
import Eye from "../../../assets/icons/eye.svg?react";
import Pencil from "../../../assets/icons/pencil.svg?react";
import AppButton from "../../../components/ui/AppButton";
import Reload from "../../../assets/icons/reload.svg?react";
import { patientsData, serviceOptions } from "../../../data";
import { IPatient } from "../../../interfaces";
import ActionButton from "../../../components/ui/ActionButton";
import { Link } from "react-router-dom";
import { ACTION_COLORS } from "../../../config/constants";
import { format } from "date-fns";
import ConsultationRegisterModal from "../../../components/patients/ConsultationRegister";
import { useState } from "react";

const { Title } = Typography;


export default function Patients() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };


  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className="mt-3">
          {t("patients.title")}
        </Title>
        <Space>
          <AppButton size="small" icon={<Download />}>
            {t("patients.download")}
          </AppButton>
          <AppButton type="primary" size="small" icon={<ArrowRight />} onClick={() => setVisible(true)}>
            {t("patients.generate")}
          </AppButton>
        </Space>
      </div>

      <div className="content-wrapper">
        <div className="bg-white p-5 rounded-md space-y-5">
          <div className="header flex flex-row justify-between items-center">
            <Input
              prefix={<Search />}
              placeholder="Search..."
              style={{ maxWidth: "300px" }}
            />
            <Select className="w-32" placeholder={t("users.service")}>
              {serviceOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <PatientsTable data={patientsData} />
      </div>
      <ConsultationRegisterModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false)}
      />
    </div>
  )
}


function PatientsTable({ data }: { data: IPatient[] }) {

  const { t } = useTranslation();

  const columns: TableProps<IPatient>["columns"] = [
    {
      title: t("patients.table.name"),
      key: "name",
      render: (data) => (
        <Link
          className="text-slate-800 hover:text-secondary"
          to={`/patients/${data.id}`}
        >
          {data.firstName + " " + data.lastName}
        </Link>
      ),
    },
    {
      title: t("patients.table.dob"),
      dataIndex: "dob",
      key: "dob",
      render: (date: any) => format(new Date(date), 'dd-MM-yyyy')
    },
    {
      title: t("patients.table.address"),
      dataIndex: "address",
      key: "address",
    },
    {
      title: t("patients.table.phoneNumber"),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: t("patients.table.email"),
      dataIndex: "email",
      key: "email",
    },
    {
      title: t("patients.table.actions"),
      render: (data, mainObj) => {
        return (
          <Space>
            <Link
              className="text-slate-800 hover:text-secondary"
              to={`/patients/${data.id}`}
            >
              <ActionButton
                background={ACTION_COLORS.VIEW}
                icon={<Eye />}
                onClick={() => console.log(data)}
              />
            </Link>
            <ActionButton
              background={ACTION_COLORS.EDIT}
              icon={<Pencil />}
            />
            <ActionButton background={ACTION_COLORS.DELETE} icon={<Reload />} />
          </Space>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
