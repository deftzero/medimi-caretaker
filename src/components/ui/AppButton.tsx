import { Button } from "antd";

export default function AppButton(props: any) {
  return (
    <Button className={`${props.success === true && 'ant-btn-success'} flex flex-row items-center p-4`} style={{ boxShadow: 'unset' }} {...props} >{props.children}</Button>
  )
}

