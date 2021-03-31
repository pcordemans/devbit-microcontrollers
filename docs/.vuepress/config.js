module.exports = {
  title: 'Microcontrollers',
  description: 'Microcontrollers course for the devbit curriculum',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Toledo', link: 'https://www.vives.be/en/tools/toledo' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/fundamentals/', 'Fundamentals'],
      ['/cplusplus/', 'C++'],
      ['/digital-io/', 'Digital IO'],
      ['/timers/', 'Timers'],
      ['/interrupts/', 'Interrupts'],
      ['/analog-io/', 'Analog IO'],
      ['/uart/', 'UART'],
      ['/i2c/', 'I²C'],
      ['/spi/', 'SPI']
    ],
    repo: 'https://github.com/pcordemans/devbit-microcontrollers',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
