import { renderTitle, renderImg, renderDescription } from '../../../utils'
import { memo } from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

function World({ values }) {
  return (
    <Row gutter={[16, 24]}>
      {values?.map((post, index) => {
        const { title, image, description, id } = post
        const isFirst = index === 0
        const spanValue = isFirst ? 24 : 12

        return (
          <Col span={spanValue} key={`post-${index}`}>
            <Link to={`/world/${id}`}>
              <article>
                <div>
                  {renderTitle(title)}

                  {renderDescription(description)}

                  {isFirst && renderImg({ image, description })}
                </div>
              </article>
            </Link>
          </Col>
        )
      })}
    </Row>
  )
}

export default memo(World)
