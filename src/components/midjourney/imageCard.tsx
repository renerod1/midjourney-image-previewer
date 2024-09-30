import { Image, Space, Typography } from 'antd'

export const ImageCard = (props) => {
  return (
    <section>
      <Space.Compact>
        <Typography.Title level={3}>Image Grid</Typography.Title>
        <Typography.Text value={props.link} />
        <Image width={800} src={props.link} />
      </Space.Compact>
    </section>
  )
}
