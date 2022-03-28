import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import ReadPDF from './ReadPDF'
import useStyles from '../Auth/AuthStyles';

const TermsAndConditions = (data) => {

    const classes = useStyles()
	const [, setIsData] = useState(data)

	useEffect(() => {
		setIsData(data)
	})

	return (
		<Popup
			trigger={<p className={classes.termsAndCond}>Leer terminos y condiciones</p>}
			modal
			nested
		>
			{(close) => (
				<div className={classes.containerModal}>
					<div className={classes.modal}>
						<button className="close" onClick={close}>
							&times;
						</button>
						<div className="header"> Terminos y condiciones </div>
						<div className="content">
							<ReadPDF />
						</div>
					</div>
				</div>
			)}
		</Popup>
	)
}

export default TermsAndConditions