import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import * as ELIcons from "@element-plus/icons";

export default (app) => {
  Object.keys(ELIcons).forEach((key) => {
    app.component(key, ELIcons[key]);
  });
  app.use(ElementPlus, { locale });
};
