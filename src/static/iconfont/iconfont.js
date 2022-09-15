import {createGlobalStyle} from 'styled-components';

createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 3595800 */
  src: url('./iconfont.woff2?t=1661183452366') format('woff2'),
       url('./iconfont.woff?t=1661183452366') format('woff'),
       url('./iconfont.ttf?t=1661183452366') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
