import React, { memo } from 'react'
import { Row, Col } from 'antd'
import { createMarkup } from '../../../utils'
import { Link } from 'react-router-dom'

function Technology({ values }) {
  const renderImg = ({ image, description }) => (
    <div>
      <img src={image.url} alt={description} width='100%' />
    </div>
  )

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    return (
      <Col span={12} md={6} key={`post-${index}`}>
        <Link to={`/technology/${id}`}>
          <article>
            <p>
              <strong dangerouslySetInnerHTML={createMarkup(title)} />
            </p>
            <p dangerouslySetInnerHTML={createMarkup(description)} />
            {image.url && renderImg({ image, description })}
          </article>
        </Link>
      </Col>
    )
  }

  return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>
}

export default memo(Technology)
