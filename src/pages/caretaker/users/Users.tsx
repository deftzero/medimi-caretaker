import { Input, Select, Space, Table, TableProps, Typography } from "antd";
import AppButton from "../../../components/ui/AppButton";
import Search from '../../../assets/icons/search.svg?react'
import Eye from '../../../assets/icons/eye.svg?react'
import Pencil from '../../../assets/icons/pencil.svg?react'
import Reload from '../../../assets/icons/reload.svg?react'
import Plus from '../../../assets/icons/plus.svg?react'
import Download from '../../../assets/icons/download.svg?react'
import { serviceOptions, usersData } from "../../../data";
import { IUser } from "../../../interfaces";
import { ACTION_COLORS } from "../../../config/constants";
import ActionButton from "../../../components/ui/ActionButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const { Title } = Typography;

export default function Users() {
  const { t } = useTranslation();

  return (

    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>
          {t('users.title')}
        </Title>
        <Space>
          <AppButton size='small' icon={<Download />}>
            {t('users.download')}
          </AppButton>
          <AppButton type='primary' size='small' icon={<Plus />}>
            {t('users.create')}
          </AppButton>
        </Space>
      </div>


      <div className="content-wrapper">
        <div className="bg-white p-5 rounded-md space-y-5">
          <div className="header flex flex-row justify-between items-center">
            <Input prefix={<Search />} placeholder='Search...' style={{ maxWidth: '300px' }} />
            <Select className="w-32" placeholder={t('users.service')}>
              {serviceOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <UsersTable data={usersData} />
      </div>
    </div>
  )
}




function UsersTable({ data }: { data: IUser[] }) {
  const { t } = useTranslation();


  const columns: TableProps<IUser>['columns'] = [
    {
      title: t('users.table.name'),
      key: 'name',
      render: (data) => <Link
        className="text-slate-800 hover:text-secondary" to={`/users/${data.id}`}>
        {data.firstName + ' ' + data.lastName}
      </Link>
    },
    {
      title: t('users.table.phoneNumber'),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: t('users.table.email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: t('users.table.roles'),
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: t('users.table.actions'),
      render: () => {
        return (
          <Space>
            <ActionButton background={ACTION_COLORS.VIEW} icon={<Eye />} onClick={() => console.log('Test')} />
            <ActionButton background={ACTION_COLORS.EDIT} icon={<Pencil />} />
            <ActionButton background={ACTION_COLORS.DELETE} icon={<Reload />} />
          </Space>
        )
      }
    },
  ]

  return <Table columns={columns} dataSource={data} />
}