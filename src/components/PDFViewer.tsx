import type React from "react"

interface PDFViewerProps {
  url: string
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  return (
    <div className="w-full h-screen">
      <object data={url} type="application/pdf" width="100%" height="100%">
        <p>
          It appears you don't have a PDF plugin for this browser. You can{" "}
          <a href={url}>click here to download the PDF file.</a>
        </p>
      </object>
    </div>
  )
}

export default PDFViewer

