System.config({
  packages: {
    dist: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
System.import('dist/build/main')
  .then(null, console.error.bind(console));
