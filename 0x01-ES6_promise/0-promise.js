export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('msg if done');
    reject(new Error('msg if error'));
  });
}
