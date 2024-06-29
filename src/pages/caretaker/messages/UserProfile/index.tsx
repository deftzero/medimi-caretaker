import { Avatar, Typography, Switch, Image, Button, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const UserProfile = ({setShowProfile}:any) => {
  const { t } = useTranslation();
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  return (
    <div className="bg-white h-full flex flex-col justify-between relative">
      <div className="relative">
        <img src="https://via.placeholder.com/150" alt="banner" className="w-full h-32 object-cover border-8 border-solid border-white rounded-xl" />
        <Button type='text' onClick={()=> setShowProfile(false)} icon={<CloseOutlined />} className="absolute top-2 right-2 bg-transparent rounded-full p-1" />
        <Avatar
          onClick={() => setShowProfile(true)}
          className="absolute left-1/2 transform -translate-x-1/2 translate-y-[40%]"
          src="https://i.pravatar.cc/300"
          size={130}
        >
          {"item?.doctor".split(" ")[0]?.charAt(0)}
          {"item?.doctor".split(" ")[1]?.charAt(0)}
        </Avatar>
      </div>
      <div className="p-4 text-center">
        <Title level={4}>Jack Tomphson</Title>
        <Tag bordered={false} color="success">{t('messages.online')}</Tag>
        <div className="mt-4 text-left space-y-2">
          <div>
            <Text strong className='text-[#667085]'>Email</Text><br />
            <Text strong>jacktomphson@mail.com</Text>
          </div>
          <div>
            <Text strong className='text-[#667085]'>Phone Number</Text><br />
            <Text strong>050 414 8778</Text>
          </div>
          <div>
            <Text strong className='text-[#667085]'>Location</Text><br />
            <Text strong>New York, USA</Text>
          </div>
          <div>
            <Text strong className='text-[#667085]'>Birthday</Text><br />
            <Text strong>12 May 1992</Text>
          </div>
          <div>
            <Text strong className='text-[#667085]'>Join Date</Text><br />
            <Text strong>12 December 2023</Text>
          </div>
        </div>
        <div className="mt-4 text-left">
          <Title level={5}>{t('messages.images')}</Title>
          <Image.PreviewGroup>
            <div className="grid grid-cols-3 gap-2">
              {images.slice(0, 6).map((image, idx) => (
                <Image key={idx} height={100} src={image} className='rounded-xl' />
              ))}
              {images.length > 6 && (
                <div className="relative">
                  <Image height={100} src={images[6]} className='rounded-xl' />
                  <div className="rounded-xl absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-sm">
                    +{images.length - 6}
                  </div>
                </div>
              )}
            </div>
          </Image.PreviewGroup>
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <Text strong>{t('messages.allowConversation')}</Text>
        <Switch defaultChecked />
      </div>
    </div>
  );
};

export default UserProfile;
