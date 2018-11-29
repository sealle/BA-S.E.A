//Function to get the users media
export default class MediaHandler {
  getPermissions() {
    return new Promise((resolve, rej) => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false }) //TODO: change to true
        .then(stream => {
          resolve(stream);
        })
        .catch(err => {
          throw new Error(`Unable to fetch stream ${err}`);
        });
    });
  }
}
