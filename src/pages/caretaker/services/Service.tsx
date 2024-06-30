import { Link, useParams } from "react-router-dom";
import ArrowLeft from "../../../assets/icons/arrow-left.svg?react";
import Pencil from "../../../assets/icons/white-pencil.svg?react";
import { Col, Image, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { servicesData } from "../../../data";
import { IService } from "../../../interfaces";
import AppButton from "../../../components/ui/AppButton";
import { useState } from "react";
import UpsertServiceModal from "./UpsertService";
import ServiceStamp from '../../../assets/service-stamp.png'

const { Title, Text } = Typography;

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const data: IService = servicesData.find(
    (item: IService) => item?.key === id
  )!;

  const handleEdit = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-row items-center gap-5">
        <Link to={"/services"}>
          <ArrowLeft />
        </Link>
        <Title level={3} className="mt-2">
        {t("serviceDetails.title", { name: data?.name })}
        </Title>
      </div>

      <div className="bg-white p-5 rounded-md">
        <Details data={data!} onEdit={handleEdit} />
      </div>

      <UpsertServiceModal
        visible={visible}
        onCreate={handleCreate}
        onCancel={handleCancel}
        initialValues={data}
      />
    </div>
  );
}

function Details({ data, onEdit }: { data: IService; onEdit: () => void }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-5 bg-blue-50 p-5 rounded-xl">
      <div className="flex justify-between items-start">
        <div className="space-y-2 w-2/5">
          <div className="flex">
            <Text className="w-1/3">
              {t("serviceDetails.details.wording")}:
            </Text>
            <Text strong className="w-2/3 text-right">
              {data?.name}
            </Text>
          </div>
          <div className="flex">
            <Text className="w-1/3">
              {t("serviceDetails.details.description")}:
            </Text>
            <Text strong className="w-2/3 text-right">
              {data?.description}
            </Text>
          </div>
          <div className="flex">
            <Text className="w-1/3">
              {t("serviceDetails.details.headOfService")}:
            </Text>
            <Text strong className="w-2/3 text-right">
              {data?.headOfService}
            </Text>
          </div>
          <div className="flex">
            <Text className="w-1/3">
              {t("serviceDetails.details.serviceAssistants")}:
            </Text>
            <Text strong className="w-2/3 text-right">
              {data?.serviceAssistants}
            </Text>
          </div>
        </div>
        <AppButton
          type="primary"
          size="small"
          icon={<Pencil />}
          onClick={onEdit}
        >
          {t("serviceDetails.edit")}
        </AppButton>
      </div>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className="p-5 rounded-xl bg-white">
            <Title level={4} className="!m-0">
              {t("serviceDetails.subSpecialities")}
            </Title>
            <ul className="!p-0">
              {data?.subSpecialities?.map((item: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
                  <Text strong>{item}</Text>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col span={12}>
          <div className="p-5 rounded-xl bg-white">
            <Title level={4} className="!m-0">
              {t("serviceDetails.expertises")}
            </Title>
            <ul className="!p-0">
              {data?.expertises?.map((item: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
                  <Text strong>{item}</Text>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col span={16}>
          <Title level={4} className="!m-0 !mb-2">{t("serviceDetails.stamp.title")}</Title>
          <div className="p-5 rounded-xl bg-white">
            <div className="space-y-2">
              <div className="flex">
                <Text className="w-1/3">
                  {t("serviceDetails.stamp.doctorsName")}:
                </Text>
                <Text strong className="w-2/3 text-right">
                  {data?.stamp?.doctorName}
                </Text>
              </div>
              <div className="flex">
                <Text className="w-1/3">
                  {t("serviceDetails.stamp.medicalFacility")}:
                </Text>
                <Text strong className="w-2/3 text-right">
                  {data?.stamp?.medicalFacility}
                </Text>
              </div>
              <div className="flex">
                <Text className="w-1/3">
                  {t("serviceDetails.stamp.dateOfVisit")}:
                </Text>
                <Text strong className="w-2/3 text-right">
                  {data?.stamp?.dateOfVisit}
                </Text>
              </div>
              <div className="flex">
                <Text className="w-1/3">
                  {t("serviceDetails.stamp.medicalLicense")}:
                </Text>
                <Text strong className="w-2/3 text-right">
                  {data?.stamp?.medicalLicense}
                </Text>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="my-4 flex justify-center">
          <Image src={ServiceStamp} width={100}  height={100} alt="Service Stamp" />
      </div>
    </div>
  );
}
