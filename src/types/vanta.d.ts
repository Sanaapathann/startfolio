declare module "vanta/dist/vanta.net.min" {
  import * as THREE from "three";

  export interface VantaEffect {
    destroy(): void;
  }

  export interface VantaNET {
    (options: {
      el: HTMLElement | null;
      THREE: typeof THREE;
      color?: number;
      backgroundColor?: number;
      points?: number;
      spacing?: number;
      maxDistance?: number;
      showDots?: boolean;
      lineWidth?: number;
      waveHeight?: number;
      waveSpeed?: number;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      scale?: number;
      scaleMobile?: number;
      minHeight?: number;
      minWidth?: number;
      forceAnimate?: boolean;
      colorMode?: string;
      blending?: string;
    }): VantaEffect;
  }

  const VANTA: VantaNET;
  export default VANTA;
}