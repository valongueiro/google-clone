import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";
import { ViewGridIcon } from "@heroicons/react/solid";

function AppsIcon() {
  return (
    <Tippy
      content={<p className="text-xs">Google apps</p>}
      arrow={false}
      delay={400}
      duration={100}
      placement="bottom-end"
      theme="translucent"
    >
      <div>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer" />
      </div>
    </Tippy>
  );
}

export default AppsIcon;
