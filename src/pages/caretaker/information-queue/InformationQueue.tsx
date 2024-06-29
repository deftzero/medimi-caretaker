import { Tabs, Input, Avatar, Typography, Button, Divider, Image } from "antd";
import PhotoIcon from "../../../assets/icons/photo.svg?react";
import SmileyIcon from "../../../assets/icons/smiley-face.svg?react";
import { useTranslation } from "react-i18next";
import AppButton from "../../../components/ui/AppButton";
import Search from "../../../assets/icons/search.svg?react";
import Applause from "../../../assets/icons/clap.svg?react";
import Likes from "../../../assets/icons/heart.svg?react";
import Share from "../../../assets/icons/share.svg?react";
import { EllipsisOutlined } from "@ant-design/icons";
import { CreatePostModal } from "./CreatePost";
import { useState } from "react";
const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];
const { TabPane } = Tabs;
const { Title, Text, Paragraph } = Typography;

const InformationQueue = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  return (
    <div className="p-4 bg-gray-100">
      <Title className="text-xl font-semibold mb-4">
        {t("informationQueue.title")}
      </Title>
      <div className="bg-white p-5 rounded-md">
        <Tabs defaultActiveKey="1" className="mb-4">
          <TabPane tab={t("informationQueue.tabs.all")} key="1" />
          <TabPane tab={t("informationQueue.tabs.global")} key="2" />
          <TabPane tab={t("informationQueue.tabs.facility")} key="3" />
          <TabPane tab={t("informationQueue.tabs.gynecology")} key="4" />
          <TabPane tab={t("informationQueue.tabs.generalMedicine")} key="5" />
        </Tabs>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Avatar src="https://i.pravatar.cc/300" size={50}>
              {"item?.doctor".split(" ")[0]?.charAt(0)}
              {"item?.doctor".split(" ")[1]?.charAt(0)}
            </Avatar>
            <Input
              prefix={<Search />}
              placeholder={t("informationQueue.placeholder")}
              className="bg-slate-50 flex-1 ml-4"
              style={{ maxWidth: "400px" }}
            />
            {/* <TextArea
            autoSize={{ minRows: 1, maxRows: 3 }}
            className="flex-1 ml-4"
          /> */}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <AppButton type="text" icon={<PhotoIcon />}>
                {t("informationQueue.photoVideo")}
              </AppButton>
              <AppButton type="text" icon={<SmileyIcon />}>
                {t("informationQueue.feeling")}
              </AppButton>
              <AppButton type="primary" onClick={()=> setVisible(true)}>
                {t("informationQueue.publish")}
              </AppButton>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-md my-4 py-5">
          <div className="flex-1">
            <div className="flex justify-between items-center px-5">
              <div className="flex items-center">
                <Avatar
                  src="https://i.pravatar.cc/300"
                  size={70}
                  className="mr-4"
                >
                  {"item?.doctor".split(" ")[0]?.charAt(0)}
                  {"item?.doctor".split(" ")[1]?.charAt(0)}
                </Avatar>
                <div>
                  <Title level={5} className="!m-0">
                    Dr. John Keegan
                  </Title>
                  <Text type="secondary">9:41 PM · Jun 8, 2022 - Global</Text>
                </div>
              </div>
              <Button icon={<EllipsisOutlined />} />
            </div>
            <Divider className="my-2" />
            <div className="px-5">
              <div className="mb-2">
                <Text strong className="mr-2">
                  #Medical
                </Text>
                <Text strong className="mr-2">
                  #Health
                </Text>
                <Text strong>#Tutorial</Text>
              </div>
              <Paragraph>
                Dr. Sarah Johnson, MD, FAAP, is a highly skilled pediatrician
                specializing in childhood allergies and asthma management. With
                over 15 years of experience, Dr. Johnson is dedicated to
                providing compassionate and comprehensive care to her young
                patients. You can reach her office, Johnson Pediatrics, located
                at 123 Main Street, Cityville, easily accessible with ample
                parking facilities.
              </Paragraph>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {images.map((image, idx) => (
                  <Image key={idx} src={image} className="rounded-lg" />
                ))}
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex gap-2 px-5">
              <Button type="text" icon={<Applause />} className="font-bold">
                38 Applauses
              </Button>
              <Button type="text" icon={<Likes />} className="font-bold">
                657 Likes
              </Button>
              <Button type="text" icon={<Share />} className="font-bold">
                29 Share
              </Button>
            </div>
          </div>
        </div>
      </div>
      <CreatePostModal visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

export default InformationQueue;
