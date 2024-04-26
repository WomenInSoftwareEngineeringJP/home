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
      assert: {
        assertions: {
          'categories:accessibility': ["error", { minScore: 0.9 }],
          'categories:best-practices': ["warn", { minScore: 0.8 }],
          "categories:performance": ["error", {"minScore": 0.8}],
          'categories:seo': ["error", { minScore: 0.9 }],
        },
      },
    },
  };