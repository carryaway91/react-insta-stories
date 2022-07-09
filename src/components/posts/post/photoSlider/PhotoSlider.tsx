import React, { useEffect, useRef, useState } from "react";
import { Arrow } from "../../../../img/icons/arrow";
import { Heart } from "../../../../img/icons/Heart";
import { PhotoList, Img, ImgWrapper, Wrapper } from "./PhotoSliderStyles";

interface IProps {
  photos: String[];
  photoCount: number;
  setPhotoCount: (count: number) => void;
  onLiked: () => void;
}

export const PhotoSlider: React.FC<IProps> = ({
  photos,
  photoCount,
  setPhotoCount,
  onLiked,
}) => {
  const [left, setLeft] = useState("0px");
  const photoList = useRef<HTMLUListElement>(null);
  const [forward, setDisableForward] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (like) {
      onLiked();
      setTimeout(() => {
        setLike(false);
      }, 1000);
    }
  }, [like]);
  useEffect(() => {
    photoCount === photos.length - 1
      ? setDisableForward(true)
      : setDisableForward(false);
  }, [photoCount, photos]);

  const moveBack = () => {
    let leftPos = parseInt(left);
    leftPos = leftPos - 466;
    setLeft(`${leftPos}px`);
    setPhotoCount(photoCount + 1);
  };

  const moveForward = () => {
    let leftPos = parseInt(left);
    leftPos = leftPos + 466;
    setLeft(`${leftPos}px`);
    setPhotoCount(photoCount - 1);
  };

  return (
    <Wrapper>
      <PhotoList
        left={left}
        ref={photoList}
        onDoubleClick={() => setLike(true)}
      >
        {photos &&
          photos.map((p: String) => (
            <ImgWrapper>
              {like && <Heart />}
              <Img src={`${p}`}></Img>
            </ImgWrapper>
          ))}
      </PhotoList>
      <Arrow show={left !== "0px"} pos="left" click={moveForward} />
      <Arrow show={!forward} pos="right" click={moveBack} />
    </Wrapper>
  );
};
