export default function syncMiddleware(callback) {
    return (req, res, next) => {
      Promise.resolve(callback(req, res, next)).catch(next);
    };
  }