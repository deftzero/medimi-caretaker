import { Row, Col, Typography } from "antd";
import MessageList from "./MessageList";
import ChatWindow from "./ChatWindow";
import UserProfile from "./UserProfile";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const { Title } = Typography;
const Messages = () => {
  const { t } = useTranslation();
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="h-full">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className="mt-3">
          {t("messages.title")}
        </Title>
      </div>
      <div className="bg-white rounded-md h-full">
      <Row className="h-full">
        <Col span={6} className="h-full">
          <MessageList />
        </Col>
        <Col span={showProfile ? 12 : 18} className="h-full">
          <ChatWindow setShowProfile={setShowProfile} />
        </Col>
        {showProfile && <Col span={6} className="h-full">
          <UserProfile setShowProfile={setShowProfile} />
        </Col>}
      </Row>
      </div>
    </div>
  );
};

export default Messages;
