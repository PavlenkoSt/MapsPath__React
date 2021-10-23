import { Modal } from 'antd'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import MarkerType from 'models/marker'
import AddNewRouteForm from './AddNewRouteForm'
import Map from 'components/Map'
import { Form } from 'antd'

type ModalFormPropsType = {
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}

const ModalForm: FC<ModalFormPropsType> = ({ isModalVisible, setIsModalVisible }) => {
  const [markers, setMarkers] = useState([] as MarkerType[])
  const [length, setLength] = useState(0)
  const [shortDescLength, setShortDescLength] = useState(0)

  const [formRef] = Form.useForm()

  const closeModal = () => {
    setIsModalVisible(false)
    formRef.resetFields()
    setMarkers([])
    setLength(0)
    setShortDescLength(0)
  }

  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      onCancel={closeModal}
      className="modal"
      title="Add new path"
      width={1000}
    >
      <AddNewRouteForm
        markers={markers}
        length={length}
        closeModal={closeModal}
        formRef={formRef}
        shortDescLength={shortDescLength}
        setShortDescLength={setShortDescLength}
      />
      <Map setMarkers={setMarkers} markers={markers} setLength={setLength} isAddRoute={true} />
    </Modal>
  )
}

export default ModalForm
