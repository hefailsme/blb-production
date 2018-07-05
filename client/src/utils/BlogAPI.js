import axios from "axios";

export default {
  // Gets all books
  getBlog: function() {
    return axios.get("/api/blogs");
  },
  // Gets the book with the given id
  getBlog: function(id) {
    return axios.get("/api/blogs/" + id);
  },
  // Deletes the book with the given id
  deleteBlog: function(id) {
    return axios.delete("/api/blogs/" + id);
  },
  // Saves a book to the database
  saveBlog: function(bookData) {
    return axios.post("/api/blogs", blogData);
  }
};
