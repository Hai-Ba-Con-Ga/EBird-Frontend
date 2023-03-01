import React, { Ref, useEffect } from "react";

const useMap = (inputRef: any, handlePlaceChange: (place: any) => void) => {
  useEffect(() => {
    const wd = window as any;
    const autocomplete = new wd.google.maps.places.Autocomplete(
      inputRef?.current,
      {
        types: ["geocode", "establishment"],
        minLength: 3,
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log("No details available for input: '" + place.name + "'");
        return;
      }

      // Update state with selected location
      //   setLocation({
      //     name: place.name,
      //     address: place.formatted_address,
      //     latitude: place.geometry.location.lat(),
      //     longitude: place.geometry.location.lng(),
      //   });
      // });
      handlePlaceChange(place);
    });
  }, [inputRef]);
  return {};
};

export default useMap;
