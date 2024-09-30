import { Col, Layout, Row, Space, Typography } from 'antd'

import '../../src/style.scss'

export function NotFound() {
  return (
    <Layout>
      <Space direction='vertical' align='center'>
        <Row gutter={16}>
          <Col span={24}>
            <Typography.Title level={1}>404: Not Found</Typography.Title>
            <Typography.Paragraph>It's gone :(</Typography.Paragraph>
          </Col>
        </Row>
      </Space>
    </Layout>
  )
}
