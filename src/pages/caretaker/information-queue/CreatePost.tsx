import { Modal, Button, Input, Select, Form } from 'antd';
import PhotoIcon from "../../../assets/icons/photo.svg?react";
import SmileyIcon from "../../../assets/icons/smiley-face.svg?react";
import { useTranslation } from 'react-i18next';
import AppButton from '../../../components/ui/AppButton';

const { TextArea } = Input;
const { Option } = Select;

export const CreatePostModal = ({ visible, onClose }:any) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        console.log('Form Values:', values);
        form.resetFields();
        onClose();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      visible={visible}
      title={t('informationQueue.createPostModal.title')}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          {t('informationQueue.createPostModal.cancel')}
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {t('informationQueue.createPostModal.publish')}
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" name="create_post_form">
        <Form.Item
          name="timeline"
          label={t('informationQueue.createPostModal.timeline')}
        //   rules={[{ required: true, message: t('informationQueue.createPostModal.timelineRequired') }]}
        >
          <Select placeholder={t('informationQueue.createPostModal.selectPlaceholder')}>
            <Option value="timeline1">Timeline 1</Option>
            <Option value="timeline2">Timeline 2</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          label={t('informationQueue.createPostModal.description')}
        //   rules={[{ required: true, message: t('informationQueue.createPostModal.descriptionRequired') }]}
        >
          <TextArea rows={4} placeholder={t('informationQueue.createPostModal.descriptionPlaceholder')} />
        </Form.Item>
        <Form.Item
          name="tags"
          label={t('informationQueue.createPostModal.tags')}
        >
          <Input placeholder={t('informationQueue.createPostModal.tagsPlaceholder')} />
        </Form.Item>
        <Form.Item>
        <div className="flex space-x-4">
              <AppButton type="text" icon={<PhotoIcon />}>
                {t("informationQueue.photoVideo")}
              </AppButton>
              <AppButton type="text" icon={<SmileyIcon />}>
                {t("informationQueue.feeling")}
              </AppButton>
            </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};
