import React, { Dispatch, FC, SetStateAction } from 'react'
import { Form, Input, Button, Col, FormInstance } from 'antd'
import MarkerType from 'models/marker'
import { toast } from 'react-toastify'
import useAction from 'hooks/useAction'
import formatLength from 'utilts/formatLength'
import customToastOptions from 'utilts/customToastOptions'

type AddNewRouteFormPropsType = {
  markers: MarkerType[]
  length: number
  formRef: FormInstance<any>
  shortDescLength: number
  setShortDescLength: Dispatch<SetStateAction<number>>
  closeModal: () => void
}

type FormDataType = {
  title: string
  shortDescription: string
  fullDescription: string
}

const AddNewRouteForm: FC<AddNewRouteFormPropsType> = ({
  markers,
  length,
  formRef,
  shortDescLength,
  setShortDescLength,
  closeModal,
}) => {
  const { addRouteThunk } = useAction()

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

      closeModal()

      toast('Route added successfully', customToastOptions)
      return
    }
    toast('Error! You should put 2 or more markers on map', customToastOptions)
  }

  return (
    <Form {...layout} form={formRef} onFinish={onFinish} validateMessages={validateMessages} style={{ width: '100%' }}>
      <Form.Item name={['title']} label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['shortDescription']} label="Short description" rules={[{ required: true, max: 160 }]}>
        <Input.TextArea onChange={e => setShortDescLength(e.target.value.length)} />
      </Form.Item>
      <Form.Item className="form-center">
        <Col>Limit {shortDescLength} of 160</Col>
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
