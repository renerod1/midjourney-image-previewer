import { useLocation } from 'preact-iso'
import { Col, Layout, Menu, Row, Space, Typography } from 'antd'

import './style.scss'

export function Header() {
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
                  key: 'header-home',
                  label: (
                    <Typography.Link href='/' class={url == '/' && 'active'}>
                      Home
                    </Typography.Link>
                  ),
                },
                {
                  key: 'header-midjourney',
                  label: (
                    <Typography.Link
                      href='/midjourney'
                      class={url == '/midjourney' && 'active'}
                    >
                      Midjourney
                    </Typography.Link>
                  ),
                },
                {
                  key: 'header-404',
                  label: (
                    <Typography.Link
                      href='/404'
                      class={url == '/404' && 'active'}
                    >
                      404
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
