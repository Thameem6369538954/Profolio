import React from "react";

const ImageSection = () => {
  const images = [
    { id: 1, src: "https://via.placeholder.com/600x400", alt: "Image 1" },
    { id: 2, src: "https://via.placeholder.com/600x400", alt: "Image 2" },
    { id: 3, src: "https://via.placeholder.com/600x400", alt: "Image 3" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Separate Images Layout
      </h1>
      {images.map((image) => (
        <div
          key={image.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
          <div className="p-4 text-center">
            <p className="font-semibold">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
