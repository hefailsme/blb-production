import axios from "axios";

export default {
  // Gets all books
  getEpisode: function() {
    return axios.get("/api/episodes");
  },
  // Gets the book with the given id
  getEpisode: function(id) {
    return axios.get("/api/episodes/" + id);
  },
  // Deletes the book with the given id
  deleteEpisode: function(id) {
    return axios.delete("/api/episodes/" + id);
  },
  // Saves a book to the database
  saveEpisode: function(Data) {
    return axios.post("/api/episodes", episodeData);
  }
};
