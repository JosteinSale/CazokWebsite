import { YT } from "youtube";

// We add a few declarations to the pre-existing Window interface

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: typeof YT; // Adding YT type here for completeness
  }
}

export {};