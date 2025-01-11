import {
  css,
  keyframes,
  FlattenSimpleInterpolation,
  Keyframes,
} from "styled-components";
import { theme } from "./themeSystem";

// Types pour les keyframes
export const fadeIn: Keyframes = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

export const fadeInFromRight: Keyframes = keyframes`
  0% {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(100%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInFromTop: Keyframes = keyframes`
  0% {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: translateY(-40%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInFromBottom: Keyframes = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }

  100%{
    transform: translateY(0%);
    opacity: 1;
  }

`;

// Types pour les animations CSS
export const adminAnimation: FlattenSimpleInterpolation = css`
  .admin-appear {
    opacity: 0.1;
    transform: translateY(100%);
    &.admin-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 500ms;
    }
  }
`;

export const basketAnimation: FlattenSimpleInterpolation = css`
  .animation-basket-appear {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-appear-active {
    .card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-basket-enter {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-enter-active {
    .card {
      transition: ${theme.animations.speed.quick};
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-basket-exit {
    .card {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .card {
      transform: translateX(-100px);
      opacity: 0%;
      transition: ${theme.animations.speed.quick};
    }
  }
`;

export const menuAnimation: FlattenSimpleInterpolation = css`
  /* MOUNTING */
  .menu-animation-enter {
    opacity: 0.01;
    transform: translateX(-120px);
    &.menu-animation-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all ${theme.animations.speed.quick} ease-out;
    }
  }

  /* UNMOUNTING */
  .menu-animation-exit {
    opacity: 1;
    transform: translateY(0);
    &.menu-animation-exit-active {
      opacity: 0.01;
      transition: ${theme.animations.speed.quick} ease-out;
    }
  }
`;
