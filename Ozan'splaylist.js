// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
    const playl=new Set(playlist)
    playl.delete(playlist)
    const arr=[...playl]
    return arr;
    throw new Error('Please implement the removeDuplicates function');
  }
  
  /**
   * Checks whether a playlist includes a track.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {boolean} whether the track is in the playlist
   */
  export function hasTrack(playlist, track) {
    const playl=new Set(playlist)
    return playl.has(track)
    throw new Error('Please implement the hasTrack function');
  }
  
  /**
   * Adds a track to a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
  export function addTrack(playlist, track) {
    const playl=new Set(playlist);
    playl.add(track)
    const arr=[...playl]
    return arr
    throw new Error('Please implement the addTrack function');
  }
  
  /**
   * Deletes a track from a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
  export function deleteTrack(playlist, track) {
    const playl=new Set(playlist);
    playl.delete(playlist)
    playl.delete(track)
    const arr=[...playl]
    return arr
    throw new Error('Please implement the deleteTrack function');
  }
  
  /**
   * Lists the unique artists in a playlist.
   *
   * @param {string[]} playlist
   * @returns {string[]} list of artists
   */
  export function listArtists(playlist) {
    let e = [];
  
    playlist.forEach(item => {
      const parts = item.split('-');
      if (parts.length > 1) {
        const artist = parts[1].trim(); // Trim the artist name
        if (!e.includes(artist)) {
          e.push(artist);
        }
      }
    });
  
    // e will contain all unique values
    return e;
  }
  
  