import Vue from 'vue';
import iView from 'iview';
import locale from 'iview/dist/locale/en-US'; // Change locale, check node_modules/iview/dist/locale
// eslint-disable-next-line import/extensions
import './theme/index.less';

Vue.use(iView, {
    locale,
});
