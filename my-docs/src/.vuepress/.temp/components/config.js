import { hasGlobalComponent } from "C:/Users/Ma/Desktop/personalWebsite/my-docs/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "C:/Users/Ma/Desktop/personalWebsite/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "C:/Users/Ma/Desktop/personalWebsite/my-docs/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "C:/Users/Ma/Desktop/personalWebsite/my-docs/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
