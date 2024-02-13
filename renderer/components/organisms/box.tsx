import { IoMdDownload } from "react-icons/io";
import { Button } from "../atoms/button";
import { HeadingOne } from "../atoms/heading-one";

interface BoxProps {
  children: React.ReactNode
}

function Box ({children}: BoxProps) {
  return (
    <div className="gap-4 flex justify-between items-center flex-col">
      {children}
    </div>
  )
}

export { Box }