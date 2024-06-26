import { Link, useParams } from "react-router-dom";
import ChevronLeft from "../../../assets/icons/chevron-left.svg?react";
import Pencil from "../../../assets/icons/pencil.svg?react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { diagnosisData } from "../../../data";
import { IDiagnosis } from "../../../interfaces";
import AppButton from "../../../components/ui/AppButton";

const { Title, Text } = Typography;

export default function Diagnostic() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const data: IDiagnosis = diagnosisData.find(
    (item: IDiagnosis) => item?.id === id
  )!;

  return (
    <div className="space-y-5">
      <div className="flex flex-row items-center gap-5">
        <Link to={"/diagnostics"}>
          <ChevronLeft />
        </Link>
        <Title level={3} className="mt-2">
          {t("singleDiagnosis.title", { name: data?.wording })}
        </Title>
      </div>

      <div className="bg-white p-5 rounded-md">
        <Details data={data!} />
      </div>
    </div>
  );
}

function Details({ data }: { data: IDiagnosis }) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-start p-5 rounded-md bg-blue-50">
      <div className="2xl:w-1/4, lg:w-2/5 sm:3/5 space-y-2">
        <div className="flex">
          <Text  className="w-1/4">{t('singleDiagnosis.details.wording')}:</Text>
          <Text strong className="w-3/4 text-right">{data?.wording}</Text>
        </div>
        <div className="flex">
          <Text  className="w-1/4">{t('singleDiagnosis.details.service')}:</Text>
          <Text strong className="w-3/4 text-right">{data?.service}</Text>
        </div>
        <div className="flex">
          <Text className="w-1/4">{t('singleDiagnosis.details.description')}:</Text>
          <Text strong className="w-3/4 text-right">{data?.id}</Text>
        </div>
      </div>
      <AppButton
        type="primary"
        size="small"
        icon={<Pencil />}
        onClick={() => {}}
      >
        {t("singleDiagnosis.edit")}
      </AppButton>
    </div>
  );
}
