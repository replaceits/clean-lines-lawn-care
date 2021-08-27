
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
  reviews = Object.freeze(Reviews.reviews.map(([...review]) => makeNewReview(...review)))

  top(num, page = 0) {
    return this.reviews.slice(page * num, (page * num) + num);
  }

  static reviews = [
    ['Lisa Shiflett', 'Look no further for the BEST lawn service around! Reliable and quality work. Call Clean Lines Lawn Care and you won’t be disappointed!'],
    ['George Hornsby', 'William Joel Christmas does fantastic yard work and is very reasonable and dependable. If you live in Lake Monticello or the surronding area, please give him a call, you won\'t be sorry you did.'],
    ['Chuck Haislip', 'William makes sure that he leaves every customer happy. Clean lines lawn care is the best around.'],
    ['Michael Robbins', 'Clean Lines took care of my yard a few weeks ago and did the sam. Better than if I did it myself! They take pride in the job they do. Very reasonable price.'],
    ['Jessica Hall', 'You know who will come out and care for your yard, rain or shine this time of year? Williams Joel Christmas! This guy is such a hard worker... Highly recommend!!!!!'],
    ['Shelly Quick', 'Exceptional, prompt service at a very reasonable price.\n\nJoey and his staff were lifesavers with my last minute snow removal request. They kept me informed with their ETA, provided excellent work in a very timely manner. I have hired them to maintain my property for the winters months. Thank you, Joey!'],
  ]
}

export default new Reviews();
