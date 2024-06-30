import { Layout } from 'antd';
import Logo from '../assets/medimi-logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Dashboard from '../assets/icons/sidebar/dashboard.svg?react'
import Doctors from '../assets/icons/sidebar/doctors.svg?react'
import Patients from '../assets/icons/sidebar/patients.svg?react'
import Agenda from '../assets/icons/sidebar/agenda.svg?react'
import Services from '../assets/icons/sidebar/services.svg?react'
import Motives from '../assets/icons/sidebar/motives.svg?react'
import Diagnostics from '../assets/icons/sidebar/diagnostics.svg?react'
import Users from '../assets/icons/sidebar/users.svg?react'
import StatisticsIndicators from '../assets/icons/sidebar/statistic-indicators.svg?react'
import LiteAccounting from '../assets/icons/sidebar/lite-accounting.svg?react'
import InformationQueue from '../assets/icons/sidebar/information-queue.svg?react'

const { Sider } = Layout;

const siderStyle: any = {
  backgroundColor: '#1D3751',
  borderRight: '1px solid #e2e8f0',
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  // zIndex: 20
};

export interface ISidebarLink {
  key: number
  title: string;
  href: string;
  icon?: any;
}

export function Sidebar({ collapsed }: { collapsed: any }) {
  const { t } = useTranslation();

  const sidebarItems: ISidebarLink[] = [
    {
      key: 1,
      icon: Dashboard,
      title: t('navigation.dashboard'),
      href: "/dashboard"
    },
    {
      key: 2,
      icon: Doctors,
      title: t('navigation.doctors'),
      href: "/doctors"
    },
    {
      key: 3,
      icon: Patients,
      title: t('navigation.patients'),
      href: "/patients"
    },
    {
      key: 4,
      icon: Agenda,
      title: t('navigation.agenda'),
      href: "/agenda"
    },
    {
      key: 5,
      icon: Services,
      title: t('navigation.services'),
      href: "/services"
    },
    {
      key: 6,
      icon: Motives,
      title: t('navigation.motives'),
      href: "/motives"
    },
    {
      key: 7,
      icon: Diagnostics,
      title: t('navigation.diagnostics'),
      href: "/diagnostics"
    },
    {
      key: 8,
      icon: Users,
      title: t('navigation.users'),
      href: "/users"
    },
    {
      key: 9,
      icon: StatisticsIndicators,
      title: t('navigation.statisticsIndicators'),
      href: "/statistics-indicators"
    },
    {
      key: 10,
      icon: LiteAccounting,
      title: t('navigation.liteAccounting'),
      href: "/lite-accounting"
    },
    {
      key: 11,
      icon: InformationQueue,
      title: t('navigation.informationQueue'),
      href: "/information-queue"
    },
  ]

  return (
    <Sider style={siderStyle} collapsed={collapsed}>
      <div className='flex justify-center w-full mt-5'>
        <img src={Logo} className='h-16' />
      </div>
      <ul className="list-none space-y-2 px-3 mt-8">
        {sidebarItems.map((link: any) =>
          <li key={link.title}>
            <SidebarLink collapsed={collapsed} link={link} />
          </li>
        )}
      </ul>
    </Sider>
  )
}

const SidebarLink = ({
  collapsed,
  link,
}: {
  collapsed: boolean,
  link: ISidebarLink;
}) => {

  const activeIconColor = '#64748b'
  const iconColor = '#f1f5f9'

  const location = useLocation()

  return (
    <Link
      to={link.href}
      className={`group transition-colors py-2.5 pl-4 inline-block hover:bg-popover text-xs hover:shadow rounded-md w-full${location.pathname.includes(link.href) ? " font-semibold bg-slate-100 text-primary hover:bg-slate-100 hover:text-primary" : " text-slate-100 hover:text-slate-100"
        }`}
    >
      <div className="flex items-center space-x-2">
        <link.icon stroke={location.pathname.includes(link.href) ? activeIconColor : iconColor} />
        {!collapsed && (
          <span>{link.title}</span>
        )}
      </div>
    </Link>
  );
};