
class Service {
  constructor(name, image) {
    this.name = name;
    this.image = image;

    if (!name || !image ) throw new Error('Invalid Service');
  }
}

const makeNewService = (...args) => (
  Object.freeze(new Service(...args))
);

class Services {
  services = Object.freeze(Services.services.map(([...service]) => makeNewService(...service)))

  top(num, page = 0) {
    return this.services.slice(page * num, (page * num) + num);
  }

  static services = [
    ['Aeration', 'https://cleanlineslawncare.s3.us-east-1.amazonaws.com/oldimages/AerationAfter.jpg'],
    ['Pruning', 'https://cleanlineslawncare.s3.us-east-1.amazonaws.com/oldimages/PruningAfter.jpg'],
    ['Shrubbery', 'https://cleanlineslawncare.s3.us-east-1.amazonaws.com/oldimages/ShrubberyCareAfter.jpg'],
    ['Weeding', 'https://cleanlineslawncare.s3.us-east-1.amazonaws.com/oldimages/WeedingAfter.jpg'],
    ['Mowing', 'https://cleanlineslawncare.s3.us-east-1.amazonaws.com/oldimages/Mowing.jpg'],
    ['Mulching', 'https://cleanlineslawncare.s3.us-east-1.amazonaws.com/oldimages/Mulching1.jpg'],
  ]
}

export default new Services();
