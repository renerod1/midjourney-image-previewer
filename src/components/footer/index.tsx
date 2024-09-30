import { useLocation } from 'preact-iso'
import { Col, Layout, Menu, Row, Space, Typography } from 'antd'

import './style.scss'

export function Footer() {
  const { url } = useLocation()

  return (
    <Layout>
      <Space direction='vertical'>
        <Row gutter={16}>
          <Col span={24}>
            <Menu
              mode='horizontal'
              items={[
                {
                  key: 'footer-home',
                  label: (
                    <Typography.Link href='/' class={url == '/' && 'active'}>
                      Home
                    </Typography.Link>
                  ),
                },
                {
                  key: 'footer-midjourney',
                  label: (
                    <Typography.Link
                      href='/midjourney'
                      class={url == '/midjourney' && 'active'}
                    >
                      Midjourney
                    </Typography.Link>
                  ),
                },
              ]}
            ></Menu>
          </Col>
        </Row>
      </Space>
    </Layout>
  )
}
