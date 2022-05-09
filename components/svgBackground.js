/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { UpDown, UpDownWide } from "../utils/animations";
import SvgIcon from "../utils/svg";
function SvgBackground() {
  return (
    <div
      css={css`
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100vh;
        transform: translate3d(0px, 0px, 0px);
      `}
    >
      <UpDown>
        <SvgIcon
          icon="triangle"
          hiddenMobile
          width={48}
          stroke
          color="icon_orange"
          left="10%"
          top="20%"
        />
        <SvgIcon
          icon="hexa"
          width={48}
          stroke
          color="#e53e3e"
          left="60%"
          top="70%"
        />
        <SvgIcon icon="box" width={6} color="#4a5568" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SvgIcon
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="#3182ce"
          left="80%"
          top="10%"
        />
        <SvgIcon
          icon="triangle"
          width={12}
          stroke
          color="#f1f1f1"
          left="90%"
          top="50%"
        />
        <SvgIcon
          icon="circle"
          width={16}
          color="#4a5568"
          left="70%"
          top="90%"
        />
        <SvgIcon
          icon="triangle"
          width={16}
          stroke
          color="#2d3748"
          left="30%"
          top="65%"
        />
        <SvgIcon
          icon="cross"
          width={16}
          stroke
          color="#ed64a6"
          left="28%"
          top="15%"
        />
        <SvgIcon icon="circle" width={6} color="#2d3748" left="75%" top="10%" />
        <SvgIcon
          icon="upDown"
          hiddenMobile
          width={8}
          color="#2d3748"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SvgIcon
        icon="circle"
        hiddenMobile
        width={24}
        color="#4a5568"
        left="5%"
        top="70%"
      />
      <SvgIcon icon="circle" width={6} color="#2d3748" left="4%" top="20%" />
      <SvgIcon icon="circle" width={12} color="#2d3748" left="50%" top="60%" />
      <SvgIcon icon="upDown" width={8} color="#2d3748" left="95%" top="90%" />
      <SvgIcon
        icon="upDown"
        hiddenMobile
        width={24}
        color="#4a5568"
        left="40%"
        top="80%"
      />
      <SvgIcon
        icon="triangle"
        width={8}
        stroke
        color="#4a5568"
        left="25%"
        top="5%"
      />
      <SvgIcon icon="circle" width={64} color="#48bb78" left="95%" top="5%" />
      <SvgIcon
        icon="box"
        hiddenMobile
        width={64}
        color="#805ad5"
        left="5%"
        top="90%"
      />
      <SvgIcon icon="box" width={6} color="#2d3748" left="10%" top="10%" />
      <SvgIcon icon="box" width={12} color="#2d3748" left="40%" top="30%" />
      <SvgIcon
        icon="hexa"
        width={16}
        stroke
        color="#4a5568"
        left="10%"
        top="50%"
      />
      <SvgIcon
        icon="hexa"
        width={8}
        stroke
        color="#4a5568"
        left="80%"
        top="70%"
      />
    </div>
  );
}

export default SvgBackground;
