import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import MarkerType from '../../../models/marker'
import { toast } from 'react-toastify'
import useAction from '../../../hooks/useAction'
import formatLength from '../../../utilts/formatLength'
import customToastOptions from '../../../utilts/customToastOptions'

type AddNewRouteFormPropsType = {
  markers: MarkerType[]
  length: number
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
  setMarkers: Dispatch<SetStateAction<MarkerType[]>>
  setLength: Dispatch<SetStateAction<number>>
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
  const { addRouteThunk } = useAction()

  const [form] = Form.useForm()

  const reset = () => {
    form.resetFields()
    setMarkers([])
    setLength(0)
    setDetectedLength(0)
  }

  const validateMessages = {
    required: '${label} is required!',
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }

  const onFinish = (values: FormDataType) => {
    if (markers.length >= 2) {
      const route = {
        title: values.title,
        shortDesc: values.shortDescription,
        fullDesc: values.fullDescription,
        favourite: false,
        length,
        markers,
      }

      addRouteThunk(route)

      reset()

      setIsModalVisible(false)

      toast('Route added successfully', customToastOptions)
      return
    }
    toast('Error! You should put 2 or more markers on map', customToastOptions)
  }

  const [detectedLength, setDetectedLength] = useState(0)

  return (
    <Form {...layout} form={form} onFinish={onFinish} validateMessages={validateMessages} style={{ width: '100%' }}>
      <Form.Item name={['title']} label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['shortDescription']} label="Short description" rules={[{ required: true, max: 160 }]}>
        <Input.TextArea onChange={e => setDetectedLength(e.target.value.length)} />
      </Form.Item>
      <Form.Item className="form-center">
        <Col>Limit {detectedLength} of 160</Col>
      </Form.Item>
      <Form.Item name={['fullDescription']} label="Full description" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item className="form-center">Length: {formatLength(length) || '0 m'}</Form.Item>
      <Form.Item className="form-center">
        <Button type="primary" htmlType="submit">
          Add path
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddNewRouteForm
