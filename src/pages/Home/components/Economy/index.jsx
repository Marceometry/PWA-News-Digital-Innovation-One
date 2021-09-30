import React, { memo } from 'react'
import { Row, Col } from 'antd'
import { createMarkup } from '../../../utils'
import { Link } from 'react-router-dom'

function Economy({ values }) {
  const renderImg = ({ image, description }) => (
    <img src={image.url} alt={description} width='100%' />
  )

  const renderDescription = (description) => (
    <p dangerouslySetInnerHTML={createMarkup(description)} />
  )

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    return (
      <Col span={24} md={12} key={`post-${index}`}>
        <Link to={`/economy/${id}`}>
          <article>
            <p>
              <strong dangerouslySetInnerHTML={createMarkup(title)} />
            </p>
            {image?.url
              ? renderImg({ image, description })
              : renderDescription(description)}
          </article>
        </Link>
      </Col>
    )
  }

  return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>
}

export default memo(Economy)
