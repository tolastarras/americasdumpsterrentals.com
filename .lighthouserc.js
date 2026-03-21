module.exports = {
  ci: {
    collect: {
      url: [],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage --disable-gpu',
        extraHeaders: {
          "Accept-Language": "en-US,en;q=0.9"
        },
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
