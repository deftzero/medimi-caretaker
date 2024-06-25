import { Link, useParams } from "react-router-dom";
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react'
import { IUser } from "../../../interfaces";
import { usersData } from "../../../data";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title } = Typography;


export default function User() {

  const { id } = useParams();
  const { t } = useTranslation()
  const data: IUser = usersData.find((item: IUser) => item.id === id)!

  return (
    <div className='space-y-5'>
      <div className='flex flex-row items-center gap-5'>
        <Link to={'/users'}>
          <ChevronLeft />
        </Link>
        <Title level={3} className='mt-2'>
          {t('user.title')}
        </Title>
      </div>

      <div className="bg-white p-5 rounded-md">
        <Details data={data!} />
      </div>
    </div>
  )
}


function Details({ data }: { data: IUser }) {
  return (
    <h1>
      {data?.firstName + ' ' + data?.lastName}
    </h1>
  )
}