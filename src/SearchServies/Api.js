const KEY = `33196555-32542256d6492fa532620aad6`;
const fetchTopic = (topic, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${topic}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(
        `Sorry we dont have a picture witch name is ${this.props.topic}`
      )
    );
  });
};

export default fetchTopic;
