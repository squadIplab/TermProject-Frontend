import './App.css';
import { useState, useEffect } from 'react';
import features from './features';
import FeatureButton from './components/FeatureButton';
import Preview from './components/Preview';
import ImageCard from './components/ImageCard';
import { postImage, getAllImages } from './API/utils';
function App() {
	const [loading, setLoading] = useState(false);
	const [inputImage, setInputImage] = useState();
	const [inputLink, setInputLink] = useState();
	const [outputLink, setOutputLink] = useState();
	const [processedImageLinks, setProcessedImageLinks] = useState([]);
	useEffect(() => {
		updateOutputView();
	}, []);
	const handleImageUpload = (e) => {
		setInputImage(e.target.files[0]);
		setInputLink(URL.createObjectURL(e.target.files[0]));
	};
	const updateOutputView = async () => {
		const paths = await getAllImages();
		const links = paths.map(
			(path) => 'http://localhost:3001/static/' + path
		);
		setProcessedImageLinks(links);
		setOutputLink(links[links.length - 1]);
	};
	const handleSubmit = async (api, options) => {
		try {
			setLoading(true);
			const form = new FormData();
			form.set('input', inputImage);
			form.set(
				'name',
				inputImage.name.substring(0, inputImage.name.lastIndexOf('.'))
			);
			Object.entries(options).map(([key, value]) => form.set(key, value));
			await postImage(api, form);
			//image urls can be cached by browser. So keep checking in static folder also, if no change happens
			//This wont be an issue if different input images have different names
			//And output images have different names
			updateOutputView();
			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};
	return (
		<div className="App">
			<div className="preview">
				<h1>Term Project</h1>
				<Preview imageLink={inputLink} type="Input" />
				{loading && <h1 className="loading">Loading...</h1>}
				<Preview imageLink={outputLink} type="Output" />
			</div>
			<div className="upload">
				<input
					type="file"
					className="upload-btn"
					onChange={handleImageUpload}
				/>
			</div>
			<div className="features">
				{features.map((feature, i) => {
					return (
						<FeatureButton
							key={i}
							handler={handleSubmit}
							feature={feature}
						/>
					);
				})}
			</div>
			<div className="processed-tray">
				{processedImageLinks.map((link, i) => {
					return (
						<ImageCard
							key={i}
							imageLink={link}
							setOutputLink={setOutputLink}
							setInputImage={setInputImage}
							setInputLink={setInputLink}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
