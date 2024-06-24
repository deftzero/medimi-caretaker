import AppButton from '../../../components/ui/AppButton';


export default function Dashboard() {

  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <AppButton type='primary' size='small'>Dashboard</AppButton>
      </div>
    </div>
  )
}