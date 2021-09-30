import { memo, useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import { Message } from '../../components/Message'
import { World, Economy, Technology } from './components'
import api from '../../services/api'

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [news, setNews] = useState({})

  function handleGetNews(subjects) {
    setNews({
      world: subjects[0]?.value.value,
      economy: subjects[1]?.value.value,
      technology: subjects[2]?.value.value,
    })
    setIsLoading(false)
  }

  useEffect(() => {
    Promise.allSettled([
      api.getNews('world'),
      api.getNews('economy'),
      api.getNews('technology'),
    ]).then(handleGetNews)
  }, [])

  if (isLoading) return <Message />

  return (
    <main>
      <Row gutter={[48, 48]}>
        <Col span={24} md={16}>
          <h1>World</h1>
          <World values={news?.world} />
        </Col>

        <Col span={24} md={8}>
          <h1>Economy</h1>
          <Economy values={news?.economy} />
        </Col>
      </Row>

      <hr />

      <Row gutter={[48, 48]}>
        <Col span={24}>
          <h1>Technology</h1>
          <Technology values={news?.technology} />
        </Col>
      </Row>
    </main>
  )
}

export default memo(Home)
