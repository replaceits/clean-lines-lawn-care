
class Review {
  constructor(author, content, stars = 5) {
    this.author = author;
    this.content = content;
    this.stars = stars;

    if (!author || !content ) throw new Error('Invalid Review');
  }
}

const makeNewReview = (...args) => (
  Object.freeze(new Review(...args))
);

class Reviews {
  constructor(...reviews) {
    this.reviews = [];

    for (const review of reviews) {
      const [author, content, stars] = review;

      this.reviews.push(makeNewReview(author, content, stars));
    }

    this.reviews = Object.freeze(this.reviews);
  }

  top(num, page = 0) {
    return this.reviews.slice(page * num, (page * num) + num);
  }
}

export default new Reviews(
  ['Lisa Shiflett', 'Look no further for the BEST lawn service around! Reliable and quality work. Call Clean Lines Lawn Care and you won’t be disappointed!'],
  ['John Deer', 'Well I done did my yard through this here service and I done darn am amazed by their work'],
  ['Prince Rupert', 'I say my sir tis the finest yard!'],
  ['Tom Stewart', 'This is by far the only yard service you will ever need'],
  ['Bill Franks', 'I found my yard in spotless condition after a very lovily visit from the crew at Clean Lines Lawn Care'],
  ['Lily Grace', 'Passed the vibe check'],
  ['Alex Jefferson', '💯'],
  ['Humphrey Murphy', 'Reliable and efficient'],
  ['Derek Otterson', 'Cleared my pond of all debris and installed a new fountain'],
  ['Zack Gilbert', 'Never had such fast service'],
  ['Alice Breem', 'This is totally a legit review'],
);
