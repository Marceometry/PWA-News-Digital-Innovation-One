import { renderTitle, renderImg, renderDescription } from '../../../utils'
import { Actions } from '../'
import { Col } from 'antd'
import { memo } from 'react'

function MainPost({ post, subject }) {
  const { title, image, description, body, datePublished } = post

  return (
    <Col span={24} md={16}>
      <header>
        <p>{datePublished}</p>
        <Actions post={post} subject={subject} />
      </header>

      {renderTitle(title)}

      {renderImg({ image, description })}

      {renderDescription(description)}

      <hr />

      {renderDescription(body)}
    </Col>
  )
}

export default memo(MainPost)
