/**
 * 字节跳动图标库：https://iconpark.oceanengine.com/official
 * and vue3 https://github.com/bytedance/IconPark/tree/master/packages/vue-next
 * element-plus icon: https://element-plus.gitee.io/#/zh-CN/component/icon
 * @description 图标库按需注册
 * @author hu-snail
 * @example <icon-user theme="outline" size="16" fill="#999" />
 * @example <el-icon :size="20"> <edit /> </el-icon>
 */

// iconpark
import {
  User,
  Lock,
  Alipay,
  Wechat,
  Github,
  Twitter,
  Google,
  MenuUnfoldOne,
  MenuFoldOne,
  FullScreen,
  OffScreen,
  Refresh,
  Remind,
  AllApplication,
  Close,
  ToLeft,
  ToRight,
  Minus,
  Mail,
} from '@icon-park/vue-next';

// el-icon
import { Edit } from '@element-plus/icons';

// 所需的组件
export const components = [
  User,
  Lock,
  Alipay,
  Edit,
  Wechat,
  Github,
  Twitter,
  Google,
  MenuUnfoldOne,
  MenuFoldOne,
  FullScreen,
  OffScreen,
  Refresh,
  Remind,
  AllApplication,
  Close,
  ToLeft,
  ToRight,
  Minus,
  Mail,
];

import SvgIcon from '@/components/SvgIcon/index.vue';
// 注册
export default (app) => {
  app.component('svg-icon', SvgIcon);
  components.forEach((component) => {
    app.component(component.name.replace('icon-', ''), component);
  });
};
