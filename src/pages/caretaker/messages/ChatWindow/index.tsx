import { Avatar, Input, Button, Typography, Image, Card } from "antd";
import {
  SendOutlined,
  PaperClipOutlined,
  MoreOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Search from "../../../../assets/icons/search.svg?react";
import Download from "../../../../assets/icons/download.svg?react";
import MoneyBag from "../../../../assets/icons/money-bag.svg?react";
import { messagesData } from "../../../../data";

const { Text } = Typography;

const ChatWindow = ({ setShowProfile }: any) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-[80vh] border-gray-200 border-0 !border-r border-solid">
      <div className="flex items-center p-4 border-b border-gray-200 border-0 border-solid">
        <Avatar
          onClick={() => setShowProfile(true)}
          src="https://i.pravatar.cc/300"
          size={45}
        >
          {"item?.doctor".split(" ")[0]?.charAt(0)}
          {"item?.doctor".split(" ")[1]?.charAt(0)}
        </Avatar>
        <div className="ml-4">
          <div className="font-bold">Jay Hargudson</div>
          <div className="text-gray-500">{t("messages.onlineStatus")}</div>
        </div>
        <div className="ml-auto flex items-center">
          <Button
            type="text"
            icon={<BellOutlined style={{ color: "#858d9d" }} />}
          />
          <Button type="text" icon={<Search />} />
          <Button
            type="text"
            icon={<MoreOutlined style={{ color: "#858d9d" }} />}
          />
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col-reverse">
        <div className="flex flex-col">
          {messagesData.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end ${
                msg.sender === "Me"
                  ? "justify-start flex-row-reverse"
                  : "justify-start"
              } mb-8`}
            >
              <Avatar
                onClick={() => setShowProfile(true)}
                className="cursor-pointer"
                src="https://i.pravatar.cc/300"
              >
                {"item?.doctor".split(" ")[0]?.charAt(0)}
                {"item?.doctor".split(" ")[1]?.charAt(0)}
              </Avatar>
              <div className="mx-2">
                <div
                  className={`p-2  border border-solid border-gray-100 rounded-lg mb-1 w-[300px] flex gap-2 ${
                    msg.sender === "Me"
                      ? "justify-start flex-row-reverse bg-white rounded-br-none"
                      : "justify-start bg-gray-100 rounded-bl-none"
                  }`}
                >
                  <Text className="!m-0">{msg.content}</Text>
                  <Button
                    type="text"
                    icon={<MoreOutlined style={{ color: "#858d9d" }} />}
                  />
                </div>
                {msg?.images && (
                  <div
                    className={`flex ${
                      msg.sender === "Me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <Image.PreviewGroup>
                      <div className="flex mt-2 space-x-2">
                        {msg.images.slice(0, 2).map((image, idx) => (
                          <Image key={idx} width={50} height={50} src={image} />
                        ))}
                        {msg.images.length > 2 && (
                          <div className="relative">
                            <Image width={50} height={50} src={msg.images[2]} />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-sm">
                              +{msg.images.length - 2}
                            </div>
                          </div>
                        )}
                      </div>
                    </Image.PreviewGroup>
                  </div>
                )}
                {msg.file && (
                  <div
                    className={`flex ${
                      msg.sender === "Me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <Card
                      bodyStyle={{ padding: 0, width: "100%" }}
                      className="p-2 rounded-md border w-3/4"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center flex-1">
                          <div className="p-2 flex justify-center items-center bg-gray-200 rounded-md">
                            <MoneyBag />
                          </div>
                          <div className="ml-3">
                            <Text strong>{msg?.file?.fileName}</Text>
                            <div className="text-xs text-gray-500">
                              {msg?.file?.fileSize}
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <Download className="text-lg text-gray-500" />
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
                <div
                  className={`text-xs text-gray-500 mb-[-20px] ${
                    msg.sender === "Me" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center p-4 bg-white border-gray-200 border-0 !border-t border-solid">
        <Input
          placeholder={t("messages.typeMessage")}
          // autoSize={{ minRows: 1, maxRows: 3 }}
          className="flex-1 mr-2"
          suffix={<PaperClipOutlined />}
        />
        <Button type="primary" icon={<SendOutlined />} />
      </div>
    </div>
  );
};

export default ChatWindow;
