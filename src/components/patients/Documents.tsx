import { Input, Space, Table, TableProps, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { IPatient, IPatientDocument } from "../../interfaces";
import ActionButton from "../ui/ActionButton";
import AppButton from "../ui/AppButton";
import Hospital from "../../assets/icons/hospital.svg?react";
import Download from "../../assets/icons/download.svg?react";
import Filter from "../../assets/icons/filter-lines.svg?react";
import Search from "../../assets/icons/search.svg?react";
import { ACTION_COLORS } from "../../config/constants";

const { Text } = Typography;


export default function Documents({ data }: { data: IPatient }) {
  const { t } = useTranslation();

  const columns: TableProps<IPatientDocument>["columns"] = [
    {
      title: t("patient.tabs.documents.table.type"),
      key: 'type',
      dataIndex: 'type'
    },
    {
      title: t("patient.tabs.documents.table.by"),
      render: (item: any) => (
        <>
          <Space>
            <Text>
              {item.by}
            </Text>
            {item.hospital && <Hospital />}
          </Space>
        </>
      )
    },
    {
      title: t("patient.tabs.documents.table.service"),
      key: 'service',
      dataIndex: 'service'
    },
    {
      title: t("patient.tabs.consultations.table.actions"),
      render: (data) => {
        return (
          <Space>
            <ActionButton
              background={ACTION_COLORS.EDIT}
              icon={<Download />}
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
      <Table columns={columns} dataSource={data.documents} />
    </div>
  )
}