import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Plus } from "lucide-react";

export const ImageZoom = ({ children, ...rest }) => {
  return (
    <Zoom zoomMargin={10} {...rest}>
      {children}
    </Zoom>
  );
};

export const ProfilePhoto = ({ src, alt = "Foto", name }) => {
  return (
    <div className="border border-charcoal/10 relative mx-auto my-6 flex h-[336px] max-w-[250px] flex-col items-start p-4 md:h-[28rem] md:max-w-sm">
      <Plus strokeWidth={0.5} className="text-clay absolute -left-4 -top-4 h-8 w-8" />
      <Plus strokeWidth={0.5} className="text-clay absolute -bottom-4 -left-4 h-8 w-8" />
      <Plus strokeWidth={0.5} className="text-clay absolute -right-4 -top-4 h-8 w-8" />
      <Plus strokeWidth={0.5} className="text-clay absolute -bottom-4 -right-4 h-8 w-8" />
      <ImageZoom>
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="h-[300px] w-full object-cover md:h-[404px]"
            style={{ objectPosition: "center 10%" }}
          />
          {name && (
            <div className="relative -mt-14 bg-gradient-to-b from-black/0 to-black/80 text-white md:-mt-24 pb-3">
              <h2 className="z-20 text-center text-[28px] font-black tracking-tighter md:text-[44px] font-heading">
                {name}
              </h2>
            </div>
          )}
        </div>
      </ImageZoom>
    </div>
  );
};
