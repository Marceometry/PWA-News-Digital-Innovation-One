import React, { memo } from 'react'
import { Row, Col } from 'antd'
import { createMarkup } from '../../../utils'
import { Link } from 'react-router-dom'

function World({ values }) {
  const renderImg = ({ image, description }) => (
    <div>
      <img src={image.url} alt={description} width='100%' />
    </div>
  )

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    const isFirst = index === 0
    const spanValue = isFirst ? 24 : 12

    return (
      <Col span={spanValue} key={`post-${index}`}>
        <Link to={`/world/${id}`}>
          <article>
            <div>
              <p>
                <strong dangerouslySetInnerHTML={createMarkup(title)} />
              </p>
              <p dangerouslySetInnerHTML={createMarkup(description)} />
              {isFirst && renderImg({ image, description })}
            </div>
          </article>
        </Link>
      </Col>
    )
  }

  return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>
}

export default memo(World)
