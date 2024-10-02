import { Button, Image, Input, Row, Space, Typography } from 'antd'

export function Midjourney() {
  return (
    <Space direction='vertical' align='center'>
      <Row>
        <Typography.Title level={1}>
          Midjourney Image Previewer
        </Typography.Title>
      </Row>
      <Space direction='vertical' align='start'>
        <Row>
          <Space.Compact>
            <Input placeholder={'Image Link'} />
            <Button type='primary'>Submit</Button>
          </Space.Compact>
        </Row>
        <Row>
          <Space.Compact>
            <Typography.Text>Job ID</Typography.Text>
            <Typography.Text value={'N/A'} />
          </Space.Compact>
        </Row>
        <Row>
          <Space.Compact>
            <Typography.Text>Image link</Typography.Text>
            <Typography.Text value={'N/A'} />
          </Space.Compact>
        </Row>
        <Row>
          <Space.Compact>
            <Typography.Text>Image link {}</Typography.Text>
            <Typography.Text value={'N/A'} />
            <Image width={200} src={''} />
          </Space.Compact>
        </Row>
        <Row>
          <Space.Compact>
            <Typography.Text>Image Grid</Typography.Text>
            <Typography.Text value={'N/A'} />
            <Image width={800} src={''} />
          </Space.Compact>
        </Row>
        <Row>
          <Space.Compact>
            <Typography.Text>MJ Link</Typography.Text>
            <Typography.Text value={'N/A'} />
          </Space.Compact>
        </Row>
      </Space>
    </Space>
  )
}
