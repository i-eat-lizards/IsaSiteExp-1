import { useEffect } from 'react'

const reviews = [
  {
    name: 'Patrícia',
    text: 'A Isabel é fantástica e tem sido uma mais valia nas notas da minha filha, a Sofia tem explicação desde do ano passado e cada vez está melhor a matemática e aprendeu a gostar cada vez mais da disciplina.',
    rating: 5,
  },
]

function Reviews() {
  useEffect(() => { document.title = 'Reviews - Prof. Isabel Silva | Explicações de Matemática Online' }, [])
  return (
    <section className="page reviews">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>De momento não há reviews. Volte mais tarde!</p>
      ) : (
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-stars">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <p className="review-text">&ldquo;{review.text}&rdquo;</p>
            <p className="review-author">&mdash; {review.name}</p>
          </div>
        ))}
      </div>
      )}
    </section>
  )
}

export default Reviews
