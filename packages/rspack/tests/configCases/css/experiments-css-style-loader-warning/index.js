const expectWarning = require("../../../helpers/expectWarningFactory")();
try {
	require("./index.css");
} catch (e) {
	// ignore
}

it("should print correct warning messages when experiments.css=true exists with style-loader", () => {});
