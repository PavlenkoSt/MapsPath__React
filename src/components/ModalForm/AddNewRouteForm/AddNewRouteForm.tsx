import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Form, Input, Button } from 'antd'
import s from './AddNewRouteForm.module.scss'
import MarkerType from '../../../models/marker'
import { toast, ToastOptions } from 'react-toastify'
import useAction from '../../../hooks/useAction'

type AddNewRouteFormPropsType = {
  markers: MarkerType[]
  length: string
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
  setMarkers: Dispatch<SetStateAction<MarkerType[]>>
  setLength: Dispatch<SetStateAction<string>>
}

type FormDataType = {
  title: string
  shortDescription: string
  fullDescription: string
}

const AddNewRouteForm: FC<AddNewRouteFormPropsType> = ({
  markers,
  length,
  setIsModalVisible,
  setMarkers,
  setLength,
}) => {
  const { addRoute } = useAction()

  const [form] = Form.useForm()

  const validateMessages = {
    required: '${label} is required!',
  }

  const toastOptions = { hideProgressBar: true, position: 'top-center' } as ToastOptions<{}>

  const onFinish = (values: FormDataType) => {
    if (markers.length >= 2) {
      addRoute({
        id: Date.now(),
        title: values.title,
        shortDesc: values.shortDescription,
        fullDesc: values.fullDescription,
        favourite: false,
        length,
        markers,
      })

      setIsModalVisible(false)

      form.resetFields()
      setMarkers([])
      setLength('0 m')

      toast('Success! Route added to list', toastOptions)
      return
    }
    toast('Error! You need to put 2 or more markers on map', toastOptions)
  }

  const [detectedLength, setDetectedLength] = useState(0)

  return (
    <Form form={form} onFinish={onFinish} validateMessages={validateMessages} className={s.form}>
      <Form.Item name={['title']} label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['shortDescription']} label="Short description" rules={[{ required: true, max: 160 }]}>
        <Input.TextArea onChange={e => setDetectedLength(e.target.value.length)} />
      </Form.Item>
      <Form.Item className={s.limit}>
        <span>Limit {detectedLength} of 160</span>
      </Form.Item>
      <Form.Item name={['fullDescription']} label="Full description" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item className={s.length}>
        <div>Length: {length || '0 m'}</div>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add path
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddNewRouteForm
