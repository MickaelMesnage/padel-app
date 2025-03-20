import dynamic from "next/dynamic";
import React, { ComponentProps } from "react";

const NoSsr = (props: ComponentProps<typeof React.Fragment>) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
