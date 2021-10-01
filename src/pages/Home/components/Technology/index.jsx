import { renderTitle, renderImg, renderDescription } from '../../../utils'
import { memo } from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

function Technology({ values }) {
  return (
    <Row gutter={[32, 32]}>
      {values?.map((post, index) => {
        const { title, image, description, id } = post

        return (
          <Col span={12} md={6} key={`post-${index}`}>
            <Link to={`/technology/${id}`}>
              <article>
                {renderTitle(title)}

                {renderDescription(description)}

                {image.url && renderImg({ image, description })}
              </article>
            </Link>
          </Col>
        )
      })}
    </Row>
  )
}

export default memo(Technology)
