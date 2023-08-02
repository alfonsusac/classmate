"use client";

import { Paperclip } from "@phosphor-icons/react";
import { Attachment, Resource } from "@prisma/client";
import { Session } from "next-auth";
import React from "react";
import * as PostAttachment from "./Attachment";

export default function PostContent({
  resource,
}: {
  resource: Resource & {
    attachment: Attachment | null;
  };
}) {
  return (
    <>
      <p className="whitespace-pre-line break-words h-full max-h-32 overflow-y-auto bg-dark2/50 py-1 pl-2 pr-1 rounded-lg">{ resource.content }</p>
      { resource.attachment ? (
        <div className="flex flex-row text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M206.83,125.17a4,4,0,0,1,0,5.66l-82.06,82a52,52,0,0,1-73.54-73.55L150.52,38.55a36,36,0,1,1,50.94,50.9l-99.3,100.69a20,20,0,1,1-28.3-28.27l83.29-84.68a4,4,0,1,1,5.7,5.61L79.54,167.5a12,12,0,1,0,16.95,17L195.78,83.81A28,28,0,1,0,156.2,44.18L56.91,144.87a44,44,0,1,0,62.21,62.26l82-82A4,4,0,0,1,206.83,125.17Z"></path></svg>
          <div className="p-1"></div>
          <PostAttachment.default attachment={ resource.attachment } />
        </div>
      ) : null }
    </>
  );
}
