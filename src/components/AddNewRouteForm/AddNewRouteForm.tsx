import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Form, Input, Button } from 'antd'
import s from './AddNewRouteForm.module.scss'
import MarkerType from '../../models/marker'

type AddNewRouteFormPropsType = {
  markers: MarkerType[]
}

const AddNewRouteForm: FC<AddNewRouteFormPropsType> = ({markers}) => {

  const [routeForm, setRouteForm] = useState({})

  const validateMessages = {
    required: '${label} is required!',
  }

  const onFinish = (values: any) => {
    console.log(values)
  }

  const [detectedLength, setDetectedLength] = useState(0)

  return (
    <Form onFinish={onFinish} validateMessages={validateMessages} className={s.form}>
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
        <div>Length: 12m</div>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddNewRouteForm
