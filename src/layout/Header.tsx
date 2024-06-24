import { Layout, Input, Avatar, Dropdown, MenuProps, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import Search from '../assets/icons/search.svg?react'

const { Header } = Layout;

const headerStyles = {
  borderBottom: '1px solid #e2e8f0',
  padding: '15px 20px',
  background: '#FFFFFF'
}

export function AppHeader({ name = 'Jon Jones' }: { name?: string }) {


  const items: MenuProps['items'] = [
    {
      label: <a href="#">Settings</a>,
      key: '0',
    },
    {
      label: <a href="#">Profile</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Logout',
      key: '3',
    },
  ];

  return (
    <Header style={headerStyles} className='flex justify-between sticky top-0 z-10'>
      <Input prefix={<Search width={20} />} className='bg-slate-50' placeholder='Search' style={{ maxWidth: '400px' }} />
      <div className='flex flex-row items-center gap-3'>
        <ToggleLanguage />
        {/* <Notification /> */}
        <Dropdown menu={{ items }} trigger={['click']}>
          <div className='flex flex-row leading-3 p-1 items-center gap-2 hover:cursor-pointer rounded-full bg-slate-200'>
            <Avatar src="https://i.pravatar.cc/300">{name.split(' ')[0]?.charAt(0)}{name.split(' ')[1]?.charAt(0)}</Avatar>
            <span>{name}</span>
            <div className='ms-2 me-2'>
              {/* <ChevronDown height={7} /> */}
            </div>
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}


function ToggleLanguage() {
  const { i18n } = useTranslation()

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      defaultValue="EN"
      onChange={handleChange}
      style={{ width: 100 }}
      options={[{ value: 'en', label: 'EN' }, { value: 'fr', label: 'FR' }]}
    />
  )
}