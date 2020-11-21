const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

const newAlbum = {
  albumId: "13",
  artistName: "Beyoncé",
  collectionName: "B'Day (Deluxe Edition)",
  artworkUrl100:
    "http://is5.mzstatic.com/image/thumb/Music/v4/6c/fc/6a/6cfc6a13-0633-f96b-9d72-cf56774beb4b/source/100x100bb.jpg",
  releaseDate: "2007-05-29T07:00:00Z",
  primaryGenreName: "Pop",
  url:
    "https://www.youtube.com/embed/RQ9BWndKEgs?rel=0&amp;controls=0&amp;showinfo=0",
};
// API

app.delete("/albums/:albumID", function (req, res) {
  const id = parseInt(req.params.albumId);
  const albumToDelete = albumsData.find((item) => item.id === id);
  const idx = albumsData.indexOf(albumToDelete);
  albumsData.splice(idx, 1);
  res.send(albumsData);
});

app.post("/albums/add-album", (req, res, send) => {
  albumsData.push(newAlbum);
  console.log(albumsData);
  res.send("<p>Album Added</p>");
});

app.get("/albums/:albumId", function (req, res) {
  const id = req.params.albumId;
  const result = albumsData.find((item) => item.albumId === id);
  res.send(result);
});

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.get("/songs", (req, res, next) => {
  res.send(albumsData);
});

app.get("/", (req, res, next) => {
  res.send("<h1> Main page </h1>");
});
app.listen(3000);
