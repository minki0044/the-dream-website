"use client";

import Image from "next/image";
import { useState } from "react";

interface MemberImageProps {
  src: string;
  alt: string;
  name: string;
}

export function MemberImage({ src, alt, name }: MemberImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-32 h-32 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400">{name}</span>
      </div>
    );
  }

  return (
    <div className="w-32 h-32 rounded overflow-hidden bg-gray-200 flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={128}
        height={128}
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
} 