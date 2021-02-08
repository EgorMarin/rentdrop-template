import React from 'react'
import { Modal } from 'antd'

const ModalComponent = ({ visible, onClose, closable, closeIcon, children }) => {

  return (
    <Modal
      visible={visible}
      footer={null}
      closable={!!closeIcon}
      closeIcon={closeIcon}
      onCancel={onClose}
      width={380}
    >
      {children}
    </Modal>
  )
}

export default ModalComponent
