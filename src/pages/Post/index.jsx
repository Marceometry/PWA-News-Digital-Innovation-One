import { memo, useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { createMarkup } from '../utils'
import { Loader } from '../../components/Loader'
import { Actions } from './components'
import { Row, Col } from 'antd'
import api from '../../services/api'
import './style.css'

function Post() {
  const { subject, id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [post, setPost] = useState({})
  const [news, setNews] = useState([])

  const handleNews = useCallback((data) => {
    setNews(data[0]?.value)
    setPost(data[1]?.value)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    setIsLoading(true)

    Promise.allSettled([
      api.getNews(subject),
      api.getNewsById(subject, id),
    ]).then(handleNews)
  }, [subject, id, handleNews])

  const renderImg = ({ image, description }) => (
    <img src={image.url} alt={description} width='75%' />
  )

  const renderDescription = (description) => (
    <p dangerouslySetInnerHTML={createMarkup(description)} />
  )

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    return (
      <Col span={12} key={`post-${index}`}>
        <Link to={`/${subject}/${id}`}>
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

  if (isLoading) return <Loader />

  if (!post?.id) {
    return <h1>Post não encontrado</h1>
  }

  const { title, image, description, body, datePublished } = post

  return (
    <main>
      <Link to='/'>Home</Link>
      <Actions post={post} subject={subject} />
      <Row gutter={[24, 24]}>
        <Col span={24} md={16}>
          <p>{datePublished}</p>
          <h1 dangerouslySetInnerHTML={createMarkup(title)}></h1>
          {renderImg({ image, description })}
          <p
            className='text'
            dangerouslySetInnerHTML={createMarkup(description)}
          />
          <hr />
          <p className='text' dangerouslySetInnerHTML={createMarkup(body)} />
        </Col>
        <Col span={24} md={8}>
          <Row gutter={[24, 24]}>{news?.value?.map(renderPost)}</Row>
        </Col>
      </Row>
    </main>
  )
}

export default memo(Post)
