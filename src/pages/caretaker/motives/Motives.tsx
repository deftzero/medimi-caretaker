import { Input, Select, Space, Table, TableProps, Typography } from "antd";
import AppButton from "../../../components/ui/AppButton";
import Search from "../../../assets/icons/search.svg?react";
import Eye from "../../../assets/icons/eye.svg?react";
import Pencil from "../../../assets/icons/pencil.svg?react";
import Reload from "../../../assets/icons/reload.svg?react";
import Plus from "../../../assets/icons/plus.svg?react";
import Download from "../../../assets/icons/download.svg?react";
import {
  serviceOptions,
  motivesStatusOptions,
  motivesData,
} from "../../../data";
import { IMotive } from "../../../interfaces";
import { ACTION_COLORS } from "../../../config/constants";
import ActionButton from "../../../components/ui/ActionButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import UpsertMotiveModal from "./UpsertMotive";


const { Title } = Typography;

export default function Motives() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
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

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  const filteredData = motivesData.filter((item) => {
    return (
      (!filterService || item.service === filterService) &&
      (!filterStatus || item.status === filterStatus)
    );
  });

  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className="mt-3">
          {t("motives.title")}
        </Title>
        <Space>
          <AppButton size="small" icon={<Download />}>
            {t("motives.download")}
          </AppButton>
          <AppButton
            type="primary"
            size="small"
            icon={<Plus />}
            onClick={() => setVisible(true)}
          >
            {t("motives.create")}
          </AppButton>
        </Space>
      </div>
      <Space>
        <Select
          value={filterService}
          onChange={handleServiceChange}
          placeholder="Service"
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
          placeholder="Status"
          className="w-32"
        >
          {motivesStatusOptions.map((item) => (
            <Select.Option key={item.id} value={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
        <AppButton icon={<Plus />} type="link" className="!text-slate-500" onClick={handleClearFilters}>
          {t("motives.clearFilters")}
        </AppButton>
      </Space>
      <div className="content-wrapper">
        <div className="bg-white p-5 rounded-md space-y-5">
          <div className="header flex flex-row items-center">
            <Input
              prefix={<Search />}
              placeholder="Search..."
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
        <MotivesTable data={filteredData} />
      </div>
      <UpsertMotiveModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
}

function MotivesTable({ data }: { data: IMotive[] }) {
  const { t } = useTranslation();
  const columns: TableProps<IMotive>["columns"] = [
    {
      title: t("motives.table.wording"),
      dataIndex: "wording",
      key: "wording",
    },
    {
      title: t("motives.table.service"),
      dataIndex: "service",
      key: "service",
    },
    {
      title: t("motives.table.price"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: t("motives.table.duration"),
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: t("motives.table.actions"),
      render: (data, record) => {
        return (
          <Space>
            <ActionButton
              background={ACTION_COLORS.VIEW}
              icon={<Eye />}
              onClick={() => console.log("View", data)}
            />
            <ActionButton
              background={ACTION_COLORS.EDIT}
              icon={<Pencil />}
              onClick={() => console.log("Edit", record)}
            />
            <ActionButton background={ACTION_COLORS.DELETE} icon={<Reload />} />
          </Space>
        );
      },
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  );
}
