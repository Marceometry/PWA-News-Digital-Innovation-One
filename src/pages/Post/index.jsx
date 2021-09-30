import { memo, useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { RelatedPost, MainPost } from './components'
import { Message } from '../../components/Message'
import { Row, Col } from 'antd'
import { PostPage } from './styles.js'
import api from '../../services/api'

function Post() {
  const { subject, id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState({})
  const [news, setNews] = useState([])

  const handleNews = useCallback((data) => {
    setNews(data[0]?.value)
    setPost(data[1]?.value)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    Promise.allSettled([
      api.getNews(subject),
      api.getNewsById(subject, id),
    ]).then(handleNews)
  }, [subject, id, handleNews])

  if (isLoading) return <Message />

  if (!post?.id) return <Message>Post não encontrado</Message>

  return (
    <PostPage>
      <Link to='/'>Home</Link>

      <Row gutter={[48, 48]}>
        <MainPost post={post} subject={subject} />

        <Col span={24} md={8}>
          <Row gutter={[24, 24]}>
            {news?.value?.map((post) => (
              <RelatedPost post={post} subject={subject} key={post.id} />
            ))}
          </Row>
        </Col>
      </Row>
    </PostPage>
  )
}

export default memo(Post)
