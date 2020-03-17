System.config({
  transpiler: 'plugin-babel',
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    vue: 'npm:vue@2.6.3/dist/vue.esm.browser.js',
    'vue-loader': 'npm:dx-systemjs-vue-browser@latest/index.js',
    'devextreme': 'npm:devextreme@19.2',
    'devextreme-vue': 'npm:devextreme-vue@19.2',
    jszip: 'npm:jszip@3.1.3/dist/jszip.min.js',
    'quill': 'npm:quill@1.3.7/dist/quill.js',
    'devexpress-diagram': 'npm:devexpress-diagram',
    'devexpress-gantt': 'npm:devexpress-gantt',
    'showdown': 'npm:showdown@1.8.6/dist/showdown.js',
    'turndown': 'npm:turndown@5.0.1/lib/turndown.browser.umd.js',

    'plugin-babel': 'npm:systemjs-plugin-babel@0/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel@0/systemjs-babel-browser.js'
  },
  meta: {
    '*.vue': { loader: 'vue-loader' }
  },
  packages: {
    'devextreme-vue': {
      main: 'index.js'
    },
    'devextreme': {
      defaultExtension: 'js'
    }
  },
  babelOptions: {
    sourceMaps: false,
    stage0: true
  }
});
