"use client";
import React from "react";
import { useEffect } from "react";

export default function Modelviewer({ id }) {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);
  return (
    <div>
      <model-viewer
        alt="a cool globe hologram"
        src={`https://11mn4if8mi.execute-api.eu-west-2.amazonaws.com/dev/3bay-files/${id}`}
        ar
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
      ></model-viewer>
    </div>
  );
}
