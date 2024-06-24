import { cloneElement } from "react";
import { DEFAULT_ACTION_ICON_SIZE } from "../../config/constants";

export default function ActionButton(props: any) {

  const Icon = cloneElement(props.icon, { width: DEFAULT_ACTION_ICON_SIZE })

  return (
    <button
      {...props}
      className="h-7 border-0 rounded-md flex items-center hover:cursor-pointer"
      style={{ background: props.background}}
      >
      {Icon}
    </button>
  )
}

