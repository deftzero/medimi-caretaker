import { Input, Select, Space, Table, TableProps, Typography } from "antd";
import AppButton from "../../../components/ui/AppButton";
import Search from "../../../assets/icons/search.svg?react";
import Eye from "../../../assets/icons/eye.svg?react";
import Pencil from "../../../assets/icons/pencil.svg?react";
import Trash from "../../../assets/icons/reload.svg?react";
import Plus from "../../../assets/icons/plus.svg?react";
import Download from "../../../assets/icons/download.svg?react";
import { servicesData, servicesDropdownOptions } from "../../../data";
import { IService } from "../../../interfaces";
import { ACTION_COLORS } from "../../../config/constants";
import ActionButton from "../../../components/ui/ActionButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import UpsertServiceModal from "./UpsertService";

const { Title } = Typography;

export default function Services() {
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
          {t("services.title")}
        </Title>
        <Space>
          <AppButton size="small" icon={<Download />}>
            {t("services.download")}
          </AppButton>
          <AppButton type="primary" size="small" icon={<Plus />} onClick={() => setVisible(true)}>
            {t("services.create")}
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
            <Select className="w-32" placeholder={t("services.service")}>
              {servicesDropdownOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <ServicesTable data={servicesData} />
      </div>
      <UpsertServiceModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
}

function ServicesTable({ data }: { data: IService[] }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  const columns: TableProps<IService>["columns"] = [
    {
      title: t("services.table.name"),
      dataIndex: "name",
      key: "name",
      render: (data,obj) => {
        return <Link
          className="text-slate-800 hover:text-secondary" to={`/services/${obj?.key}`}>
          {data}
        </Link>}
    },
    {
      title: t("services.table.headOfService"),
      dataIndex: "headOfService",
      key: "headOfService",
    },
    {
      title: t("services.table.actions"),
      render: (data, mainObj) => {
        return (
          <Space>
            <ActionButton
              background={ACTION_COLORS.VIEW}
              icon={<Eye />}
              onClick={() => console.log(data)}
            />
            <ActionButton
              background={ACTION_COLORS.EDIT}
              icon={<Pencil />}
              onClick={() => setVisible(true)}
            />
            <ActionButton background={ACTION_COLORS.DELETE} icon={<Trash />} />
            <UpsertServiceModal
              visible={visible}
              onCreate={onCreate}
              onCancel={() => setVisible(false)}
              initialValues={mainObj}
            />
          </Space>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}
