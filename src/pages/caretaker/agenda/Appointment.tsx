import {
  Avatar,
  Typography,
  Input,
  List,
  Divider,
  Row,
  Col,
  Form,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  FilePdfOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Pencil from "../../../assets/icons/black-pencil.svg?react";
import { useTranslation } from "react-i18next";
import AppButton from "../../../components/ui/AppButton";
import { ACTION_COLORS } from "../../../config/constants";
import VideoCamera from "../../../assets/icons/video-camera.svg?react";
import Clock from "../../../assets/icons/clock.svg?react";
import { consultations, documents } from "../../../data";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Appointment = () => {
  const { t } = useTranslation();
  const [vitalInformationForm] = Form.useForm();
  return (
    <div className="p-4">
      <Title level={3} className="mt-3">
        {t("appointment.title")}
      </Title>
      <Row gutter={16}>
        {/* Patient Details Section */}
        <Col span={8}>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-center items-center mb-4 flex-col">
              <Avatar src="https://i.pravatar.cc/300" size={100}>
                {"item?.doctor".split(" ")[0]?.charAt(0)}
                {"item?.doctor".split(" ")[1]?.charAt(0)}
              </Avatar>
              <div>
                <Title level={4} className="!mt-3">
                  Luke Holland
                </Title>
              </div>
            </div>
            <Divider />
            <div>
              <Title level={4}>{t("appointment.patientDetails")}</Title>
              <div className="flex">
                <Avatar
                  size="small"
                  icon={<UserOutlined className="text-primary" />}
                  className="mr-2 bg-gray-100"
                />
                <div>
                  <Text type="secondary" className="block">
                    {t("appointment.patientDetailsData.id")}
                  </Text>
                  <Text strong>23091282</Text>
                </div>
              </div>
              <div className="flex">
                <Avatar
                  size="small"
                  icon={<MailOutlined className="text-primary" />}
                  className="mr-2 bg-gray-100"
                />
                <div>
                  <Text type="secondary" className="block">
                    {t("appointment.patientDetailsData.email")}
                  </Text>
                  <Text strong>lukeholland@mail.com</Text>
                </div>
              </div>
              <div className="flex">
                <Avatar
                  size="small"
                  icon={<PhoneOutlined className="text-primary" />}
                  className="mr-2 bg-gray-100"
                />
                <div>
                  <Text type="secondary" className="block">
                    {t("appointment.patientDetailsData.phoneNumber")}
                  </Text>
                  <Text strong>050 414 8778</Text>
                </div>
              </div>
              <div className="flex">
                <Avatar
                  size="small"
                  icon={<EnvironmentOutlined className="text-primary" />}
                  className="mr-2 bg-gray-100"
                />
                <div>
                  <Text type="secondary" className="block">
                    {t("appointment.patientDetailsData.address")}
                  </Text>
                  <Text strong>
                    32 Ridge Street Rocky Mount California - 24567, USA
                  </Text>
                </div>
              </div>
              <div className="flex">
                <Avatar
                  size="small"
                  icon={<CalendarOutlined className="text-primary" />}
                  className="mr-2 bg-gray-100"
                />
                <div>
                  <Text type="secondary" className="block">
                    {t("appointment.patientDetailsData.age")}
                  </Text>
                  <Text strong>44 year</Text>
                </div>
              </div>
            </div>
          </div>
          {/* Vital Information Section */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <Title level={4} className="!m-0">
                {t("appointment.vitalInformation")}
              </Title>
              <Pencil className="ml-2" />
            </div>
            <Divider />
            <Form
              layout="vertical"
              className="space-y-4"
              form={vitalInformationForm}
            >
              <Form.Item label={t("appointment.bloodGroup")} name="bloodGroup">
                <Input placeholder={t("appointment.enterHere")} />
              </Form.Item>
              <Form.Item label={t("appointment.background")} name="background">
                <Input placeholder={t("appointment.enterHere")} />
              </Form.Item>
              <Form.Item label={t("appointment.ground")} name="ground">
                <Input placeholder={t("appointment.enterHere")} />
              </Form.Item>
              <Form.Item label={t("appointment.size")} name="size">
                <Input placeholder={t("appointment.enterHere")} />
              </Form.Item>
              <Form.Item label={t("appointment.weight")} name="weight">
                <Input placeholder={t("appointment.enterHere")} />
              </Form.Item>
            </Form>
          </div>
          {/* Pre-appointment Documents Section */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <Title level={4} className="!m-0">
              {t("appointment.preAppointmentDocuments")}
            </Title>
            <Divider />
            <List
              itemLayout="horizontal"
              dataSource={documents}
              renderItem={(item) => (
                <div className="flex items-center p-2">
                  <FilePdfOutlined className="text-red-500 text-2xl mr-3" />
                  <div className="flex flex-col">
                    <Text strong>{item?.title}</Text>
                    <Text className="text-gray-500 text-[12px]">300kb</Text>
                  </div>
                </div>
              )}
            />
          </div>
        </Col>

        <Col span={16}>
          <Row gutter={16}>
            <Col span={12}>
              {/* Observations and Prescriptions Section */}
              <div className="mb-4">
                <div>
                  <Text strong>{t("appointment.observations")}</Text>
                  <TextArea
                    rows={4}
                    placeholder={t("appointment.enterHere")}
                    className="my-2"
                  />
                </div>
                <div>
                  <Title level={4} className="!m-0">
                    {t("appointment.prescriptionsTilte")}
                  </Title>
                  <div className="flex space-x-2 my-2 flex-wrap gap-2">
                    <AppButton icon={<PlusOutlined />}>
                      {t("appointment.prescriptions.laboratory")}
                    </AppButton>
                    <AppButton icon={<PlusOutlined />}>
                      {t("appointment.prescriptions.medicalRestCertificate")}
                    </AppButton>
                    <AppButton icon={<PlusOutlined />}>
                      {t("appointment.prescriptions.prescription")}
                    </AppButton>
                    <AppButton icon={<PlusOutlined />}>
                      {t("appointment.prescriptions.radiography")}
                    </AppButton>
                  </div>
                  <Text>{t("appointment.diagnostic")}</Text>
                  <Input
                    placeholder={t("appointment.enterHere")}
                    className="my-2"
                  />
                </div>
              </div>
              {/* Payment Section */}
              <div>
                <Title level={4} className="!m-0 block !mb-3">
                  {t("appointment.payment")}
                </Title>
                <div className="bg-white p-4 rounded-md mb-3 flex gap-3">
                  <Title level={5} className="!font-normal !m-0">
                    {t("appointment.total")}:
                  </Title>
                  <Title level={5} className="ml-2 !text-primary !m-0">
                    1000 XOF
                  </Title>
                </div>
                <div className="flex gap-3">
                  <Title level={5} className="!font-normal !m-0">
                    {t("appointment.additionalCare")}:
                  </Title>
                  <Title level={5} className="ml-2 !text-primary !m-0">
                    1000 XOF
                  </Title>
                </div>
              </div>
            </Col>
            <Col span={12}>
              {/* Latest Consultations Section */}
              <div>
                <Title level={4} className="!m-0 block !mb-3">
                  {t("appointment.latestConsultations")}
                </Title>
                <List
                  itemLayout="horizontal"
                  dataSource={consultations}
                  renderItem={(item) => (
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="flex justify-between ">
                        <div className="flex items-center">
                          <Avatar size={55} src="https://i.pravatar.cc/300">
                            {item?.doctor.split(" ")[0]?.charAt(0)}
                            {item?.doctor.split(" ")[1]?.charAt(0)}
                          </Avatar>
                          <div className="ml-3">
                            <Title level={5} className="m-0 !mb-0">
                              {item?.doctor}
                            </Title>
                            <Text className="m-0">{item?.evaluation}</Text>
                          </div>
                        </div>
                        <div
                          className="flex w-10 h-10 items-center justify-center hover:cursor-pointer rounded-full"
                          style={{ backgroundColor: ACTION_COLORS.VIEW }}
                        >
                          <VideoCamera />
                        </div>
                      </div>
                      <div className="mt-4 flex flex-row justify-center p-2 items-center gap-2 hover:cursor-pointer rounded-md bg-slate-100">
                        <Clock />
                        <Text className="!mt-1">{item?.date}</Text>
                      </div>
                    </div>
                  )}
                />
              </div>
            </Col>
            <Col span={24}>
              {/* Buttons Section */}
              <div className="flex justify-start space-x-2 flex-wrap gap-2">
                <AppButton type="primary" danger>
                  {t("appointment.cancel")}
                </AppButton>
                <AppButton>{t("appointment.enclose")}</AppButton>
                <AppButton success>{t("appointment.redirect")}</AppButton>
                <AppButton type="primary">
                  {t("appointment.bookAnotherAppointment")}
                </AppButton>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Appointment;
