import { useState } from 'react'
import PDF from './Terminos.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const ReadPDF = () => {
	const [numPages, setNumPages] = useState(null)
	const [pageNumber, setPageNumber] = useState(1)

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages)
	}

	const goToPrevPage = () =>
		setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1)
	const goToNextPage = () => setPageNumber(pageNumber + 1)

	return (
		<div>
			<div>
				<Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
					<div>
						<Page pageNumber={pageNumber} width={300} />
					</div>
				</Document>
			</div>
			<p>
				Page {pageNumber} of {numPages}
			</p>
			<nav>
				<button onClick={goToPrevPage}> Prev</button>
				<button onClick={goToNextPage}> Next</button>
			</nav>
		</div>
	)
}

export default ReadPDF