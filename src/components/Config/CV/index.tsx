"use client"
import { Button, Tooltip } from "@/components/UI"
import { FileText } from "lucide-react";

const URL_CV = process.env.NEXT_PUBLIC_CV;

export default function CV() {
  return (
    <div className="fixed right-3 bottom-10 z-20">
      <Tooltip variant={'left'} text={'CV'}>
        <Button variant={'icon'} onClick={() => window.open(URL_CV, '_blank')}>
          <FileText />
        </Button>
      </Tooltip>
    </div>
  )
}
