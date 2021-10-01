import React, { memo } from 'react'
import { Row, Col } from 'antd'
import { renderTitle, renderImg, renderDescription } from '../../../utils'
import { Link } from 'react-router-dom'

function Economy({ values }) {
  return (
    <Row gutter={[16, 16]}>
      {values?.map((post, index) => {
        const { title, image, description, id } = post

        return (
          <Col span={24} md={12} key={`post-${index}`}>
            <Link to={`/economy/${id}`}>
              <article>
                {renderTitle(title)}

                {image?.url
                  ? renderImg({ image, description })
                  : renderDescription(description)}
              </article>
            </Link>
          </Col>
        )
      })}
    </Row>
  )
}

export default memo(Economy)
