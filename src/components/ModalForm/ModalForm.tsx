import { Modal } from 'antd'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import MarkerType from '../../models/marker'
import AddNewRouteForm from '../AddNewRouteForm/AddNewRouteForm'
import Diviner from '../Diviner'
import Map from '../Map'

type ModalFormPropsType = {
  isModalVisible: boolean
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}

const ModalForm: FC<ModalFormPropsType> = ({isModalVisible, setIsModalVisible}) => {

  const [markers, setMarkers] = useState([] as MarkerType[])

  return (
    <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        className="modal"
        title="Add new path"
        width={1000}
      >
        <AddNewRouteForm markers={markers} />
        <Diviner />
        <Map setMarkers={setMarkers} />
      </Modal>
  )
}

export default ModalForm
