import AppButton from "../../../components/ui/AppButton";
import Search from "../../../assets/icons/search.svg?react";
import Eye from "../../../assets/icons/eye.svg?react";
import Pencil from "../../../assets/icons/pencil.svg?react";
import Reload from "../../../assets/icons/reload.svg?react";
import Filter from "../../../assets/icons/filter-lines.svg?react";
import Plus from "../../../assets/icons/plus.svg?react";
import Clear from "../../../assets/icons/close.svg?react";
import Download from "../../../assets/icons/download.svg?react";
import { Input, Select, Space, Table, TableProps, Tag, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { doctorsData, motivesStatusOptions, serviceOptions } from "../../../data";
import { useState } from "react";
import { IDoctor } from "../../../interfaces";
import ActionButton from "../../../components/ui/ActionButton";
import { ACTION_COLORS } from "../../../config/constants";
import UpsertDoctorModal from "./UpsertDoctorModal";
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function Doctors() {

  const { t } = useTranslation();

  const [filterService, setFilterService] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const handleServiceChange = (value: string) => {
    setFilterService(value);
  };

  const handleStatusChange = (value: string) => {
    setFilterStatus(value);
  };

  const handleClearFilters = () => {
    setFilterService(null);
    setFilterStatus(null);
  };

  const filteredData = doctorsData.filter((item) => {
    return (
      (!filterService || item.service === filterService) &&
      (!filterStatus || item.status === filterStatus)
    );
  });



  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className="mt-3">
          {t("doctors.title")}
        </Title>
        <Space>
          <AppButton size="small" icon={<Download />}>
            {t("doctors.download")}
          </AppButton>
          <AppButton
            type="primary"
            size="small"
            icon={<Plus />}
          >
            {t("doctors.create")}
          </AppButton>
        </Space>
      </div>
      <Space>
        <Select
          value={filterService}
          onChange={handleServiceChange}
          placeholder={t("doctors.service")}
          className="w-32"
        >
          {serviceOptions.map((item: any) => (
            <Select.Option key={item.id} value={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
        <Select
          value={filterStatus}
          onChange={handleStatusChange}
          placeholder={t("doctors.status")}
          className="w-32"
        >
          {motivesStatusOptions.map((item) => (
            <Select.Option key={item.id} value={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
        <AppButton icon={<Clear />} type="link" className="!text-slate-500" onClick={handleClearFilters}>
          {t("doctors.clear")}
        </AppButton>
      </Space>
      <div className="content-wrapper">
        <div className="bg-white p-5 rounded-md space-y-5">
          <div className="header flex flex-row justify-between items-center">
            <Input
              prefix={<Search />}
              placeholder={t("doctors.search") + '...'}
              style={{ maxWidth: "300px" }}
            />
            <AppButton size="small" icon={<Filter />}>
              {t("doctors.fukters")}
            </AppButton>
          </div>

        </div>
        <DoctorsTable data={filteredData} />
      </div>
    </div>
  )
}


function DoctorsTable({ data }: { data: IDoctor[] }) {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [doctor, setDoctor] = useState<IDoctor | null>(null);
  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  const onEditSelect = (payload: IDoctor) => {
    setDoctor(payload)
    setVisible(true)
  }


  const columns: TableProps<IDoctor>["columns"] = [
    {
      title: t("doctors.table.id"),
      dataIndex: "id",
      key: "id",
    },
    {
      title: t("doctors.table.name"),
      render: (data: IDoctor) => data.firstName + ' ' + data.lastName
    },
    {
      title: t("doctors.table.service"),
      dataIndex: "service",
      key: "service",
    },
    {
      title: t("doctors.table.status"),
      dataIndex: "status",
      key: "status",
      render: (value: string) => <Tag color="green">{value}</Tag>
    },
    {
      title: t("doctors.table.actions"),
      render: (data, record) => {
        return (
          <Space>
            <Link to={`/doctors/${record.id}`}>
              <ActionButton 
                background={ACTION_COLORS.VIEW}
                icon={<Eye />}
                onClick={() => console.log("View", data)}
              />
            </Link>
            <ActionButton
              background={ACTION_COLORS.EDIT}
              icon={<Pencil />}
              onClick={() => onEditSelect(record)}
            />
            <ActionButton background={ACTION_COLORS.DELETE} icon={<Reload />} />
          </Space>
        );
      },
    },
  ];





  return (
    <>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
      <UpsertDoctorModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false)}
        initialValues={doctor}
      />
    </>
  );
}