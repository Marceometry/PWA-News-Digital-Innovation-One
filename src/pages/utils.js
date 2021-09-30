export const createMarkup = (html) => ({ __html: html })

export const renderTitle = (title) => (
  <h2 dangerouslySetInnerHTML={createMarkup(title)} />
)

export const renderDescription = (description) => (
  <p dangerouslySetInnerHTML={createMarkup(description)} />
)

export const renderImg = ({ image, description }) => (
  <img src={image.url} alt={description} />
)
