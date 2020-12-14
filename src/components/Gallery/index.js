import React, { useState } from "react";
import { Image } from "antd";
import * as _ from "lodash";

const Gallery = (props) => {
  const [images] = useState(props.images || []);
  const [selectedImage, setSelectedImage] = useState(
    props.images ? props.images[0] : ""
  );

  const imageClick = (url) => {
    setSelectedImage(url);
  };
  return images.length ? (
    <div>
      <Image src={selectedImage} className="thumbnail-primary" />
      <div className="list-image">
        {images &&
          _.map(images, (image, index) => {
            return (
              <Image
                preview={false}
                width={100}
                src={image}
                onClick={() => imageClick(image)}
              />
            );
          })}
      </div>
    </div>
  ) : (
    <div>
      <Image src="/default-image.png" className="thumbnail-primary" />
    </div>
  );
};
export default Gallery;
