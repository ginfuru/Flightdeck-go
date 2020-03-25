module.exports = {
  tasks: {
    eslint: true,
    imagemin: true,
    svg: true,
    watch: true,
    deploy: false,
  },

  paths: {
    images: "./static",
    assets: "./assets",
  },

  deploy: {
    // Server IP ie: root@192.168.0.1 OR ServerName if you use agentforwarding
    remote: "",
    // Path to web root ie: /var/www/html
    root: "",
    exclude: [
      // Excluding files/folders inside of the _site folder
      ".DS_Store",
      "*.lock",
      ".git",
    ],
    // set to false if deploying to production
    dryrun: true,
  },

  // eslintLoader: {
  //   enforce: 'pre',
  //   test: /\.js$/,
  //   exclude: /node_modules/,
  //   loader: 'eslint-loader',
  // },

  hugo: {
    dest: "public",
  },

  imagemin: {
    src: "_images",
    dest: "images",
    interlaced: false,
    mozjpeg: [
      {
        quality: 75,
        progressive: true,
      },
    ],
    optimizationLevel: 5,
    //svgoPlugins: [{ removeViewBox: false }, { cleanupIDs: false }],
  },

  svgSprite: {
    src: "_images/svg",
    dest: "images/svg",
    filename: "_all-icons.svg",
  },

  // js: {
  //   src: 'js',
  //   dest: 'js',
  //   entry: ['scripts.js'],
  // },
};
