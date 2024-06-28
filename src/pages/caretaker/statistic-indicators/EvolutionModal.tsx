import { useState } from 'react';
import { Modal, Form, Select, Progress, Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { IEvolutionModal } from '../../../interfaces';

const { Option } = Select;
const {Title} = Typography;

const EvolutionModal: React.FC<IEvolutionModal> = ({ visible, onClose }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [casesDiagnosed, setCasesDiagnosed] = useState(50);

  const handleDiseaseChange = (value:string) => {
    setCasesDiagnosed(value === 'Hypertension' ? 50 : value === 'Diabetes' ? 30 : 20);
  };

  return (
    <Modal
      visible={visible}
      centered
      title={t('statistics.evolutionModal.title')}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          {t('statistics.evolutionModal.close')}
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ disease: 'Hypertension' }}
      >
        <Form.Item
          label={t('statistics.evolutionModal.disease')}
          name="disease"
          className='mb-4'
        >
          <Select onChange={handleDiseaseChange}>
            <Option value="Hypertension">Hypertension</Option>
            <Option value="Diabetes">Diabetes</Option>
            <Option value="Flu">Flu</Option>
          </Select>
        </Form.Item>
        <div className="flex justify-between items-center">
          <Title level={5} className='!m-0'>{t('statistics.evolutionModal.casesDiagnosed')}</Title>
          <Title level={5} className='!m-0'>{casesDiagnosed}</Title>
        </div>
            <Progress percent={(casesDiagnosed / 100) * 100} showInfo={false} strokeColor="#34D399" />

      </Form>
    </Modal>
  );
};

export default EvolutionModal;
