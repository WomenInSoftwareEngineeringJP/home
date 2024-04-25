module.exports = {
    ci: {
      upload: {
        target: 'temporary-public-storage',
      },
      collect: {
        staticDistDir: './dist',
        "url": [
          "http://localhost/"
        ]
      },
      asserts: {
        assertions: {
          'categories:accessibility': ['warn', { minScore: 1 }],
          'categories:best-practices': ['warn', { minScore: 1.0 }],
          'categories:performance': ['warn', { minScore: 0.2 }],
          'categories:seo': ['warn', { minScore: 1.0 }],
        },
      },
    },
  };