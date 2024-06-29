import { List, Avatar, Input, Badge, Typography } from "antd";
import { useTranslation } from "react-i18next";
import Search from "../../../../assets/icons/search.svg?react";
import { useState } from "react";

const contacts = [
  {
    name: "Darrell Steward",
    message: "You need to do a lab check",
    avatar: "",
    status: "Patients",
    unread: 2,
    opened: true,
  },
  {
    name: "Ralph Edwards",
    message: "I hope you get well soon",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Leslie Alexander",
    message: "I have prescribed for you...",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Jerome Bell",
    message: "Thank You for your advice.",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Dianne Russell",
    message: "You need to do a lab check",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Darlene Robertson",
    message: "Okay, see you again Human",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Bessie Cooper",
    message: "You need to do a lab check",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Courtney Henry",
    message: "I have prescribed for you...",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Marvin McKinney",
    message: "Okay, see you again Human",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Ronald Richards",
    message: "Thank You for your advice.",
    avatar: "",
    status: "Patients",
    unread: 1,
  },
  {
    name: "Cameron Williamson",
    message: "I have prescribed for you...",
    avatar: "",
    status: "Patients",
  },
  {
    name: "Esther Howard",
    message: "You need to do a lab check",
    avatar: "",
    status: "Patients",
  },
];
const { Paragraph } = Typography;
const MessageList = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("patients");

  return (
    <div className="p-3 h-[80vh] border-0 !border-r border-solid border-[#e0e2e7]">
      <Input
        prefix={<Search />}
        placeholder="Search..."
        className="bg-slate-50"
      />
      <div className="my-4 relative border border-primary border-solid rounded-full flex justify-between w-full">
        <div
          onClick={() => setActiveTab("patients")}
          className={`cursor-pointer w-1/2 px-4 py-2 flex justify-center rounded-full transition-all duration-300 ease-in-out ${
            activeTab === "patients" ? "bg-primary text-white" : "text-gray-600"
          }`}
        >
          {t("messages.patients")}
        </div>
        <div
          onClick={() => setActiveTab("medicalWorld")}
          className={`cursor-pointer px-4 flex justify-center w-1/2 py-2 rounded-full transition-all duration-300 ease-in-out ${
            activeTab === "medicalWorld"
              ? "bg-primary text-white"
              : "text-gray-600"
          }`}
        >
          {t("messages.medicalWorld")}
        </div>
      </div>
      {activeTab === "patients" ? (
        <List
          itemLayout="horizontal"
          className="overflow-y-auto h-[80%]"
          dataSource={contacts}
          renderItem={(item) => (
            <List.Item
              className={`!border-0 !px-3 rounded-md ${
                item?.opened ? "bg-blue-50" : ""
              }`}
              actions={[
                item.unread ? (
                  <Badge color="#254f72" count={item.unread}></Badge>
                ) : (
                  <></>
                ),
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://i.pravatar.cc/300" size={45}>
                    {"item?.doctor".split(" ")[0]?.charAt(0)}
                    {"item?.doctor".split(" ")[1]?.charAt(0)}
                  </Avatar>
                }
                title={
                  <Paragraph
                    className="!m-0"
                    ellipsis={{
                      rows: 1,
                    }}
                  >
                    {item.name}
                  </Paragraph>
                }
                description={<Paragraph
                  className="!m-0"
                  ellipsis={{
                    rows: 1,
                  }}
                >
                  {item.message}
                </Paragraph>}
              />
            </List.Item>
          )}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MessageList;
