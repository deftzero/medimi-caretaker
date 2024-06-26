import { Input, Select, Space, Table, TableProps, Typography } from "antd";
import AppButton from "../../../components/ui/AppButton";
import Search from '../../../assets/icons/search.svg?react';
import Eye from '../../../assets/icons/eye.svg?react';
import Pencil from '../../../assets/icons/pencil.svg?react';
import Reload from '../../../assets/icons/reload.svg?react';
import Plus from '../../../assets/icons/plus.svg?react';
import Download from '../../../assets/icons/download.svg?react';
import { serviceOptions, diagnosisData } from "../../../data"; // Update the data source
import { IDiagnosis } from "../../../interfaces"; // Update the interface
import { ACTION_COLORS } from "../../../config/constants";
import ActionButton from "../../../components/ui/ActionButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import CreateDiagnosisModal from "./CreateDiagnosisModal";

const { Title } = Typography;

export default function Diagnostics() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>
          {t('diagnosis.title')}
        </Title>
        <Space>
          <AppButton size='small' icon={<Download />}>
            {t('diagnosis.download')}
          </AppButton>
          <AppButton type='primary' size='small' icon={<Plus />} onClick={()=> setVisible(true)}>
            {t('diagnosis.create')}
          </AppButton>
        </Space>
      </div>

      <div className="content-wrapper">
        <div className="bg-white p-5 rounded-md space-y-5">
          <div className="header flex flex-row justify-between items-center">
            <Input prefix={<Search />} placeholder='Search...' style={{ maxWidth: '300px' }} />
            <Select className="w-32" placeholder={t('diagnosis.service')}>
              {serviceOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <DiagnosisTable data={diagnosisData} />
      </div>
      <CreateDiagnosisModal
        visible={visible}
        onCreate={onCreate}
        onCancel={() => setVisible(false)}
      />
    </div>
  )
}

function DiagnosisTable({ data }: { data: IDiagnosis[] }) {
  const { t } = useTranslation();

  const columns: TableProps<IDiagnosis>['columns'] = [
    {
      title: t('diagnosis.table.wording'),
      dataIndex: 'wording',
      key: 'wording',
      render: (data,obj) => {
      return <Link
        className="text-slate-800 hover:text-secondary" to={`/diagnostics/${obj?.id}`}>
        {data}
      </Link>}
    },
    {
      title: t('diagnosis.table.service'),
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: t('diagnosis.table.actions'),
      render: () => {
        return (
          <Space>
            <ActionButton background={ACTION_COLORS.VIEW} icon={<Eye />} onClick={() => console.log('View')} />
            <ActionButton background={ACTION_COLORS.EDIT} icon={<Pencil />} onClick={() => console.log('Edit')} />
            <ActionButton background={ACTION_COLORS.DELETE} icon={<Reload />} onClick={() => console.log('Reload')} />
          </Space>
        )
      }
    },
  ]

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
}
