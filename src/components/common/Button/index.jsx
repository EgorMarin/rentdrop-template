import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({ 
  children, className, type = "primary", shape = "round", size="large", hasCircle = false, hasPlus = false
}) => {

  if (type === 'default') {
    className = className + " btn-default"
  }

  return (
    <Button className={className} type={type} shape={shape} size={size}>
      {children}
      {hasCircle && <span className="btn-circle"/>}
      {hasPlus && <span className="btn-plus"/>}
    </Button>
  )
}

export default ButtonComponent
