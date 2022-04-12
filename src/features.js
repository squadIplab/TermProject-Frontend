const features = [
	{
		name: 'Add To Tray',
		api: 'add',
		options: [],
	},
	{
		name: 'Grayscale',
		api: 'grayscale',
		options: [],
	},
	{
		name: 'EED',
		api: 'eed',
		options: [],
	},
	{
		name: 'Chan-Vese',
		api: 'chan_vese',
		options: ['iterations'],
	},
	{
		name: 'Binarization',
		api: 'binarize',
		options: ['threshold'],
	},
  {
    name: "Text-To-Document-Ratio",
    api: "text_ratio",
    options: [],
  },
];

export default features;
