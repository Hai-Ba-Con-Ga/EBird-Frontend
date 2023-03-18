import React, { useMemo } from "react";

import ImageKit from "imagekit-javascript";
const useImagekit = () => {
	const imagekit = useMemo(
		() =>
			new ImageKit({
				urlEndpoint: "https://ik.imagekit.io/flamefoxeswyvernp/",
				authenticationEndpoint: "https://wyvernpserver.tech/imagekit/sign",
				publicKey: "public_S6vyU9FG56dNofgzx0hbbBAZGDs=",
			}),
		[]
	);
	return imagekit;
};

export default useImagekit;
