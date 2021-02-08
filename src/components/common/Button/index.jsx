import React from 'react'
import { Button } from 'antd'

export const ButtonComponent = ({ 
  children, onClick, disabled = false, className, style, icon, type = "primary", shape = "round", size="large", htmlType,
  hasCircle = false, hasPlus = false, isBlue = false
}) => {

  if (hasPlus) {
    className = "btn-plus btn-default"
  }

  if (type === 'default') {
    className = className + " btn-default"
  }

  if (hasCircle) {
    className = className + " btn-circle"
  }

  if (isBlue) {
    className = className + " btn-primary--blue"
  }

  if (className?.includes('btn-back')) {
    type = 'text'
  }

  return (
    <Button onClick={onClick} disabled={disabled} htmlType={htmlType} icon={icon} className={className} style={style} type={type} shape={shape} size={size}>
      {children}
      {hasCircle && <span className="btn-circle-icon"/>}
      {hasPlus && <span className="btn-plus-icon"/>}
    </Button>
  )
}
