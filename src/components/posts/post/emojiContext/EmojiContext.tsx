import { useEffect, useState } from "react";
import { Emoji, Wrapper } from "./EmojiContextStyles";
import $ from "jquery";

interface IProps {
  pickEmoji: (e: string) => void;
  show: boolean;
  idx: number;
}
export const EmojiContext: React.FC<IProps> = ({ pickEmoji, show, idx }) => {
  const onPickEmoji = (emoji: string, e: any) => {
    e.nativeEvent.stopImmediatePropagation();
    pickEmoji(emoji);
  };
  const [emojies, setEmojies] = useState([
    "😀",
    "😄",
    "😁",
    "😆",
    "😅",
    "🤣",
    "🙂",
    "😭",
  ]);

  useEffect(() => {
    const panel = $(`#emojiContext${idx}`);
    if (show) {
      panel.show({ duration: 100 }).animate(
        {
          opacity: 1,
          bottom: "2.3rem",
        },
        { duration: 100 }
      );
    } else {
      panel
        .animate(
          {
            opacity: 0,
            bottom: "2rem",
          },
          { duration: 100 }
        )
        .hide({ duration: 100 });
    }
  }, [show]);

  return (
    <Wrapper id={`emojiContext${idx}`}>
      {emojies &&
        emojies.map((emoji: string) => (
          <Emoji onClick={(e: any) => onPickEmoji(emoji, e)}>{emoji}</Emoji>
        ))}
    </Wrapper>
  );
};
