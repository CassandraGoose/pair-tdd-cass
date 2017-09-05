class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }
  isEmpty() {
    return this.songs.length == 0;
  }
  addSong(song) {
    this.songs.push(song);
  }
  songNames() {
    return this.songs.map((song) => song.name);
    // // new array of just the names
    // const songNames = [];
    // // iterate over songs
    // for(var i = 0; i < this.songs.length; i++) {
    //   // put names in new array
    //   songNames.push(this.songs[i].name);
    // }
    // // return new array
    // return songNames;
  }
  totalDuration() {
    return this.songs.reduce((totalDuration, song) => {
      totalDuration += song.duration;
      return totalDuration;
    }, 0);

    // let totalDuration = 0;
    // // loop over songs
    // for (var i = 0; i < this.songs.length; i++) {
    //   // add song.duration all together
    //   totalDuration += this.songs[i].duration;
    // }
    // // return the duration
    // return totalDuration;
  }
  swap(song1, song2) {
    let song1Index = this.songs.indexOf(song1);
    // find the place the first song in the array
      // iterate over the array if the current song is equal to song1
      // store the index
    let song2Index = this.songs.indexOf(song2);
    // find the place the second song in the array
      // iterate over the array if the current song is equal to song1
      // store the index
    // swap the 2 indecies
    this.songs[song1Index] = song2;
    this.songs[song2Index] = song1;
    // The ol' swapping problem:
    // let firstSong = this.songs[song1Index];
    // this.songs[song1Index] = this.songs[song2Index];
    // this.songs[song2Index] = firstSong;
  }
}

module.exports = Playlist;
