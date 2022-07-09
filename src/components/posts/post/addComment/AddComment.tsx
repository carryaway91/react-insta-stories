import { useEffect, useState } from "react";
import { EmojiContext } from "../emojiContext/EmojiContext";
import { Input, Submit, Wrapper } from "./AddCommentStyles";

interface IProps {
  idx: number;
}
export const AddComment: React.FC<IProps> = ({ idx }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const [showEmojies, setShowEmojies] = useState(false);

  useEffect(() => {
    if (value === "") {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [value]);

  useEffect(() => {
    document.getElementById("root")?.addEventListener("click", (e: any) => {
      setShowEmojies(false);
    });
    document
      .getElementById(`input${idx}`)
      ?.addEventListener("input", (e: any) => {
        setValue(e.target?.innerText);
      });
  }, []);

  const onPickEmoji = (e: string) => {
    let input = document.getElementById(`input${idx}`);
    if (input) {
      setValue((val) => val + e);
      input.innerText = input?.innerText + e;
    }
  };

  const toggleEmojies = (e: any) => {
    showEmojies ? setShowEmojies(false) : setShowEmojies(true);
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  return (
    <Wrapper>
      <div className="flex" style={{ alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <EmojiContext
            show={showEmojies}
            pickEmoji={(e: string) => onPickEmoji(e)}
            idx={idx}
          />
          <svg
            id="emojiIcon"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            cursor="pointer"
            onClick={(e: any) => toggleEmojies(e)}
          >
            <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
          </svg>
        </div>
        <p>
          <Input
            id={`input${idx}`}
            contentEditable
            role="textbox"
            placeholder="Add a comment..."
          />
        </p>
      </div>
      <Submit active={active}>Post</Submit>
    </Wrapper>
  );
};
