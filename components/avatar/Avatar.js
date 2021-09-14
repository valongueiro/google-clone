import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";
import AvatarTooltipContent from "./AvatarTooltipContent";

function Avatar({ url, className }) {
  return (
    <Tippy
      content={<AvatarTooltipContent />}
      arrow={false}
      delay={400}
      duration={100}
      placement="bottom-start"
      theme="translucent"
    >
      <img
        src={url}
        alt="André Valongueiro"
        loading="lazy"
        className={`h-10 rounded-full cursor-pointer border-4 border-transparent hover:border-gray-200 ${className}`}
      />
    </Tippy>
  );
}

export default Avatar;
