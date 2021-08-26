
class Review {
  constructor(author, content, stars = 5) {
    this.author = author;
    this.content = content;

    if (!author || !content ) throw new Error('Invalid Review');
  }
}

const makeNewReview = (...args) => (
  Object.freeze(new Review(...args))
);

class Reviews {
  constructor(...reviews) {
    this.reviews = [];

    for (const service of reviews) {
      const [author, content] = service;

      this.reviews.push(makeNewReview(author, content));
    }

    this.reviews = Object.freeze(this.reviews);
  }

  top(num, page = 0) {
    return this.reviews.slice(page * num, num);
  }
}

export default new Reviews(
  ['Lisa Shiflett', 'Look no further for the BEST lawn service around! Reliable and quality work. Call Clean Lines Lawn Care and you won’t be disappointed!'],
);
