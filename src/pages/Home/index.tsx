import { render } from 'preact'

import preactLogo from '@/assets/images/preact.svg'
import { Card, Col, Image, Layout, Row, Space, Typography } from 'antd'

import './style.scss'

export function Home() {
  return (
    <Space direction='vertical' align='center'>
      <Row gutter={16}>
        <Col span={24}>
          <Typography.Link href='https://preactjs.com' target='_blank'>
            <Image
              src={preactLogo}
              alt='Preact logo'
              height='160px'
              width='160px'
            />
          </Typography.Link>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Typography.Title level={1}>
            Get Started building Vite-powered Preact Apps
          </Typography.Title>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Resource
            title='Learn Preact'
            description="If you're new to Preact, try the interactive tutorial to learn important concepts"
            href='https://preactjs.com/tutorial'
          />
        </Col>
        <Col span={8}>
          <Resource
            title='Differences to React'
            description="If you're coming from React, you may want to check out our docs to see where Preact differs"
            href='https://preactjs.com/guide/v10/differences-to-react'
          />
        </Col>
        <Col span={8}>
          <Resource
            title='Learn Vite'
            description='To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation'
            href='https://vitejs.dev'
          />
        </Col>
      </Row>
    </Space>
  )
}

function Resource(props) {
  return (
    <Card hoverable={true} style={{ height: '100%' }}>
      <Typography.Link href={props.href} target='_blank'>
        <Typography.Title level={2}>{props.title}</Typography.Title>
        <Typography.Paragraph>{props.description}</Typography.Paragraph>
      </Typography.Link>
    </Card>
  )
}
