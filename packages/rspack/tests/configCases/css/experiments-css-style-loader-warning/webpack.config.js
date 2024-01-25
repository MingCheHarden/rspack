module.exports = {
	module: {
		rules: [
			{
				test: /.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	experiments: {
		css: true
	},
	plugins: [
		compiler => {
			compiler.hooks.compilation.tap("Test", compilation => {
				compilation.warnings.push(new Error("Waring TEST !!!!"));
			});
		}
	]
};
