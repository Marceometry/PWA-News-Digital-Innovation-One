import { renderTitle, renderDescription, renderImg } from '../../../utils'
import { Link } from 'react-router-dom'
import { memo } from 'react'
import { Col } from 'antd'

function RelatedPost({ post, subject }) {
  const { title, image, description, id } = post

  return (
    <Col span={12}>
      <Link to={`/${subject}/${id}`}>
        <article>
          {renderTitle(title)}

          {image?.url
            ? renderImg({ image, description })
            : renderDescription(description)}
        </article>
      </Link>
    </Col>
  )
}

export default memo(RelatedPost)
